var app = new Application();

$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);

    // Only to run when testing in Chrome Browser
    app.onDeviceReady();
});

function onDeviceReady() {
    app.onDeviceReady();
}

function Application() {
    // applicatiom view
    this.view = new View();

    // database connection
    this.getDB = function() {
        return app.view.model.data.getDB();
    };

    this.onDeviceReady = function() {
        $(window).bind("pageshow resize orientationchange", function(e) { // resize page if needed
            app.view.app_maxHeight();
            app.view.menu_alignOptions();
            app.view.profile_alignOptions();
        });

        // Initialise my stuff here
        initialiseListeners();

        // Splash screen then main menu
        window.setTimeout(
            function() {
                location.href = "#menu";
            },
            3000);
    };

    var initialiseListeners = function() {
        $("#profile .content").html(app.view.get_profile_tabs("profile"));
        $("#audio .content").html(app.view.get_profile_tabs("audio"));
        $("#map .content").html(app.view.get_profile_tabs("map"));
        $("#footprints .content").html(app.view.get_profile_tabs("footprints"));
        $("#question .content").html(app.view.get_profile_tabs("question"));
        $("#donate .content").html(app.view.get_profile_tabs("donate"));

        $("* .animal-profile").on("click", function(event) {
            location.href = "#profile";
        });
        $("* .animal-audio").on("click", function(event) {
            location.href = "#audio";
        });
        $("* .animal-map").on("click", function(event) {
            location.href = "#map";
        });
        $("* .animal-footprints").on("click", function(event) {
            location.href = "#footprints";
        });
        $("* .animal-question").on("click", function(event) {
            location.href = "#question";
        });
        $("* .animal-donate").on("click", function(event) {
            location.href = "#donate";
        });

        $("#option_animals").on("click", function(event) {
                app.view.animals_loadAnimals(function() {
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
