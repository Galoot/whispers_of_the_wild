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

        if (actionClass == 'bottom') {
            app.view.footerCollapsed = !app.view.footerCollapsed;

            if (app.view.footerCollapsed) {
                $("* .content .profile-content").css("height", (contentHeight + footerHeight) + "px");
            } else {
                // since the slider goes upwards, the content needs to first wait for the slider to complete before decreasing the content height.
                window.setTimeout(function() {
                        $("* .content .profile-content").css("height", (contentHeight - footerHeight) + "px");
                    }, 500);
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