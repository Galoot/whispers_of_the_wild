function View() {
    this.model = new Model();

    this.animals_loadAnimals = function() {
        this.model.getAnimals(function(animals) {
            var animalsHtml = "";
            for (var x = 0; x < animals.length; x++) {
                if (x == 0) {
                    animalsHtml += "<li class=\"ui-first-child\">";
                } else if (x == (animals.length - 1)) {
                    animalsHtml += "<li class=\"ui-last-child\">";
                } else {
                    animalsHtml += "<li>";
                }
                animalsHtml += animals[x].name + "</li>";
            }
            $("#animalsList").html(animalsHtml);
        });
    };

    this.menu_alignOptions = function() {
        var option_size = 100;
        var option_padding = 15;
        var top_margin_start = 0;

        $(".options-row1").css("margin-top", (top_margin_start) + "px");
        $(".options-row2").css("margin-top", (top_margin_start + option_size + option_padding) + "px");
        $(".options-row3").css("margin-top", (top_margin_start + option_size + option_padding + option_size + option_padding) + "px");

        var left_margin_centre = -50;

        $(".option.far-left").css("margin-left", (left_margin_centre - option_size - option_padding) + "px");
        $(".option.left").css("margin-left", (left_margin_centre - (option_size/2) - (option_padding/2)) + "px");
        $(".option.centre").css("margin-left", (left_margin_centre + 0) + "px");
        $(".option.right").css("margin-left", (left_margin_centre + (option_size/2) + (option_padding/2)) + "px");
        $(".option.far-right").css("margin-left", (left_margin_centre + option_size + option_padding) + "px");
    };

    this.app_maxHeight = function() {
        var header = $(".header");
        var header_oh = header.height() > 0 ? header.outerHeight(true) : 0;

        var footer = $(".footer");
        var footer_oh = footer.height() > 0 ? footer.outerHeight(true) : 0;

        var content = $(".content");

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
};