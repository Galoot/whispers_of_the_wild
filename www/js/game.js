playerColours = ['green', 'red', 'blue', 'orange'];
var bonusPoints = 15;


function saveNames() {
    $('.game-player-edit').each(function(index) {
        var elementID = $(this).attr('id');
        var playerIndex = elementID.substring(12, elementID.length);
        if ($(this).val().trim() !== '') {
            app.game.players[playerIndex].name = $(this).val();
        }

        $("#player-" + playerIndex).html(app.game.players[playerIndex].name);
    });
}

function validatePlayerNames() {
    var playerNameReg = new RegExp(/^(PLAYER)(\s)([0-9])+(\s)(NAME)/i);
    var namedPlayers = [];
    for (var x = 0; x < app.game.players.length; x++) {
        var player = app.game.players[x];
        if (!playerNameReg.test(player.name)) {
            namedPlayers.push(player);
        }
    }
    if (namedPlayers.length === 0) {
        namedPlayers = app.game.players;
    }
    app.game.players = namedPlayers;
}

var gamePlayerSelectionFinish = false;
function loanAnimalSelection() {
    // set player name & color
    var playerIndex = app.game.animalSelectplayerIndex;
    $("#player-selecting").html(app.game.players[playerIndex].name);
    // remove all player classes
    for (var pi = 0; pi < app.game.players.length; pi++) {
        $("#player-selecting").removeClass("player-" + pi);
        $(".game-select-animal-icon").removeClass("player-" + pi);
    }
    // add the current player class
    $("#player-selecting").addClass("player-" + playerIndex);
    $(".game-select-animal-icon").addClass("player-" + playerIndex);

    // configure next/finish button
    var finish = ((playerIndex+1) >= app.game.players.length);
    // $("#player-selecting-next").html(finish ? "Finish" : "Next");

    $("#player-selecting-next").off('click');
    $("#player-selecting-next").on('click', function(event) {
        if (app.game.players[app.game.animalSelectplayerIndex].selection.length < 3) {
            app.view.modal("gameAnimalSelectMessage");
        } else {
            // Update message content
            $("#gameAnimalConfirmMessage .modal-content .game-message-player-name")
                    .html(app.game.players[app.game.animalSelectplayerIndex].name);
            var selection1ImgSrc = $("#game-select-animal-icon-"
                    + app.game.players[app.game.animalSelectplayerIndex].selection[0].animalID).attr("src");
            var selection2ImgSrc = $("#game-select-animal-icon-"
                    + app.game.players[app.game.animalSelectplayerIndex].selection[1].animalID).attr("src");
            var selection3ImgSrc = $("#game-select-animal-icon-"
                    + app.game.players[app.game.animalSelectplayerIndex].selection[2].animalID).attr("src");

            $("#game-message-animal-icon1").attr("src", selection1ImgSrc);
            $("#game-message-animal-icon2").attr("src", selection2ImgSrc);
            $("#game-message-animal-icon3").attr("src", selection3ImgSrc);

            gamePlayerSelectionFinish = ((playerIndex+1) >= app.game.players.length);
            // Show modal
            app.view.modal("gameAnimalConfirmMessage");
        }
    });

    $(".game-select-animal-block").off('click');
    $(".game-select-animal-block").on('click', function(event) {
        var animalElementID = event.currentTarget.id;

        var animalID = animalElementID.substring(21, animalElementID.length);

        // check for existing animal
        var duplicateFound = false;
        for (var sel = 0; sel < app.game.players[app.game.animalSelectplayerIndex].selection.length; sel++) {
            if (app.game.players[app.game.animalSelectplayerIndex].selection[sel].animalID == animalID) {
                duplicateFound = true;
                // Simply de-select the animal
                app.game.players[app.game.animalSelectplayerIndex].selection.splice(sel, 1);
                $("#" + animalElementID + " .game-select-animal-icon").toggleClass("icon-selected");

                // Give a wearning message
//                app.view.modal("gameAnimalDuplicateSelectMessage");
//                return;
            }
        }

        if (!duplicateFound) {
            $(".game-message-player-name").html(app.game.players[app.game.animalSelectplayerIndex].name);

            if (app.game.players[app.game.animalSelectplayerIndex].selection.length >= 3) {
                $("#gameAnimalMaxMessage .modal-content .game-message-player-name")
                        .html(app.game.players[app.game.animalSelectplayerIndex].name);
                app.view.modal("gameAnimalMaxMessage");
            } else {
                app.game.players[app.game.animalSelectplayerIndex].selection.push(new Selection(animalID));
                $("#" + animalElementID + " .game-select-animal-icon").toggleClass("icon-selected");

                // max selection made
                if (app.game.players[app.game.animalSelectplayerIndex].selection.length === 3) {

                    // Update message content
                    $("#gameAnimalConfirmMessage .modal-content .game-message-player-name")
                            .html(app.game.players[app.game.animalSelectplayerIndex].name);
                    var selection1ImgSrc = $("#game-select-animal-icon-"
                            + app.game.players[app.game.animalSelectplayerIndex].selection[0].animalID).attr("src");
                    var selection2ImgSrc = $("#game-select-animal-icon-"
                            + app.game.players[app.game.animalSelectplayerIndex].selection[1].animalID).attr("src");
                    var selection3ImgSrc = $("#game-select-animal-icon-"
                            + app.game.players[app.game.animalSelectplayerIndex].selection[2].animalID).attr("src");

                    $("#game-message-animal-icon1").attr("src", selection1ImgSrc);
                    $("#game-message-animal-icon2").attr("src", selection2ImgSrc);
                    $("#game-message-animal-icon3").attr("src", selection3ImgSrc);

                    gamePlayerSelectionFinish = ((playerIndex+1) >= app.game.players.length);
                    // Show modal
                    app.view.modal("gameAnimalConfirmMessage");
                }
            }
        }
        buildSpotGrid();
    });
}

function confirmAnimalSelection() {
    app.view.hideModal();
    if (gamePlayerSelectionFinish) {
        location.href = "#game-animal-spot";
    } else {
        app.game.animalSelectplayerIndex = (app.game.animalSelectplayerIndex + 1);
        $(".game-select-animal-icon").removeClass("icon-selected");
        loanAnimalSelection();
    }
}

function buildWinnerGrid() {
    var winnerhtml = "";

    var winnerAnimal = null;
    var winnerAnimalScore = -1;

    var winnerIndex = -1;
    for (var x = 0; x < app.game.players.length; x++) {
        var gameScore = 0;
        var selectedCount = 0;
        for (var y = 0; y < app.game.players[x].selection.length; y++) {
            if (app.game.players[x].selection[y].selected) {
                selectedCount += 1;
                gameScore += parseInt(app.game.players[x].selection[y].animal.score);
            }
        }
        if (selectedCount >= 2) {
            winnerIndex = x;
        }
    }
    for (var x = 0; x < app.game.players.length; x++) {
        winnerhtml += "<div class=\"game-winner-player-row\">";

        winnerhtml += "<div class=\"game-winner-player-block player-" + x + "\">"
                    + "<span class=\"game-winner-player-icon player-" + x + "\">" + app.game.players[x].name + "</span>"
                + "</div>";
        if (app.game.players[x].selection) {
            var score = 0;
            var selectionCount = 0;
            for (var y = 0; y < app.game.players[x].selection.length; y++) {
                if (app.game.players[x].selection[y].selected) {
                    winnerhtml += "<div "
                                + "id=\"game-winner-animalID_" + x + "_" + y + "\" "
                                + "class=\"game-spot-animal-block\">"
                                    + "<img class=\"game-spot-animal-icon player-" + x + "\" src=\""
                                            + app.game.players[x].selection[y].animal.iconFilePath + "\"/>"

//                                    + "<div class=\"animal-text\">"
                                        + app.game.players[x].selection[y].animal.thumbName
//                                    + "</div>";

                                    + "<div class=\"ribbon-wrapper\"><div class=\"ribbon\">"
                                            + app.game.players[x].selection[y].animal.score
                                            + "</div></div>"
                                + "</div>";
                    score += parseInt(app.game.players[x].selection[y].animal.score);
                    if (parseInt(app.game.players[x].selection[y].animal.score) > winnerAnimalScore) {
                        winnerAnimalScore = parseInt(app.game.players[x].selection[y].animal.score);
                        winnerAnimal = app.game.players[x].selection[y].animal;
                    }
                } else {
                    selectionCount++;
                }
            }
            for (var z = 0; z < selectionCount - 1; z++) {
                winnerhtml += "<div class=\"game-spot-animal-block\"></div>";
            }

            winnerhtml += "<div "
                            + "id=\"game-winner-score_" + x + "\" "
                            + "class=\"game-winner-score-block\">";

            winnerhtml += "<div class=\"game-winner-player-score\">" + score + "</div>";
            if (winnerIndex === x) {
                winnerhtml += "<div class=\"game-winner-player-bonus\">" + bonusPoints + " bonus points</div>";
            }
            winnerhtml += "</div>";
        }
        winnerhtml += "</div>";
    }
    $(".game-winner-animal-icon").attr("src", winnerAnimal.iconFilePath);
    $(".game-winner-animal-info").html(winnerAnimal.randomFacts);
    $(".game-winning-result").html(winnerhtml);
}

function buildSpotGrid() {
    var spotHtml = "";
    for (var x = 0; x < app.game.players.length; x++) {
        spotHtml += "<div class=\"game-spot-player-block player-" + x + "\"><span class=\"game-spot-player-icon player-" + x + "\">"
                + app.game.players[x].name
                + "</span></div>";
        if (app.game.players[x].selection) {
            for (var y = 0; y < app.game.players[x].selection.length; y++) {
                if (app.game.players[x].selection[y] && app.game.players[x].selection[y].animal) {
                    spotHtml += "<div "
                                + "id=\"game-spot-animalID_" + x + "_" + y + "\" "
                                + "class=\"game-spot-animal-block player-" + x + "\">"
                                    + "<img id=\"game-spot-animal-"
                                            + app.game.players[x].selection[y].animalID + "\" "
                                            + "class=\"game-spot-animal-icon player-" + x + "\" src=\""
                                            + app.game.players[x].selection[y].animal.iconFilePath + "\"/>"
//                                    + "<div class=\"animal-text\">"
                                        + app.game.players[x].selection[y].animal.thumbName
//                                    + "</div>";
                                    + "<div class=\"ribbon-wrapper\">"
                                        + "<div class=\"ribbon\">"
                                            + app.game.players[x].selection[y].animal.score
                                        + "</div>"
                                    + "</div>"
                            + "</div>";
                }
                var lastSelection = (y === app.game.players[x].selection.length - 1);
                if (lastSelection) {
                    spotHtml += "<br/>";
                }
            }
        }
    }
    $("#game-spot-grid").html(spotHtml);

    $(".game-spot-animal-block").off('click');
    $(".game-spot-animal-block").on('click', function(event) {
        var animalElementID = event.currentTarget.id;
        var playerIndex = animalElementID.substring(19, 20);
        var selectionIndex = animalElementID.substring(21, 22);
        animalSpot(playerIndex, selectionIndex);
        $("#" + animalElementID + " .game-spot-animal-icon").toggleClass("icon-selected");
    });
}

function animalSpot(playerIndex, selectionIndex) {
    var player = app.game.players[playerIndex];
    var selection = player.selection[selectionIndex];

    selection.selected = !selection.selected;
    player.runningScore += (parseInt(player.selection[selectionIndex].animal.score) * (selection.selected ? 1 : -1));

    // check if this player has two animals selected
    var selectionCount = 0;
    for (var x = 0; x < player.selection.length; x++) {
        if (player.selection[x].selected) {
            selectionCount++;
        }
    }
    if (selectionCount >= 2) {
        player.runningScore += bonusPoints;
    }

    // update scoreboard
    var sbHtml = "";
    var winnerScore = -1;
    var winnerName = "???";

    var tempPlayer;
    var leaders = new Array();
    for (var x = 0; x < app.game.players.length; x++) {
        leaders[x] = app.game.players[x];
    }
    var ordered = false;
    while (!ordered) {
        ordered = true;
        for (var x = 0; x < leaders.length - 1; x++) {
            if (leaders[x].runningScore < leaders[x+1].runningScore) {
                tempPlayer = leaders[x];
                leaders[x] = leaders[x+1];
                leaders[x+1] = tempPlayer;
                ordered = false;
            }
        }
    }

    for (var x = 0; x < leaders.length; x++) {
        var p = leaders[x];
        sbHtml += "<div class=\"game-scoreboard-score player-" + p.index + "\">" + p.runningScore + "</div>";
        sbHtml += "<div class=\"game-scoreboard-player player-" + p.index + "\">" + p.name + "</div>";
        sbHtml += "<br/>";
        if (p.runningScore > winnerScore) {
            winnerScore = p.runningScore;
            winnerName = p.name;
        }
    }
    $(".game-scoreboard-result").html(sbHtml);
    $(".game-scoreboard-winner").html(winnerName + " WINS");

    // update winner screen
    buildWinnerGrid();


    if (selectionCount >= 2) {
        location.href = "#game-animal-winner";
    }
}

function resetPlayers() {
    app.game.players = [];
    app.game.players.push(new Player('PLAYER 1 NAME', 0));
    app.game.players.push(new Player('PLAYER 2 NAME', 1));
    app.game.players.push(new Player('PLAYER 3 NAME', 2));
    app.game.players.push(new Player('PLAYER 4 NAME', 3));
    app.game.players.push(new Player('PLAYER 5 NAME', 4));
    app.game.players.push(new Player('PLAYER 6 NAME', 5));

    var content = "";
    for (var x = 0; x < app.game.players.length; x++) {
        content += "<div class=\"game-player\" id=\"player-" + x + "\">" + app.game.players[x].name + "</div>";
    }
    $('.game-players').html(content);

    // editing the name of a player
    $('.game-player').on('click', function(event) {
        // save any othe names first
        saveNames();

        var elementID = event.currentTarget.id;
        var playerIndex = elementID.substring(7, elementID.length);
        $("#" + elementID).html("<input class=\"game-player-edit\" "
                + "id=\"player-edit-" + playerIndex + "\" "
                + "type=\"text\" "
                + "placeholder=\"" + app.game.players[playerIndex].name + "\" "
                + "value=\"\"/>");
        $("#player-edit-" + playerIndex).select();
    });
};

function SpotTheGame() {
    this.animalSelectplayerIndex = 0;
    this.players = [];
};

function Selection(animalID) {
    this.animalID = animalID;
    this.animal = null;
    this.selected = false;

    for (var x = 0; x < app.animals.length; x++) {
        if (app.animals[x].animalID == animalID) {
            this.animal = app.animals[x];
            break;
        }
    }
};

function Player(playerName, order) {
    this.name = playerName;
    this.runningScore= 0;
    this.index = order;
    this.selection = [];

    this.getSelectionHtml = function() {
        var html = "";
        for (var x = 0; x < this.selection.length; x++) {
            html += this.selection[x].animal.name;
            if (x < this.selection.length - 1) {
                html += "\n";
            }
        }
        return html;
    };
};
