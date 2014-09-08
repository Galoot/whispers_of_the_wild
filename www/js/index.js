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
            alignOptions();
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
//        $("#clear").on(
//                "click",
//                function(e) {
//                    controller.output(null, true);
//                }
//        );
    };

    var alignOptions = function() {
        var option_size = 100;
        var option_padding = 15;
        var top_margin_start = 50;
        $(".options-row1").css("margin-top", (top_margin_start) + "px");
        $(".options-row2").css("margin-top", (top_margin_start + option_size + option_padding) + "px");
        $(".options-row3").css("margin-top", (top_margin_start + option_size + option_padding + option_size + option_padding) + "px");

        var left_margin_centre = -50;

        $("[data-role='option'].far-left").css("margin-left", (left_margin_centre - option_size - option_padding) + "px");
        $("[data-role='option'].left").css("margin-left", (left_margin_centre - (option_size/2) - (option_padding/2)) + "px");
        $("[data-role='option'].centre").css("margin-left", (left_margin_centre + 0) + "px");
        $("[data-role='option'].right").css("margin-left", (left_margin_centre + (option_size/2) + (option_padding/2)) + "px");
        $("[data-role='option'].far-right").css("margin-left", (left_margin_centre + option_size + option_padding) + "px");
    };

    var maxHeight = function() {
        var header = $("[data-role='header']");
        var header_oh = header.height() > 0 ? header.outerHeight(true) : 0;

        var footer = $("[data-role='footer']");
        var footer_oh = footer.height() > 0 ? footer.outerHeight(true) : 0;

        var content = $("[data-role='content']");

        var window_h = $(window).height();

        var content_h = content.height();
        var content_oh = content_h > 0 ? content.outerHeight(true) : 0;

        var c_new = window_h - header_oh - footer_oh - content_oh + content_h;
        content.height(c_new);

//        var total = header_oh + footer_oh + content_oh;
//        if (content_h < content.get(0).scrollHeight) {
//            content.height(content.get(0).scrollHeight);
//        } else {
//            content.height(c_new);
//        }
    };
}
