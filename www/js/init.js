var app = new Application();

$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);

   //Only to run when testing in Chrome Browser
    app.onDeviceReady();
});

function onDeviceReady() {
    app.onDeviceReady();
}

function getAppPath() {
        var path = window.location.pathname;
        var appPath = path.substring(0, path.lastIndexOf('/') + 1);
        return appPath;
    };

function Application() {
    // applicatiom view
    this.view = new View();

    // database connection
    this.getDB = function() {
        return app.view.model.data.getDB();
    };

    this.onDeviceReady = function() {
        $.mobile.defaultPageTransition = 'none';
        $.mobile.defaultDialogTransition = 'none';
        $.mobile.useFastClick = true;

        // alert('Path: ' + getAppPath());
        $(window).bind("pageshow resize orientationchange", function(e) { // resize page if needed
            // These things get executed whenever teh page resizes
            app.view.app_maxHeight();
            app.view.menu_alignOptions();
            app.view.profile_alignOptions();
            app.view.about_alignOptions();
            app.view.animals_alignGrid();
        });

        // Initialise my stuff here
        initialiseListeners();
    };

    var initialiseListeners = function() {
        // ==== Splash =========================================================
        $("#enter").on("click", function(event) {
            // playAudio("resources/audio/intro.mp3");
            location.href = "#menu";
        });

        var video = $("#introVid").get(0);
        $("#toggleIntro").on("click", function(event) {
            $("#intro").toggle();
            if ($("#intro").css("display") != "none") {
                video.currentTime = 0;
                video.load();
                video.play();
            } else {
                video.pause();
            }
        });
        video.onended = function(e) {
            $("#intro").toggle();
        };

        // ==== Header =========================================================
        $("div .action-home").on("click", function(event) {
            location.href = "#menu";
        });
        $(".forward").on("click", function(event) {
            event.preventDefault();
            history.go(1);
        });
        $(".back").on("click", function(event) {
            event.preventDefault();
            history.go(-1);
        });

        // ==== Footer =========================================================
        $(".audio-play-pause").on("click", function(event) {
            // check audio state
            if (audio_state_play) {
                pauseAudio();
            } else {
                resumeAudio();
            }

            if (audio_state_play) {
                $(".audio-play-pause").html("Pause");
            } else {
                $(".audio-play-pause").html("Resume");
            }
        });

        // $(".footer-progress").html("<input class=\"audio-progress\"/>");

        // ==== Animals ========================================================
        $(".category-label").on("click", function(event) {
            $("#search-by-category").toggle();
        });

        $(".letter-label").on("click", function(event) {
            $("#search-by-letter").toggle();
        });

        $("#howto-size").on("click", function(event) {
            alert("How does the scale slider work?\nSlides the circles across to eliminate teh animals that are shorter and taller (at shoulder height) than the animal you are looking for.");
        });

        // ==== Profile ========================================================
        $("#profile .content .cautionLink").on("click", function() {
            var popupContent = "Safety Notice\n"
                    + $("#profile .content .cautionNotice").html();
            alert(popupContent);
        });
        $("#map .content .cautionLink").on("click", function() {
            var popupContent = "Safety Notice\n"
                    + $("#map .content .cautionNotice").html();
            alert(popupContent);
        });
        $("#footprints .content .cautionLink").on("click", function() {
            var popupContent = "Safety Notice\n"
                    + $("#footprints .content .cautionNotice").html();
            alert(popupContent);
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
        
        $(".option_animals").on("click", function(event) {
            app.view.animal_loadAnimals(function() {
                $(".profile-tabs").show();
                location.href = "#animals";
            });
        });

        $(".option_donate").on("click", function(event) {
            app.view.animal_loadAnimals(function() {
                $(".profile-tabs").hide();
                location.href = "#donate";
            });
        });

        $(".option_question").on("click", function(event) {
            $(".profile-tabs").hide();
            location.href = "#question";
        });

        $(".option_about").on("click", function(event) {
            app.view.initializeAboutLinks();
            $(".profile-tabs").show();
            location.href = "#founder";
        });
        // =====================================================================
    };
}
