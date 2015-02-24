app = new Application();
app.mode = app.MODE_FREE;

$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);

    //Only to run when testing in Chrome Browser
    if (!isMobile.Android() && !isMobile.iOS()) {
        app.onDeviceReady();
    }
});

function onDeviceReady() {
    app.onDeviceReady();
}

function getAppPath() {
    var path = window.location.pathname;
    var appPath = path.substring(0, path.lastIndexOf('/') + 1);
    return appPath;
}
;

function Application() {
    this.MODE_FREE = 0;
    this.MODE_FREE_UNLOCKED = 1;
    this.MODE_PAID = 2;
    this.MODE_CORPORATE = 3;

    this.mode = this.MODE_FREE;

    // game
    this.game = new SpotTheGame();
    $('.game-players').ready(function () {
        resetPlayers();
    });

    // applicatiom view
    this.view = new View();

//    this.view.unlockFreeApp(function() {
//        console.log('App unlocked...');

        this.view.getProperty('mode', function(results) {
            var dbMode = app.mode;

            if (results && results[0] && results[0].value) {
                dbMode = results[0].value;
            } else {
                dbMode = -1;
            }

            if (dbMode !== -1) {
                // retrive last mode set in database
                app.mode = parseInt(dbMode);
            }

//            console.log('Mode in database: ' + dbMode);

            if (app.MODE_FREE == dbMode) {
//                console.log('Mode: FREE');
            } else if (app.MODE_FREE_UNLOCKED == dbMode) {
//                console.log('Mode: FREE UNLOCKED');
            } else if (app.MODE_PAID == dbMode) {
//                console.log('Mode: PAID');
            } else if (app.MODE_CORPORATE == dbMode) {
//                console.log('Mode: CORPORATE');
            } else if (dbMode === -1) {
//                console.log('Create default property inserts');
                app.view.setDefaultProperties();
            }

//            console.log('Mode in Memory: ' + app.mode);
        });
//    });



    // database connection
    this.getDB = function () {
        return app.view.model.data.getDB();
    };

    this.onDeviceReady = function () {
        $.mobile.defaultPageTransition = 'none';
        $.mobile.defaultDialogTransition = 'none';
        $.mobile.useFastClick = true;

        // alert('Path: ' + getAppPath());
        $(window).bind("pageshow resize orientationchange", function (e) { // resize page if needed
            // These things get executed whenever teh page resizes
            app.view.app_maxHeight();
            app.view.menu_alignOptions();
            app.view.profile_alignOptions();
            app.view.about_alignOptions();
            app.view.animals_alignGrid();

            // game related ----------------------------------------------------
            app.view.animal_animalGrid('game-select-', function (animalGridHtml) {
                $("#game-animal-grid").html(animalGridHtml);
                loanAnimalSelection();
            });
            // -----------------------------------------------------------------
        });

        // Initialise my stuff here
        initialiseListeners();
    };

    var initialiseListeners = function () {
        // ==== Splash =========================================================
        $("#enter").off();
        $("#enter").on("click", function (event) {
            // playAudio("resources/audio/intro.mp3");
            location.href = "#menu";
        });

        $("#toggleIntro").off();
        $("#toggleIntro").on("click", function (event) {
            $("#toggleIntro").toggle();
            app.view.playIntroTrack();
        });

        /*
        var video = $("#introVid").get(0);
        $("#toggleIntro").off();
        $("#toggleIntro").on("click", function (event) {
            $("#intro").toggle();
            if ($("#intro").css("display") != "none") {
                video.currentTime = 0;
                video.load();
                video.play();
            } else {
                video.pause();
            }
        });
        video.onended = function (e) {
            $("#intro").toggle();
        };
        */

        // ==== Social Share ===================================================
        $(".share-facebook").off();
        $(".share-facebook").on("click", function(event) {
            shareFacebook();
        });
        $(".share-twitter").off();
        $(".share-twitter").on("click", function(event) {
            shareTwiter();
        });

        // ==== Question Submit ================================================
        $("#question-submit").off();
        $("#question-submit").on("click", function (event) {
            if (window.plugins && window.plugins.socialsharing) {
                window.plugins.socialsharing.shareViaTwitter(
                        '@Whispers_Wild\n'
                        + 'Name & Surname: ' + $("#question-name").val() + '\n'
                        + 'Question: ' + $("#question-desc").val() + '\n'
                        + 'Tags: ' + $("#question-hashtags").val(),
                        'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/10714113_734077916675567_3272036327475912665_o.png',
                        null, //'https://www.facebook.com/whispersofthewild',
                        function () {
//                            console.log('share ok')
                            $("#question-name").val('');
                            $("#question-desc").val('');
                            $("#question-hashtags").val('');
                        },
                        function (errormsg) {
                            console.log('Error sharing via twitter: ' + errormsg);
                        }
                );
            } else {
                console.log("Could not find scoialsharing plugin");
            }
            // share(SOCIAL_SHARE_TWITTER, "Wispers of the Wild", "Checkout this awesome new app!", "http://www.galoot.co.za");
        });

        // ==== Header =========================================================
        $("div .action-home").off();
        $("div .action-home").on("click", function (event) {
            location.href = "#menu";
        });
        $(".forward").off();
        $(".forward").on("click", function (event) {
            event.preventDefault();
            history.go(1);
        });
        $(".back").off();
        $(".back").on("click", function (event) {
            event.preventDefault();
            history.go(-1);
        });

        // ==== Footer =========================================================
        $(".audio-play-pause").off();
        $(".audio-play-pause").on("click", function (event) {
            // check audio state
            if (audio_state_play) {
                pauseAudio();
            } else {
                resumeAudio();
            }

            if (audio_state_play) {
                $(".audio-play-pause").css("background-image", "url('resources/buttons/media_player/pause.png')");
            } else {
                $(".audio-play-pause").css("background-image", "url('resources/buttons/media_player/play.png')");
            }
        });

        $(".audio-prev").off();
        $(".audio-prev").on("click", function (event) {
            app.view.playPrevAudioTrack();
        });

        $(".audio-next").off();
        $(".audio-next").on("click", function (event) {
            app.view.playNextAudioTrack();
        });

        // $(".footer-progress").html("<input class=\"audio-progress\"/>");

        // ==== Animals ========================================================
        $(".category-label").off();
        $(".category-label").on("click", function (event) {
            $("#search-by-category").toggle();
            $("#search-by-letter").hide();
        });

        $(".letter-label").off();
        $(".letter-label").on("click", function (event) {
            $("#search-by-letter").toggle();
            $("#search-by-category").hide();
        });

        $("#howto-size").off();
        $("#howto-size").on("click", function(event) {
            app.view.modal("scaleSliderHowTo");
        });

        // Range Slider & Play Button
        $('#animalSizeSlider').nstSlider({
            "crossable_handles": false,
            "left_grip_selector": ".leftGrip",
            "right_grip_selector": ".rightGrip",
            "value_bar_selector": ".bar",
            "value_changed_callback": function (cause, leftValue, rightValue) {
                $(this).parent().find('.leftLabel').text(leftValue);
                $(this).parent().find('.rightLabel').text(rightValue);
                app.view.filterWeights(leftValue, rightValue);
            }
        });

        // Progress bar for audio track
        $('.audioProgress').each(function() {
            $(this).nstSlider({
                "left_grip_selector": ".leftGrip",
                "value_bar_selector": ".bar",
                "value_changed_callback": function (cause, leftValue, rightValue) {
                }
            });
        });

        // ==== Profile ========================================================
        $("#profile .content .cautionLink").off();
        $("#profile .content .cautionLink").on("click", function() {

            $("#cautionNotice .modal-content").html(
                    $("#profile .content .cautionNotice").html());
            app.view.modal("cautionNotice");

        });
        $("#map .content .cautionLink").off();
        $("#map .content .cautionLink").on("click", function() {

            $("#cautionNotice .modal-content").html(
                    $("#map .content .cautionNotice").html());
            app.view.modal("cautionNotice");

        });
        $("#footprints .content .cautionLink").off();
        $("#footprints .content .cautionLink").on("click", function() {

            $("#cautionNotice .modal-content").html(
                    $("#footprints .content .cautionNotice").html());
            app.view.modal("cautionNotice");

        });

        // Profile tabs
        $("#profile .content .profile-tabs").html(app.view.get_profile_tabs("profile"));
        $("#audio .content .profile-tabs").html(app.view.get_profile_tabs("audio"));
        $("#map .content .profile-tabs").html(app.view.get_profile_tabs("map"));
        $("#footprints .content .profile-tabs").html(app.view.get_profile_tabs("footprints"));
        $("#question .content .profile-tabs").html(app.view.get_profile_tabs("question"));
        $("#donate .content .profile-tabs").html(app.view.get_profile_tabs("donate"));

        // About tabs
        $("#founder .content .profile-tabs").html(app.view.get_about_tabs("founder"));
        $("#partners .content .profile-tabs").html(app.view.get_about_tabs("partners"));
        $("#board .content .profile-tabs").html(app.view.get_about_tabs("board"));
        $("#sounds .content .profile-tabs").html(app.view.get_about_tabs("sounds"));
        $("#photographers .content .profile-tabs").html(app.view.get_about_tabs("photographers"));
        $("#sources .content .profile-tabs").html(app.view.get_about_tabs("sources"));

        $(".menu_animals").off();
        $(".menu_animals").on("click", function (event) {
            app.view.animal_loadAnimals(function () {
                $(".profile-tabs").show();
                location.href = "#animals";
            });
        });

        $(".menu_donate").off();
        $(".menu_donate").on("click", function (event) {
            app.view.animal_loadAnimals(function () {
                $(".profile-tabs").hide();
                location.href = "#donate";
            });
        });

        $(".menu_question").off();
        $(".menu_question").on("click", function (event) {
            $(".profile-tabs").hide();
            location.href = "#question";
        });

        $(".option_game").off();
        $(".option_game").on("click", function (event) {
            location.href = "#game";
        });

        $(".game-start-label").off();
        $(".game-start-label").on("click", function (event) {
            resetPlayers();
            location.href = "#players";
        });

        $(".menu_about").off();
        $(".menu_about").on("click", function (event) {
            app.view.initializeAboutLinks();
            $(".profile-tabs").show();
            location.href = "#founder";
        });

        // ==== Game ========================================================
        $(".game-players-next").off();
        $(".game-players-next").on("click", function (event) {
            app.view.animal_animalGrid('game-select-', function (animalGridHtml) {
                $("#game-animal-grid").html(animalGridHtml);
                // save any name that was in edit mode
                saveNames();

                // clear any previous selections
                $.each(app.game.players, function (index, player) {
                    player.selection = [];
                });
                validatePlayerNames();

                // reset player for animal selection
                app.game.animalSelectplayerIndex = 0;
                location.href = "#game-animal-select";
            });
        });

        $(".game-link-spot").off();
        $(".game-link-spot").on("click", function (event) {
            location.href = "#game-animal-spot";
        });

        $(".game-link-next").off();
        $(".game-link-next").on("click", function (event) {
            // same player, keep scores, select different animals
            location.href = "#game-animal-select";
            app.game.animalSelectplayerIndex = 0;
            for (var x = 0; x < app.game.players.length; x++) {
                app.game.players[x].selection = [];
            }
        });

        $(".game-link-scoreboard").off();
        $(".game-link-scoreboard").on("click", function (event) {
            location.href = "#game-animal-scoreboard";
        });

        $(".game-link-finish").off();
        $(".game-link-finish").on("click", function (event) {
            resetPlayers();
            location.href = "#game";
        });

        initSlider('.profile-tabs', 'left');
        initSlider('.footer', 'bottom');

        $('img').retina();
        // =====================================================================
    };
}
