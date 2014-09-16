function View() {
    model = new Model();

    animals_loadProfile = function(animalID, onComplete) {
        model.getAnimal(animalID, function(animal) {
            var profileHtml = "Name: " + animal.name;

            $("#profile .section-content").html(profileHtml);
            $("#profile .header .title").html(animal.name);

            if (onComplete) {
                onComplete();
            }
        });
    };

    this.animals_loadAnimals = function(onComplete) {
        model.getAnimals(function(animals) {
            var animalsHtml = "";
            for (var x = 0; x < animals.length; x++) {
                if (x == 0) {
                    animalsHtml += "<li class=\"ui-first-child\">";
                } else if (x == (animals.length - 1)) {
                    animalsHtml += "<li class=\"ui-last-child\">";
                } else {
                    animalsHtml += "<li>";
                }

                animalsHtml += "<a id=\"animal_" + animals[x].animalID + "\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">"
                        + animals[x].name
                        + "</a>";

                animalsHtml += "</li>";

            }

            $("#animalsList").html(animalsHtml);

            $('*[id^="animal_"]').on(
                    "click",
                    function(event) {
                        var elementID = event.target.id;
                        var animalID = elementID.substring(7);

                        animals_loadProfile(animalID, function() {
                            location.href = "#profile";
                        });

                    }
            );
            if (onComplete) {
                onComplete();
            }
        });
    };

    this.get_profile_tabs = function(page) {
        var html = "";
        html += "<div class=\"profile-option animal-profile" + (page == "profile" ? " profile-tab-selected" : "") + "\">Profile</div>";
        html += "<div class=\"profile-option animal-audio" + (page == "audio" ? " profile-tab-selected" : "") + "\">Audio</div>";
        html += "<div class=\"profile-option animal-map" + (page == "map" ? " profile-tab-selected" : "") + "\">Map</div>";
        html += "<div class=\"profile-option animal-footprints" + (page == "footprints" ? " profile-tab-selected" : "") + "\">Footprints</div>";
        html += "<div class=\"profile-option animal-question" + (page == "question" ? " profile-tab-selected" : "") + "\">Ask a Question</div>";
        html += "<div class=\"profile-option animal-donate" + (page == "donate" ? " profile-tab-selected" : "") + "\">Donate to a Conservation</div>";

        html += "<div class=\"profile-content\">" + page + "</div>";

        return html;
    };

    this.profile_alignOptions = function() {
        var option_width = 150; // width and height of the option boxes (squares)
        var option_height = 50; // width and height of the option boxes (squares)
        var option_padding = 1; // space between option boxes
        var top_margin_start = -1; // from the top of the content div

        var option_count = 0;
        $(".profile-option")
                .css("margin-left", (-1) + "px")
                .css("width", (option_width) + "px")
                .css("height", (option_height) + "px");

        $("* .content .animal-profile")
                .css("margin-top", (top_margin_start + (option_height*option_count++)) + "px");
        $("* .content .animal-audio")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $("* .content .animal-map")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $("* .content .animal-footprints")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $("* .content .animal-question")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $("* .content .animal-donate")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");

        var left_margin_centre = 0; // from the centre of the content div

        $("* .content .profile-content").css("margin-top", (-1) + "px");
        $("* .content .profile-content").css("margin-left", (option_width + left_margin_centre) + "px");
        // $("* .content .profile-content").css("margin-right", (option_padding) + "px");
    };

    this.menu_alignOptions = function() {
        var option_size = 100; // width and height of the option boxes (squares)
        var option_padding = 25; // space between option boxes
        var top_margin_start = 50; // from the top of the content div

        $(".options-row1").css("margin-top", (top_margin_start) + "px");
        $(".options-row2").css("margin-top", (top_margin_start + option_size + option_padding) + "px");
        $(".options-row3").css("margin-top", (top_margin_start + option_size + option_padding + option_size + option_padding) + "px");

        var left_margin_centre = -50; // from the centre of the content div

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

        $("* .content .profile-content").css("height", (c_new) + "px");

    //        var total = header_oh + footer_oh + content_oh;
    //        if (content_h < content.get(0).scrollHeight) {
    //            content.height(content.get(0).scrollHeight);
    //        } else {
    //            content.height(c_new);
    //        }
    };
};