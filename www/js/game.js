playerColours = ['green', 'red', 'blue', 'orange'];



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

var gamePlayerSelectionFinish = ((playerIndex+1) >= app.game.players.length);
function loanAnimalSelection() {
    // set player name & color
    var playerIndex = app.game.animalSelectplayerIndex;
    $("#player-selecting").html(app.game.players[playerIndex].name);
    // remove all player classes
    for (var pi = 0; pi < 4; pi++) {
        $("#player-selecting").removeClass("player-" + pi);
        $(".game-select-animal-icon").removeClass("player-" + pi);
    }
    // add the current player class
    $("#player-selecting").addClass("player-" + playerIndex);
    $(".game-select-animal-icon").addClass("player-" + playerIndex);

    // configure next/finish button
    var finish = ((playerIndex+1) >= app.game.players.length);
    $("#player-selecting-next").html(finish ? "Finish" : "Next");

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
    var winnerScore = -1;
    for (var x = 0; x < app.game.players.length; x++) {
        var gameScore = 0;
        for (var y = 0; y < app.game.players[x].selection.length; y++) {
            if (app.game.players[x].selection[y].selected) {
                gameScore += parseInt(app.game.players[x].selection[y].animal.score);
            }
        }
        if (gameScore > winnerScore) {
            winnerScore = gameScore;
            winnerIndex = x;
        }
    }

    for (var x = 0; x < app.game.players.length; x++) {
        if (x > 0) {
            winnerhtml += "<br/>";
        }
        winnerhtml += "<div class=\"game-winner-player-block\"><span class=\"game-winner-player-icon\">" + app.game.players[x].name + "</span></div>";
        if (app.game.players[x].selection) {
            var score = 0;
            var selectionCount = 0;
            for (var y = 0; y < app.game.players[x].selection.length; y++) {
                if (app.game.players[x].selection[y].selected) {
                    selectionCount++;
                    winnerhtml += "<div "
                                + "id=\"game-winner-animalID_" + x + "_" + y + "\" "
                                + "class=\"game-spot-animal-block\">"
                                    + "<img class=\"game-spot-animal-icon\" src=\""
                                            + app.game.players[x].selection[y].animal.iconFilePath + "\"/>"
                            + "</div>";
                    score += parseInt(app.game.players[x].selection[y].animal.score);
                    if (parseInt(app.game.players[x].selection[y].animal.score) > winnerAnimalScore) {
                        winnerAnimalScore = parseInt(app.game.players[x].selection[y].animal.score);
                        winnerAnimal = app.game.players[x].selection[y].animal;
                    }
                }
            }
            // spacer
            if (selectionCount < 2) {
                winnerhtml += "<div class=\"game-spot-animal-block\"></div>";
            }

            winnerhtml += "<div "
                            + "id=\"game-winner-score_" + x + "\" "
                            + "class=\"game-winner-score-block\">";

            winnerhtml += "<div class=\"game-winner-player-score\">" + score + "</div>";
            if (winnerIndex === x) {
                winnerhtml += "<div class=\"game-winner-player-bonus\">40 bonus points</div>";
            }
            winnerhtml += "</div>";
        }
    }
    $(".game-winner-animal-icon").attr("src", winnerAnimal.iconFilePath);
    $(".game-winner-animal-info").html(winnerAnimal.idPointers);
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
                spotHtml += "<div "
                            + "id=\"game-spot-animalID_" + x + "_" + y + "\" "
                            + "class=\"game-spot-animal-block player-" + x + "\">"
                                + "<img id=\"game-spot-animal-" + app.game.players[x].selection[y].animal.animalID + "\" class=\"game-spot-animal-icon\" src=\""
                                        + app.game.players[x].selection[y].animal.iconFilePath + "\"/>"
                        + "</div>";
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

    // update scoreboard
    var sbHtml = "";
    var winnerScore = -1;
    var winnerName = "???";
    for (var x = 0; x < app.game.players.length; x++) {
        var p = app.game.players[x];
        sbHtml += "<div class=\"game-scoreboard-player\">" + p.name + "</div>";
        sbHtml += "<div class=\"game-scoreboard-score\">" + p.runningScore + "</div>";
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

    // check if this player has two animals selected
    var selectionCount = 0;
    for (var x = 0; x < player.selection.length; x++) {
        if (player.selection[x].selected) {
            selectionCount++;
        }
    }
    if (selectionCount >= 2) {
        location.href = "#game-animal-winner";
    }
}

function resetPlayers() {
    app.game.players = [];
    app.game.players.push(new Player('PLAYER 1 NAME'));
    app.game.players.push(new Player('PLAYER 2 NAME'));
    app.game.players.push(new Player('PLAYER 3 NAME'));
    app.game.players.push(new Player('PLAYER 4 NAME'));

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

function Player(playerName) {
    this.name = playerName;
    this.runningScore= 0;

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