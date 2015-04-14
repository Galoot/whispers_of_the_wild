// http://www.inserthtml.com/2013/05/mobile-menu/

var initSlider = function (panelClass, actionClass) {

    var startX, curX, startY, curY; // Variables
    var newXScroll, newYScroll, genXScroll; // More Variables!

    // Change the height of the sidebar, as well as a few things to do with the main content area, so the user
    // can actually scroll in the content area.
    function sideBarHeight() {

        var docHeight = $(document).height();
        var winHeight = $(window).height();

//        $(panelClass).height(winHeight);
//        $('.profile-content').height(winHeight);
        // $('#sub-container').height($('#sub-container').height());
    }

    sideBarHeight();
    var outIn = 'in';

    /*
    Hammer(document.getElementsByClassName('profile-content')).on('swiperight', function (e) {
        $(panelClass).toggleClass(actionClass);
        $('.profile-content').toggleClass(actionClass);
        outIn = 'out';

    });

    Hammer(document.getElementsByClassName('profile-content')).on('swipeleft', function (e) {
        $(panelClass).toggleClass(actionClass);
        $('.profile-content').toggleClass(actionClass);
        outIn = 'in';
    });
    */

    function runAnimation() {

        if (outIn == 'out') {

            $(panelClass).toggleClass(actionClass);
            $('.profile-content').toggleClass(actionClass);
            outIn = 'in';

        } else if (outIn == 'in') {

            $(panelClass).toggleClass(actionClass);
            $('.profile-content').toggleClass(actionClass);
            outIn = 'out';

        }
    }

    function slide() {

        $(panelClass).toggleClass(actionClass);
        $('.profile-content').toggleClass(actionClass);
        $('.panel-slider-' + actionClass + '-handle').toggleClass(actionClass);

        var contentHeight = $("* .content .profile-content").height();
        var footerHeight = $(".footer").height();

        if (actionClass == 'left') {
            app.view.navigationCollapsed = !app.view.navigationCollapsed;
            if (app.view.navigationCollapsed) {
                $(".panel-slider-left-handle").css("background-image", "url('resources/buttons/navigation/left-handle-o.png')");
            } else {
                $(".panel-slider-left-handle").css("background-image", "url('resources/buttons/navigation/left-handle-c.png')");
            }

            window.setTimeout(function() {
                app.view.destroySliders();
                app.view.reloadImageSliders();
            }, 220);

        } else if (actionClass == 'bottom') {
            app.view.footerCollapsed = !app.view.footerCollapsed;

            if (app.view.footerCollapsed) {
                $(".panel-slider-bottom-handle").css("background-image", "url('resources/buttons/media_player/bottom-handle-o.png')");
                $("* .content .profile-content").css("height", (contentHeight + footerHeight) + "px");

                window.setTimeout(function() {
                    var current_height = $(".animal-grid").outerHeight(false);
                    $(".animal-grid").css("height", current_height + footerHeight);

                    current_height = $(".game-animal-grid").outerHeight(false);
                    $(".game-animal-grid").css("height", current_height + footerHeight);

                    current_height = $(".game-spot-grid").outerHeight(false);
                    $(".game-spot-grid").css("height", current_height + footerHeight);

                    current_height = $(".game-winner-scroller").outerHeight(false);
                    $("#game-animal-winner .content .game-winner-scroller").css("height", current_height + footerHeight);

                    current_height = $(".scrollable").outerHeight(false);
                    $(".scrollable").css("height", current_height + footerHeight);

                    $("#search-by-size").css("bottom", (0 + 20) + "px");
                }, 350);

            } else {
                $(".panel-slider-bottom-handle").css("background-image", "url('resources/buttons/media_player/bottom-handle-c.png')");
                // since the slider goes upwards, the content needs to first wait for the slider to complete before decreasing the content height.
                window.setTimeout(function() {
                        $("* .content .profile-content").css("height",
                                (contentHeight - footerHeight) + "px");

                        var current_height = $(".animal-grid").outerHeight(false);
                        $(".animal-grid").css("height", current_height - footerHeight);

                        current_height = $(".game-animal-grid").outerHeight(false);
                        $(".game-animal-grid").css("height", current_height - footerHeight);

                        current_height = $(".game-spot-grid").outerHeight(false);
                        $(".game-spot-grid").css("height", current_height - footerHeight);

                        current_height = $(".game-winner-scroller").outerHeight(false);
                        $(".game-winner-scroller").css("height", current_height - footerHeight);

                        current_height = $(".scrollable").outerHeight(false);
                        $(".scrollable").css("height", current_height - footerHeight);

                        $("#search-by-size").css("bottom", (footerHeight + 20) + "px");

                    }, 350);
            }
        }
    }

    $(".panel-slider-" + actionClass + "-handle")[0].addEventListener('touchend', function (e) {
        slide();
    });

    $(".panel-slider-" + actionClass + "-handle").click(function () {
        slide();
    });
};