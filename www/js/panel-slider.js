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

    $('.options')[0].addEventListener('touchend', function (e) {
        $(panelClass).toggleClass(actionClass);
        $('.profile-content').toggleClass(actionClass);
    });

    $('.options').click(function () {
        console.log("click...");
        $(panelClass).toggleClass(actionClass);
        $('.profile-content').toggleClass(actionClass);
    });
};