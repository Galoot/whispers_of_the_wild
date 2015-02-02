function View() {
    model = new Model();
    model.load_data(function() {
        model.getAnimals(function(animals) {
            app.animals = animals;
        });
    });

    this.animal = new Animal();

    // image sliders
    this.profileSlider = null;
    this.mapSlider = null;
    this.footprintSlider = null;
    this.currentAnimal = null;

    this.modal = function(divID) {
        $.pgwModal({
            // target: '#modalContent',
            // content: htmlMessage,
            target: ("#" + divID),
            titleBar: false
            // title: title
            // maxWidth: 800
        });
    };

    this.reloadImageSlider = function(slider, element) {
        var newSlider;
        if (!slider) {
            newSlider = element.pgwSlider({
                    displayList : false,
                    transitionEffect: 'sliding',
                    displayControls : true,
                    autoSlide: false

                });
        } else {
            // slider.destroy(true);
            // slider = element.pgwSlider();
            slider.destroy(false);
            newSlider = element.reload({
//             newSlider = element.pgwSlider({
                    displayList : false,
                    transitionEffect: 'sliding',
                    displayControls : true,
                    autoSlide: false

                });
            // slider.show();
            // element.show();
        }
        return newSlider;
//        if (app.view.imageSwiper) {
//            app.view.imageSwiper.reInit();
//        }
    };

    this.reloadImageSliders = function() {
        reloadImageSlider(app.view.profileSlider, $('#profile .image-slider'));
        reloadImageSlider(app.view.mapSlider, $('#map .image-slider'));
        reloadImageSlider(app.view.footprintSlider, $('#footprints .image-slider'));
    }

    this.animal_loadProfile = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            model.getImages(animal.animalID, function(images) {
                $("#profile .header .title").html(animal.name);

                if (app.view.profileSlider) {
                    // app.view.profileSlider.remove();
                    app.view.profileSlider.destroy(true);
                    app.view.profileSlider = null;
                }
                var imagesHtml = "";
                for (var i = 0; i < images.length; i++) {
                    imagesHtml += ""
//                            + "         <div class=\"swiper-slide\"> "
                            + "         <li> "
                            + "             <img src=\"" + images[i].filePath + "\"/>"
                            + "         </li>";
//                            + "         </div>";
                }
                $("#profile .image-slider").html(imagesHtml);
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

                app.view.profileSlider = app.view.reloadImageSlider(app.view.profileSlider, $('#profile .image-slider'));

//                    app.view.imageSwiper = $('#profile .swiper-container').swiper({
//                        // Your options here:
//                        pagination: '.pagination',
//                        paginationClickable: true,
//                        grabCursor: true,
//
//                        resizeReInit: true,
//                        loop: true,
//                        visibilityFullFit: true,
//                        calculateHeight: true,
//                        // centeredSlides: true
//                        //etc..
//                    });


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

            $('*[id^="track_"]').off();
            $('*[id^="track_"]').on("click",
                function(event) {
                    var elementID = event.currentTarget.id;
                    var src = $("#" + elementID).attr("path");
                    var dur = $("#" + elementID).attr("duration");
                    var trackName = $("#" + elementID).html();

                    pauseAudio();
                    $(".footer-trackName").html(trackName);
                    $(".audio-play-pause").css("background-image", "url('resources/buttons/media_player/pause.png')");

                    playAudio(src, dur,
                        function(position, duration) {
                            var progress = Math.round(position ? (position / duration * 100) : 0);

                            var current = Math.ceil(position);
                            var total = duration ? Math.round(duration) : 0;

                            var currentStr = Math.floor(current / 60) + ":" + zeroLeftPad("" + (current % 60), 2);
                            var totalStr = Math.floor(total / 60) + ":" + zeroLeftPad("" + (total % 60), 2);
                            $(".footer-progress").html(currentStr + " / " + totalStr);
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

                if (app.view.mapSlider) {
                    // app.view.profileSlider.remove();
                    app.view.mapSlider.destroy(true);
                    app.view.mapSlider = null;
                }

                var imagesHtml = "";
                for (var i = 0; i < maps.length; i++) {
                    imagesHtml += ""
                            + "         <li> "
                            + "             <img src=\"" + maps[i].filePath + "\"/>"
                            + "         </li>";
                }
                $("#map .image-slider").html(imagesHtml);


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

                app.view.mapSlider = app.view.reloadImageSlider(app.view.mapSlider, $('#map .image-slider'));

//                    var mySwiper = $('#profile .swiper-container').swiper({
//                        //Your options here:
//                        mode:'horizontal',
//                        loop: true,
//                        centeredSlides: true
//                        //etc..
//                    });

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

                if (app.view.footprintSlider) {
                    // app.view.profileSlider.remove();
                    app.view.footprintSlider.destroy(true);
                    app.view.footprintSlider = null;
                }

                var imagesHtml = "";
                for (var i = 0; i < footprints.length; i++) {
                    imagesHtml += ""
                            + "         <li> "
                            + "             <img src=\"" + footprints[i].filePath + "\"/>"
                            + "         </li>";
                }
                $("#footprints .image-slider").html(imagesHtml);


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

                app.view.footprintSlider = app.view.reloadImageSlider(app.view.footprintSlider, $('#footprints .image-slider'));

//                    var mySwiper = $('#profile .swiper-container').swiper({
//                        //Your options here:
//                        mode:'horizontal',
//                        loop: true,
//                        centeredSlides: true
//                        //etc..
//                    });

                if (onComplete) {
                    onComplete();
                }
            });
        });
    };

    this.animal_animalGrid = function(idPrefix, onComplete) {
        if (typeof idPrefix === "undefined") {
            idPrefix = '';
        }
        model.getAnimals(function(animals) {
            // Animals -----------------------------------------------------
            var animalGridHtml = "";
            for (var x = 0; x < animals.length; x++) {
                animalGridHtml += "<div id=\"" + idPrefix + "animalID_" + animals[x].animalID + "\" "
                        + "class=\"" + idPrefix + "animal-block\" "
                        + "category=\"" + animals[x].category + "\" "
                        + "minLength=\"" + animals[x].weightFemaleMin + "\" "
                        + "maxLength=\"" + animals[x].weightMaleMax + "\">";
                animalGridHtml += "<img class=\"" + idPrefix + "animal-icon\" src=\"" + animals[x].iconFilePath + "\"/>";
                animalGridHtml += "</div>";
            }

            if (onComplete) {
                onComplete(animalGridHtml);
            }
        });
    };

    this.animal_loadAnimals = function(onComplete) {
        model.getAnimals(function(animals) {
            app.animals = animals;

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
                this.animal_animalGrid
                $("#animal-grid").html(animalGridHtml);

                // Listeners ---------------------------------------------------
                $("#minLength").off();
                $("#minLength").on("keyup", function() {
                    _filterWeights();
                });
                $("#maxLength").off();
                $("#maxLength").on("keyup", function() {
                    _filterWeights();
                });
                $(".category-option").off();
                $(".category-option").on("click", function(event) {
                    $("#search-by-category").toggle();
                });
                $(".letter-option").off();
                $(".letter-option").on("click", function(event) {
                    $("#search-by-letter").toggle();
                });

                $('.category-option').each(function() {
                    $(this).off();
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
                    $(this).off();
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

                $('*[id^="animalID_"]').off();
                $('*[id^="animalID_"]').on(
                        "click",
                        function(event) {
                            var elementID = event.currentTarget.id;
                            var animalID = elementID.substring(9);

                            app.view.initializeProfileLinks(animalID);
                            model.getAnimal(animalID, function(animal) {
                                var freeApp = (app.mode === app.MODE_FREE);
                                var nonFreeAnimal = (animal.isEarned === "true" || animal.isPaid === "true");
                                if (freeApp && nonFreeAnimal) {
                                    app.view.modal("limitedAccessMessage");
                                } else {
                                    app.view.animal_loadProfile(animal, function() {
                                        location.href = "#profile";
                                    });
                                }
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

    var progressBar = {
        setValue:function(element, value) {
            $(element).val(value);
            $(element).slider("refresh");
        }
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
        html += "<div class=\"profile-option animal-profile" + (page === "profile" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">Profile</div>"
                + "</div>";
        html += "<div class=\"profile-option animal-audio" + (page === "audio" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">Audio</div>"
                + "</div>";
        html += "<div class=\"profile-option animal-map" + (page === "map" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">Map</div>"
                + "</div>";
        html += "<div class=\"profile-option animal-footprints" + (page === "footprints" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">Footprints</div>"
                + "</div>";
        html += "<div class=\"profile-option animal-question" + (page === "question" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">Ask a Question</div>"
                + "</div>";
        html += "<div class=\"profile-option animal-donate" + (page === "donate" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">Donate to a Conservation</div>"
                + "</div>";

        return html;
    };

    this.profile_alignOptions = function(pageID) {
        var page = "*";
        if (pageID) {
            page = "#" + pageID;
        }
        var option_width = $(page + " .profile-option").width(); // width and height of the option boxes (squares)
        var option_height = 50; // width and height of the option boxes (squares)
        var option_padding = 0; // space between option boxes
        var top_margin_start = 0; // from the top of the content div

        var option_count = 0;
        var contentHeight = $(page + " .content").height();
        var option_height = contentHeight / 6;

        $(page + " .profile-option")
                .css("margin-left", (0) + "px")
                .css("height", (option_height) + "px");

        $(page + " .content .animal-profile")
                .css("margin-top", (top_margin_start + (option_height*option_count++)) + "px");
        $(page + " .content .animal-audio")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .animal-map")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .animal-footprints")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .animal-question")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .animal-donate")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");

        var left_margin_centre = 0; // from the centre of the content div

        $(page + " .content .profile-content").css("margin-top", (-1) + "px");
        $(page + " .content .profile-content").css("margin-left", (option_width + left_margin_centre) + "px");
    };

    this.get_about_tabs = function(page) {
        var html = "";
        html += "<div class=\"profile-option about-founder" + (page === "founder" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">FOUNDER</div>"
                + "</div>";
        html += "<div class=\"profile-option about-partners" + (page === "partners" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">PARTNERS</div>"
                + "</div>";
        html += "<div class=\"profile-option about-board" + (page === "board" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">ADVISORY BOARD</div>"
                + "</div>";
        html += "<div class=\"profile-option about-sounds" + (page === "sounds" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">VOICES AND SOUNDS</div>"
                + "</div>";
        html += "<div class=\"profile-option about-photographers" + (page === "photographers" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">PHOTOGRAPHERS</div>"
                + "</div>";
        html += "<div class=\"profile-option about-sources" + (page === "sources" ? " profile-tab-selected" : "") + "\">"
                + "<div class=\"profile-option-image\"></div>"
                + "<div class=\"profile-option-text\">SOURCES</div>"
                + "</div>";

        return html;
    };

    this.about_alignOptions = function(pageID) {
        var page = "*";
        if (pageID) {
            page = "#" + pageID;
        }
        var option_width = $(page + " .profile-option").width(); // width and height of the option boxes (squares)
        var option_height = 50; // width and height of the option boxes (squares)
        var option_padding = 0; // space between option boxes
        var top_margin_start = 0; // from the top of the content div

        var option_count = 0;
        var contentHeight = $(page + " .content").height();
        var option_height = contentHeight / 6;

        $(page + " .profile-option")
                .css("margin-left", (0) + "px")
                .css("height", (option_height) + "px");

        $(page + " .content .about-founder")
                .css("margin-top", (top_margin_start + (option_height*option_count++)) + "px");
        $(page + " .content .about-partners")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .about-board")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .about-sounds")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .about-photographers")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");
        $(page + " .content .about-sources")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");

        var left_margin_centre = 0; // from the centre of the content div

        $(page + " .content .profile-content").css("margin-top", (-1) + "px");
        $(page + " .content .profile-content").css("margin-left", (option_width + left_margin_centre) + "px");
    };

    this.initializeProfileLinks = function(animalID) {
        model.getAnimal(animalID, function(animal) {
            $("* .animal-profile").off();
            $("* .animal-profile").on("click", function(event) {
                app.view.animal_loadProfile(animal, function() {
                    // app.view.profile_alignOptions("profile");
                    // app.view.reloadImageSlider(app.view.profileSlider, $('#profile .image-slider'));
                    location.href = "#profile";
                });
            });
            $("* .animal-audio").off();
            $("* .animal-audio").on("click", function(event) {
                app.view.animal_loadAudio(animal, function() {
//                    app.view.profile_alignOptions("audio");
                    location.href = "#audio";
                });
            });
            $("* .animal-map").off();
            $("* .animal-map").on("click", function(event) {
                app.view.animal_loadMap(animal, function() {
//                    app.view.profile_alignOptions("map");
//                    app.view.reloadImageSliders();
                    location.href = "#map";
                });
            });
            $("* .animal-footprints").off();
            $("* .animal-footprints").on("click", function(event) {
                app.view.animal_loadFootprints(animal, function() {
//                    app.view.profile_alignOptions("footprints");
//                    app.view.reloadImageSliders();
                    location.href = "#footprints";
                });
            });
            $("* .animal-question").off();
            $("* .animal-question").on("click", function(event) {
//                app.view.profile_alignOptions("question");
                location.href = "#question";
            });
            $("* .animal-donate").off();
            $("* .animal-donate").on("click", function(event) {
//                app.view.profile_alignOptions("donate");
                location.href = "#donate";
            });
        });
    };

    this.initializeAboutLinks = function() {
        $("* .about-founder").off();
        $("* .about-founder").on("click", function(event) {
            app.view.about_alignOptions("founder");
            location.href = "#founder";
        });
        $("* .about-founder").off();
        $("* .about-partners").on("click", function(event) {
            app.view.about_alignOptions("partners");
            location.href = "#partners";
        });
        $("* .about-board").off();
        $("* .about-board").on("click", function(event) {
            app.view.about_alignOptions("board");
            location.href = "#board";
        });
        $("* .about-sounds").off();
        $("* .about-sounds").on("click", function(event) {
            app.view.about_alignOptions("sounds");
            location.href = "#sounds";
        });
        $("* .about-photographers").off();
        $("* .about-photographers").on("click", function(event) {
            app.view.about_alignOptions("photographers");
            location.href = "#photographers";
        });
        $("* .about-sources").off();
        $("* .about-sources").on("click", function(event) {
            app.view.about_alignOptions("sources");
            location.href = "#sources";
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
//        console.log("header height: " + header_oh);

        var footer = $(".footer");
        var footer_oh = footer.height() > 0 ? footer.outerHeight(true) : 0;
//        console.log("footer height: " + footer_oh);

        var content = $(".content");

        var window_h = $(window).height();

        var content_h = content.height();
        var content_oh = content_h > 0 ? content.outerHeight(true) : 0;

        var c_new = window_h - header_oh - footer_oh - content_oh + content_h + 56;


        content.height(c_new);
        $("* .content .profile-content").css("height", (c_new) + "px");

        // resize height of slider container to keep 16:9
        $(".swiper-container").css("height", ($(".swiper-container").width() / 16 * 9) + "px");

    //        var total = header_oh + footer_oh + content_oh;
    //        if (content_h < content.get(0).scrollHeight) {
    //            content.height(content.get(0).scrollHeight);
    //        } else {
    //            content.height(c_new);
    //        }
    };
};