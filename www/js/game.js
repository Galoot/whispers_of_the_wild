playerColours = ['green', 'red', 'blue', 'orange'];

function Player(playerName) {
    this.name = playerName;
    this.runningScore= 0;

    this.selection = [];

};

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

function loanAnimalSelection() {
    // set player name & color
    var playerIndex = app.game.animalSelectplayerIndex;
    $("#player-selecting").html(app.game.players[playerIndex].name);

    // mark selected animals
//    $(".game-select-animal-block").each(function(index) {
//
//    });

    // configure next/finish button
    var finish = false;
    if ((playerIndex+1) >= app.game.players.length) {
        finish = true;
    }
    $("#player-selecting-next").html(finish ? "Finish" : "Next");

    $("#player-selecting-next").off('click');
    $("#player-selecting-next").on('click', function(event) {
        if (finish) {
            location.href = "#game-animal-spot";
        } else {
            if (confirm('Player '
                    + app.game.players[app.game.animalSelectplayerIndex].name + ', you have made the following selection\n'
                    + app.game.players[app.game.animalSelectplayerIndex].selection + "\nContinue?")) {

                app.game.animalSelectplayerIndex = (playerIndex + 1);
                loanAnimalSelection();
            } else {
                app.game.players[app.game.animalSelectplayerIndex].selection = [];
            }

        }
    });

    $(".game-select-animal-block").off('click');
    $(".game-select-animal-block").on('click', function(event) {
        // var animalElementID = $(this).attr('id');
        var animalElementID = event.currentTarget.id;

        var animalID = animalElementID.substring(21, animalElementID.length);

        if (app.game.players[app.game.animalSelectplayerIndex].selection.length >= 3) {
            alert('Max selection reached for player '
                    + app.game.players[app.game.animalSelectplayerIndex].name + '\nSelection:\n'
                    + app.game.players[app.game.animalSelectplayerIndex].selection);
        } else {
            if ($.inArray(animalID, app.game.players[app.game.animalSelectplayerIndex].selection) === -1) {
                app.game.players[app.game.animalSelectplayerIndex].selection.push(animalID);
                $("#" + animalElementID + " .game-select-animal-icon").toggleClass("icon-selected");
//                alert('selected animalID ' + animalID + ' for player '
//                        + app.game.players[app.game.animalSelectplayerIndex].name + '\nSelection:\n'
//                        + app.game.players[app.game.animalSelectplayerIndex].selection);
            } else {
                alert('Animal has already been selected. Choose another');
            }

            // max selection made
            if (app.game.players[app.game.animalSelectplayerIndex].selection.length === 3) {
                if (confirm('Player '
                        + app.game.players[app.game.animalSelectplayerIndex].name + ', you have made the following selection\n'
                        + app.game.players[app.game.animalSelectplayerIndex].selection + "\nContinue?")) {

                    app.game.animalSelectplayerIndex = (playerIndex + 1);
                    $(".game-select-animal-icon").removeClass("icon-selected");
                    loanAnimalSelection();
                } else {
                    app.game.players[app.game.animalSelectplayerIndex].selection = [];
                    $(".game-select-animal-icon").removeClass("icon-selected");
                }
            }
        }
        buildSpotGrid();
    });
}

function buildSpotGrid() {
    var spotHtml = "";
    for (var x = 0; x < app.game.players.length; x++) {
        spotHtml += "<div class=\"game-spot-player\">" + app.game.players[x].name + "</div>";
        if (app.game.players[x].selection) {
            for (var y = 0; y < app.game.players[x].selection.length; y++) {
                spotHtml += "<div class=\"game-spot-animal\">"
                        + "<img src"
                        + app.game.players[x].selection[y] + "</div>";
            }
        }
    }
    $("#game-spot-grid").html(spotHtml);
}

function SpotTheGame() {
    this.animalSelectplayerIndex = 0;

    this.players = [];
    this.players.push(new Player('PLAYER 1 NAME'));
    this.players.push(new Player('PLAYER 2 NAME'));
    this.players.push(new Player('PLAYER 3 NAME'));
    this.players.push(new Player('PLAYER 4 NAME'));

    $('.game-players').ready(function() {
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
    });
};

function Selection() {
    this.animal = null;
    this.score = 0;
    this.selected = false;
};