function View() {
    model = new Model();
    model.load_data();
    this.animal = new Animal();

    this.animal_loadProfile = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            var profileHtml = "Name: " + animal.name;
            if (animal.cautionNotice) {
                profileHtml += "<br/><span class=\"cautionLink\"><b>Potentially Dangerous Animal</b>"
                        + "<br/>Click here to view safety advice</span>";
                profileHtml += "<div class=\"cautionNotice\">" + animal.cautionNotice + "</div>";
            }

            profileHtml += "<br/><br/><b>IDENTIFICATION POINTERS</b>"
                    + "<br/>" + profile.idPointers;

            profileHtml += "<br/><br/><b>LENGTH</b>"
                    + "<br/>Males: " + profile.lengthMaleMin + "m - " + profile.lengthMaleMax + "m; "
                    + "Females: " + profile.lengthFemaleMin + "m - " + profile.lengthFemaleMax + "m";

            profileHtml += "<br/><br/><b>WEIGHT</b>"
                    + "<br/>Males: " + profile.weightMaleMin + "kg - " + profile.weightMaleMax + "kg; "
                    + "Females: " + profile.weightFemaleMin + "kg - " + profile.weightFemaleMax + "kg";

            $("#profile .header .title").html(animal.name);
            $("#profile .content .profile-content").html(profileHtml);

            $("#profile .content .cautionLink").on("click", function() {
                var popupContent = "<b>Safety Notice</b>"
                        + "<br/>" + $("#profile .content .cautionNotice").html();
                alert(popupContent);
            });
            if (onComplete) {
                onComplete();
            }
        });
    };

    this.animal_loadAnimals = function(onComplete) {
        model.getAnimals(function(animals) {
            model.getCategories(function(categories) {
                var animalsHtml = "";

                animalsHtml += "<div class=\"search-by-category\">"
                        + "<div class=\"category-label\"><b>SEARCH BY CATEGORY</b></div>";
                for (var x = 0; x < categories.length; x++) {
                    animalsHtml += "<div id=\"" + categories[x].category + "\" class=\"category-option\">"
                            + categories[x].category + "</div>";
                }
                animalsHtml += "</div>";

                animalsHtml += "<br/><div class=\"search-by-letter\">"
                animalsHtml += "<div class=\"category-label\"><b>SEARCH BY LETTER</b></div>";
                var lastLetter = '';
                for (var x = 0; x < animals.length; x++) {
                    var firstLetter = animals[x].name.charAt(0);
                    if (firstLetter !== lastLetter) {
                        animalsHtml += "<div id=\"" + firstLetter + "\" class=\"letter-heading\"><b>" + firstLetter + "</b></div>";
                        lastLetter = firstLetter;
                    }
                    animalsHtml += "<div id=\"letter_" + animals[x].animalID + "\" class=\"letter-option\">"
                            + animals[x].name + "</div>";
                }
                animalsHtml += "</div>";

                animalsHtml += "<br/><div class=\"search-by-size\">";
                animalsHtml += "<div class=\"category-label\"><b>NARROW IT DOWN BY SIZE</b></div>";
                animalsHtml += "<input type=\"text\" name=\"minWeightTxt\" id=\"minWeightTxt\">";
                animalsHtml += "<input type=\"range\" name=\"minWeight\" id=\"minWeight\" value=\"0\" min=\"0\" max=\"100\">";
                animalsHtml += "<input type=\"range\" name=\"maxWeight\" id=\"maxWeight\" value=\"100\" min=\"0\" max=\"100\">";
                animalsHtml += "<input type=\"text\" name=\"maxWeightTxt\" id=\"maxWeightTxt\">";
                animalsHtml += "</div>";

                for (var x = 0; x < animals.length; x++) {
                    if (x === 0) {
                        animalsHtml += "<li class=\"ui-first-child\">";
                    } else if (x === (animals.length - 1)) {
                        animalsHtml += "<li class=\"ui-last-child\">";
                    } else {
                        animalsHtml += "<li>";
                    }

                    animalsHtml += "<div class=\"animal\" category=\"" + animals[x].category + "\" minWeight=\"" + animals[x].weightFemaleMin + "\" maxWeight=\"" + animals[x].weightMaleMax + "\">";
                    animalsHtml += "<img class=\"animal-icon\" src=\"" + animals[x].iconFilePath + "\"/>";
                    animalsHtml += "<a id=\"animal_" + animals[x].animalID + "\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">"
                            + animals[x].name
                            + "</a>";
                    animalsHtml += "</div>";

                    animalsHtml += "</li>";

                }

                $("#animalsList").html(animalsHtml);

                $("#minWeight").on("change", function() {
                    _filterWeights();
                });
                $("#maxWeight").on("change", function() {
                    _filterWeights();
                });

                $('.category-option').each(function() {
                    $(this).on("click", function(event) {
                        var category = event.target.id;

                        $(".animal").each(function() {
                            if (category == $(this).attr("category")) {
                                $(this).show();
                            } else {
                                $(this).hide();

                            }
                        });

                    });
                });

                $('*[id^="animal_"], *[id^="letter_"]').on(
                        "click",
                        function(event) {
                            var elementID = event.target.id;
                            var animalID = elementID.substring(7);

                            app.view.initializeProfileLinks(animalID);

                            model.getAnimal(animalID, function(animal) {
                                app.view.animal_loadProfile(animal, function() {
                                    location.href = "#profile";
                                });
                            });
                        }
                );
                if (onComplete) {
                    onComplete();
                }
            });
        });
    };

    _filterWeights = function() {
        var min = parseFloat($("#minWeight").val());
        var max = parseFloat($("#maxWeight").val());

        $("#minWeightTxt").val(min);
        $("#maxWeightTxt").val(max);

        $(".animal").each(function() {
            var animalMin = parseFloat($(this).attr("minWeight"));
            var animalMax = parseFloat($(this).attr("maxWeight"));

            if (min < animalMin && max > animalMax) {
                $(this).show();
            } else {
                $(this).hide();

            }
        });
    };

    this.get_profile_tabs = function(page) {
        var html = "";
        html += "<div class=\"profile-option animal-profile" + (page === "profile" ? " profile-tab-selected" : "") + "\">Profile</div>";
        html += "<div class=\"profile-option animal-audio" + (page === "audio" ? " profile-tab-selected" : "") + "\">Audio</div>";
        html += "<div class=\"profile-option animal-map" + (page === "map" ? " profile-tab-selected" : "") + "\">Map</div>";
        html += "<div class=\"profile-option animal-footprints" + (page === "footprints" ? " profile-tab-selected" : "") + "\">Footprints</div>";
        html += "<div class=\"profile-option animal-question" + (page === "question" ? " profile-tab-selected" : "") + "\">Ask a Question</div>";
        html += "<div class=\"profile-option animal-donate" + (page === "donate" ? " profile-tab-selected" : "") + "\">Donate to a Conservation</div>";

        var currentContent = ""; // $("#" + page + " .profile-content").html();
        html += "<div class=\"profile-content\">" + currentContent + "</div>";

        return html;
    };

    this.profile_alignOptions = function() {
        var option_width = $(".profile-option").width(); // width and height of the option boxes (squares)
        var option_height = 50; // width and height of the option boxes (squares)
        var option_padding = 0; // space between option boxes
        var top_margin_start = 0; // from the top of the content div

        var option_count = 0;
        var contentHeight = $("* .content").height();
        var option_height = contentHeight / 6;

        $(".profile-option")
                .css("margin-left", (0) + "px")
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

    this.initializeProfileLinks = function(animalID) {
        model.getAnimal(animalID, function(animal) {
            $("* .animal-profile").on("click", function(event) {
                app.view.animal_loadProfile(animal, function() {
                        location.href = "#profile";
                        // $("#animals .header .title").html("Animals");
                        // $("#menu .content").html($("#animals .content").html());
                    });
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
        });
    };

    this.menu_alignOptions = function() {
        var option_size = 100; // width and height of the option boxes (squares)
        var option_padding = 25; // space between option boxes
        var top_margin_start = 50; // from the top of the content div

        $(".options-row1").css("margin-top", (top_margin_start) + "px");
        $(".options-row2").css("margin-top", (top_margin_start + option_size + option_padding) + "px");
        // $(".options-row3").css("margin-top", (top_margin_start + option_size + option_padding + option_size + option_padding) + "px");

        var left_margin_centre = -50; // from the centre of the content div

        $(".option.left").css("margin-left", (left_margin_centre - option_size - option_padding) + "px");
        $(".option.centre").css("margin-left", (left_margin_centre + 0) + "px");
        $(".option.right").css("margin-left", (left_margin_centre + option_size + option_padding) + "px");
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