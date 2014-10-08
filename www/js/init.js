var app = new Application();

$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);

    // Only to run when testing in Chrome Browser
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

//    var media;
//    this.getPlayer = function() {
//        return media;
//    };

    // database connection
    this.getDB = function() {
        return app.view.model.data.getDB();
    };

    this.onDeviceReady = function() {
        // alert('Path: ' + getAppPath());
        $(window).bind("pageshow resize orientationchange", function(e) { // resize page if needed
            // These things get executed whenever teh page resizes
            app.view.app_maxHeight();
            app.view.menu_alignOptions();
            app.view.profile_alignOptions();
        });

        // Initialise my stuff here
        initialiseListeners();
//        initAudio();
//        this.getPlayer().play();
    };

//    var initAudio = function() {
//        media = new Media("resources/audio/intro.mp3",
//                onSuccess = function() {
//                    console.log("Media success...");
//                    this.getPlayer().play();
//                },
//                onError = function() {
//                    console.log("Media error...");
//                },
//                onStatus = function() {
//                    console.log("Media status change...");
//                });
//        media.play();
//    };

    var initialiseListeners = function() {

        // ==== Header =========================================================
        $("div .action-home").on("click", function(event) {
            location.href = "#menu";
        });
        $(".forward").on("click", function(event) {
            event.preventDefault();
            history.go(1)
        });
        $(".back").on("click", function(event) {
            event.preventDefault();
            history.go(-1)
        });

        // =====================================================================

        $("#enter").on("click", function(event) {
            // playAudio("resources/audio/intro.mp3");

            location.href = "#menu";
        });

        function mediaError(e) {
            alert('Media Error');
            alert(JSON.stringify(e));
        }

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


        $("#profile .content").html(app.view.get_profile_tabs("profile"));
        $("#audio .content").html(app.view.get_profile_tabs("audio"));
        $("#map .content").html(app.view.get_profile_tabs("map"));
        $("#footprints .content").html(app.view.get_profile_tabs("footprints"));
        $("#question .content").html(app.view.get_profile_tabs("question"));
        $("#donate .content").html(app.view.get_profile_tabs("donate"));

        $("#option_animals").on("click", function(event) {
                    app.view.animal_loadAnimals(function() {
                        location.href = "#animals";
                        // $("#animals .header .title").html("Animals");
                        // $("#menu .content").html($("#animals .content").html());
                    });


                });
//        $("#clear").on(
//                "click",
//                function(e) {
//                    controller.output(null, true);
//                }
//        );
    };
}
