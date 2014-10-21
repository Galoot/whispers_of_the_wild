function View() {
    model = new Model();
    model.load_data();
    this.animal = new Animal();

    this.animal_loadProfile = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            model.getImages(animal.animalID, function(images) {
                $("#profile .header .title").html(animal.name);

                var imagesHtml = "";
                for (var i = 0; i < images.length; i++) {
                    imagesHtml += ""
                            + "         <div class=\"swiper-slide\"> "
//                            + "         <li class=\"slide\"> "
                            + "             <img class=\"slide\" src=\"" + images[i].filePath + "\"/>"
//                            + "         </li>";
                            + "         </div>";
                }
                $(".swiper-wrapper").html(imagesHtml);
//                $(".bjqs").html(imagesHtml);

                $(".animal-name").html(animal.name);
                $(".cautionNotice").html(animal.cautionNotice);
                $(".identification-pointers").html(profile.idPointers);
                $(".animal-gestation").html(profile.gestation);
                $(".animal-lifespan").html(profile.lifespan);
                $(".animal-diet").html(profile.diet);
                $(".animal-habitat").html(profile.habitat);

                var lengthHtml =
                        "Males: " + profile.lengthMaleMin + "m - " + profile.lengthMaleMax + "m; "
                        + "Females: " + profile.lengthFemaleMin + "m - " + profile.lengthFemaleMax + "m";
                $(".animal-length").html(lengthHtml);

                var weightHtml =
                        "Males: " + profile.weightMaleMin + "kg - " + profile.weightMaleMax + "kg; "
                        + "Females: " + profile.weightFemaleMin + "kg - " + profile.weightFemaleMax + "kg";
                $(".animal-weight").html(weightHtml);


                $(function(){
                    var mySwiper = $('.swiper-container').swiper({
                        //Your options here:
                        mode:'horizontal',
                        loop: true,
                        centeredSlides: true
                        //etc..
                    });
                });

                if (onComplete) {
                    onComplete();
                }
            });
        });
    };

    this.animal_loadAudio = function(animal, onComplete) {
        model.getAudio(animal.animalID, function(tracks) {
            $("#audio .header .title").html(animal.name);

            var audioHtml = "";

            for (var i = 0; i < tracks.length; i++) {
                audioHtml += "<div duration=\"" + tracks[i].duration + "\" path=\"" + tracks[i].filePath + "\" id=\"track_" + i + "\" class=\"audio-track\">" + tracks[i].trackName + "</div>";
            }
            $("#audio .profile-content").html(audioHtml);

            $('*[id^="track_"]').on("click",
                function(event) {
                    var elementID = event.currentTarget.id;
                    var src = $("#" + elementID).attr("path");
                    var dur = $("#" + elementID).attr("duration");
                    // var src = elementID.substring(6);
                    pauseAudio();
                    playAudio(src, dur,
                        function(position, duration) {
                            $(".footer-progress").html(position + " secs" + (duration ? " / " + duration : ""));
                        });
                });
        });

        if (onComplete) {
            onComplete();
        }
    };

    this.animal_loadMap = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            model.getMaps(animal.animalID, function(maps) {
                $("#map .header .title").html(animal.name);

                var imagesHtml = "";
                for (var i = 0; i < maps.length; i++) {
                    imagesHtml += ""
                            + "         <div class=\"swiper-slide\"> "
                            + "             <img src=\"" + maps[i].filePath + "\"/>"
                            + "         </div>";
                }
                $("#map .swiper-wrapper").html(imagesHtml);


                $("#map .animal-name").html(animal.name);
                $("#map .cautionNotice").html(animal.cautionNotice);
                $("#map .identification-pointers").html(profile.idPointers);

                var lengthHtml =
                        "Males: " + profile.lengthMaleMin + "m - " + profile.lengthMaleMax + "m; "
                        + "Females: " + profile.lengthFemaleMin + "m - " + profile.lengthFemaleMax + "m";
                $("#map .animal-length").html(lengthHtml);

                var weightHtml =
                        "Males: " + profile.weightMaleMin + "kg - " + profile.weightMaleMax + "kg; "
                        + "Females: " + profile.weightFemaleMin + "kg - " + profile.weightFemaleMax + "kg";
                $("#map .animal-weight").html(weightHtml);



                $(function(){
                    var mySwiper = $('#map .swiper-container').swiper({
                        //Your options here:
                        mode:'horizontal',
                        loop: true
                        //etc..
                    });
                });

                if (onComplete) {
                    onComplete();
                }
            });
        });
    };

    this.animal_loadFootprints = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            model.getFootprints(animal.animalID, function(footprints) {
                $("#footprints .header .title").html(animal.name);

                var imagesHtml = "";
                for (var i = 0; i < footprints.length; i++) {
                    imagesHtml += ""
                            + "         <div class=\"swiper-slide\"> "
                            + "             <img src=\"" + footprints[i].filePath + "\"/>"
                            + "         </div>";
                }
                $("#footprints .swiper-wrapper").html(imagesHtml);


                $("#footprints .animal-name").html(animal.name);
                $("#footprints .cautionNotice").html(animal.cautionNotice);
                $("#footprints .identification-pointers").html(profile.idPointers);

                var lengthHtml =
                        "Males: " + profile.lengthMaleMin + "m - " + profile.lengthMaleMax + "m; "
                        + "Females: " + profile.lengthFemaleMin + "m - " + profile.lengthFemaleMax + "m";
                $("#footprints .animal-length").html(lengthHtml);

                var weightHtml =
                        "Males: " + profile.weightMaleMin + "kg - " + profile.weightMaleMax + "kg; "
                        + "Females: " + profile.weightFemaleMin + "kg - " + profile.weightFemaleMax + "kg";
                $("#footprints .animal-weight").html(weightHtml);



                $(function(){
                    var mySwiper = $('#footprints .swiper-container').swiper({
                        //Your options here:
                        mode:'horizontal',
                        loop: true
                        //etc..
                    });
                });

                if (onComplete) {
                    onComplete();
                }
            });
        });
    };

    this.animal_loadAnimals = function(onComplete) {
        model.getAnimals(function(animals) {
            model.getCategories(function(categories) {
                // Categories --------------------------------------------------
                var categoriesHtml = "";
                categoriesHtml += "<div id=\"all\" class=\"category-option\">All</div>";
                for (var x = 0; x < categories.length; x++) {
                    categoriesHtml += "<hr/><div id=\"" + categories[x].category + "\" class=\"category-option\">"
                            + categories[x].category + "</div>";
                }
                $("#search-by-category").html(categoriesHtml);

                // Letters -----------------------------------------------------
                var lettersHtml = "";
                var lastLetter = '';
                lettersHtml += "<div id=\"all\" class=\"letter-option\">All</div>";
                for (var x = 0; x < animals.length; x++) {
                    var firstLetter = animals[x].name.charAt(0);
                    if (firstLetter !== lastLetter) {
                        lettersHtml += "<hr/><div id=\"" + firstLetter + "\" class=\"letter-heading\">"
                                + "<b>" + firstLetter + "</b></div>";
                        lastLetter = firstLetter;
                    }
                    lettersHtml += "<div id=\"" + animals[x].animalID + "\" class=\"letter-option\">"
                            + animals[x].name + "</div>";
                }
                $("#search-by-letter").html(lettersHtml);

                // Animals -----------------------------------------------------
                var animalGridHtml = "";
                for (var x = 0; x < animals.length; x++) {
                    animalGridHtml += "<div id=\"animalID_" + animals[x].animalID + "\" "
                            + "class=\"animal-block\" "
                            + "category=\"" + animals[x].category + "\" "
                            + "minLength=\"" + animals[x].weightFemaleMin + "\" "
                            + "maxLength=\"" + animals[x].weightMaleMax + "\">";
                    animalGridHtml += "<img class=\"animal-icon\" src=\"" + animals[x].iconFilePath + "\"/>";
                    animalGridHtml += "</div>";
                }
                $("#animal-grid").html(animalGridHtml);

                // Listeners ---------------------------------------------------
                $("#minLength").on("keyup", function() {
                    _filterWeights();
                });
                $("#maxLength").on("keyup", function() {
                    _filterWeights();
                });

                $(".category-option").on("click", function(event) {
                    $("#search-by-category").toggle();
                });

                $(".letter-option").on("click", function(event) {
                    $("#search-by-letter").toggle();
                });

                $('.category-option').each(function() {
                    $(this).on("click", function(event) {
                        var category = event.target.id;

                        $(".animal-block").each(function() {
                            if (category === ("all")) {
                                $(this).show();
                            } else if (category == $(this).attr("category")) {
                                $(this).show();
                            } else {
                                $(this).hide();

                            }
                        });

                    });
                });

                $('.letter-option').each(function() {
                    $(this).on("click", function(event) {
                        var letter = event.target.id;

                        $(".animal-block").each(function() {
                            if (letter === ("all")) {
                                $(this).show();
                            } else if (("animalID_" + letter) == $(this).attr("id")) {
                                $(this).show();
                            } else {
                                $(this).hide();

                            }
                        });

                    });
                });

                $('*[id^="animalID_"]').on(
                        "click",
                        function(event) {
                            var elementID = event.currentTarget.id;
                            var animalID = elementID.substring(9);

                            app.view.initializeProfileLinks(animalID);
                            model.getAnimal(animalID, function(animal) {
                                app.view.animal_loadProfile(animal, function() {
                                    location.href = "#profile";
                                });
                            });
                        }
                );
                // -------------------------------------------------------------

                if (onComplete) {
                    onComplete();
                }
            });
        });
    };

    _filterWeights = function() {
        var min = parseFloat($("#minLength").val());
        var max = parseFloat($("#maxLength").val());

        // $("#minLengthTxt").val(min);
        // $("#maxLengthTxt").val(max);

        $(".animal-block").each(function() {
            var animalMin = parseFloat($(this).attr("minLength"));
            var animalMax = parseFloat($(this).attr("maxLength"));
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
                });
            });
            $("* .animal-audio").on("click", function(event) {
                app.view.animal_loadAudio(animal, function() {
                    location.href = "#audio";
                });
            });
            $("* .animal-map").on("click", function(event) {
                app.view.animal_loadMap(animal, function() {
                    location.href = "#map";
                });
            });
            $("* .animal-footprints").on("click", function(event) {
                app.view.animal_loadFootprints(animal, function() {
                    location.href = "#footprints";
                });
            });
            $("* .animal-question").on("click", function(event) {
                location.href = "#question";
            });
            $("* .animal-donate").on("click", function(event) {
                location.href = "#donate";
            });
        });
    };

    this.animals_alignGrid = function() {
        if ($('#animal_grid')) {
            $('.animal_grid').css('width', 'auto'); //reset
            var windowWidth = $(document).width();
            var blockWidth = $('.animal').outerWidth(true);
            var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
            $('.animal_grid').width(maxBoxPerRow * blockWidth);
        }
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