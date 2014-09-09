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
        app.view.animals_loadAnimals();
//        $("#clear").on(
//                "click",
//                function(e) {
//                    controller.output(null, true);
//                }
//        );
    };
}
