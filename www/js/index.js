var controller = new Controller();

$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);

    // Only to run when testing in Chrome Browser
    controller.onDeviceReady();
});

function onDeviceReady() {
    controller.onDeviceReady();
}

function Controller() {

    this.onDeviceReady = function() {
        $(window).bind("pageshow resize orientationchange", function(e) { // resize page if needed
            maxHeight();
        });

        // Initialise my stuff here
        initialiseListeners();
    };

    var initialiseListeners = function() {
        // alert("Bla!");
//        $("#clear").on(
//                "click",
//                function(e) {
//                    controller.output(null, true);
//                }
//        );
    };

    var maxHeight = function() {
        var h = $("#header").outerHeight(true);
        var f = $("#footer").outerHeight(true);

        var c = $("#content");

        var w = $(window).height();

        var c_h = c.height();
        var c_oh = c.outerHeight(true);
        var c_new = w - h - f - c_oh + c_h;
        var total = h + f + c_oh;
        if (c_h < c.get(0).scrollHeight) {
            c.height(c.get(0).scrollHeight);
        } else {
            c.height(c_new);
        }
    };
}
