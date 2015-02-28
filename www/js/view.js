function AudioTrack(src, duration, name) {
    this.trackName = name;
    this.trackPath = src;
    this.seconds = duration;
}

function View() {
    model = new Model();
    model.load_data(function() {
        model.getAnimals(function(animals) {
            app.animals = animals;
        });
    });

    this.sliderDisplayDelay = 0;
    this.animal = new Animal();
    this.percProgress = 0;

    // audio track array for track navigation
    this.audioTrack = [];
    this.currentAudioTrackIndex = -1;

    // image sliders
    this.profileSlider = null;
    this.mapSlider = null;
    this.footprintSlider = null;

    // current animal profile being viewed
    this.currentAnimal = null;

    // state of footer being collapsed or not
    this.footerCollapsed = true;
    this.navigationCollapsed = false;
    /**
     * Will change the mode from FREE to FREE_UNLOCKED.
     * If the current mode is not FREE, then this operation will do nothing.
     * @returns {undefined}
     */
    this.unlockFreeApp = function(onComplete) {
        this.getProperty('mode', function(results) {
            var currentMode = results[0].value;
            if (currentMode == app.MODE_FREE) {
                app.mode = app.MODE_FREE_UNLOCKED;
                app.view.setProperty('mode', '' + app.MODE_FREE_UNLOCKED, function() {
//                    console.log('unlocked ok');
                    if (onComplete) {
                        onComplete();
                    }
                });
            }
        });
    };

    this.setDefaultProperties = function() {
        model.data.createDefaultProperties();
    };

    this.setProperty = function(property, value, onComplete) {
        model.setProperty(property, value, onComplete);
    };

    this.getProperty = function(property, onResult) {
        model.getProperty(property, onResult);
    };

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
        return element.pgwSlider({
                    displayList : false,
                    transitionEffect: 'sliding',
                    displayControls : true,
                    autoSlide: false
                });
    };

    this.destroySlider = function(slider) {
        if (slider) {
            slider.destroy(false);
        }
        return slider;
    };

    this.destroySliders = function() {

        app.view.profileSlider = app.view.destroySlider(app.view.profileSlider);
        app.view.mapSlider = app.view.destroySlider(app.view.mapSlider);
        app.view.footprintSlider = app.view.destroySlider(app.view.footprintSlider);

    };

    this.reloadImageSliders = function() {
        window.setTimeout(function() {
            app.view.profileSlider = app.view.reloadImageSlider(app.view.profileSlider, $('#image-slider-profile'));
            app.view.mapSlider = app.view.reloadImageSlider(app.view.mapSlider, $('#image-slider-map'));
            app.view.footprintSlider = app.view.reloadImageSlider(app.view.footprintSlider, $('#image-slider-footprints'));
        }, app.view.sliderDisplayDelay);
    };

    this.animal_loadProfile = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            model.getImages(animal.animalID, function(images) {
                $("#profile .header .title").html(animal.name);

                var imagesHtml = "";
                for (var i = 0; i < images.length; i++) {
                    imagesHtml += ""
                            + "         <li> "
                            + "             <img src=\"" + images[i].filePath + "\"/>"
                            + "         </li>";
                }
                $("#image-slider-profile").html(imagesHtml);

                $(".animal-name").html(animal.name);
                $(".common-names").html(animal.commonNames);
                $(".confused-with").html(profile.confusedWith);
                $(".activity-period").html(profile.activityPeriod);
                $(".predators").html(profile.predators);
                $(".red-list-status").html(profile.redListStatus);
                $(".population").html(profile.population);
                $(".threats").html(profile.threats);
                $(".cautionNotice").html(animal.cautionNotice);
                $(".identification-pointers").html(profile.idPointers);
                $(".animal-gestation").html(profile.gestation);
                $(".animal-lifespan").html(profile.lifespan);
                $(".animal-diet").html(profile.diet);
                $(".animal-habitat").html(profile.habitat);
                $(".animal-length").html(profile.length);
                $(".animal-height").html(profile.height);
                $(".animal-weight").html(profile.weight);

                if (onComplete) {
                    onComplete();
                }
            });
        });
    };

    this.updateProgressBars = function() {
        // Progress bar for audio track
        $('.audioProgress').each(function() {
            $(this).nstSlider('set_position', app.view.percProgress);
        });
    };

    this.playAudioTrack = function(src, dur, trackName, existingTrack) {
        if (!existingTrack) {
            app.view.audioTrack.push(new AudioTrack(src, dur, trackName));
            app.view.currentAudioTrackIndex = app.view.audioTrack.length - 1;
        }

        pauseAudio();
        $(".footer-trackName").html(trackName);
        $(".audio-play-pause").css("background-image", "url('resources/buttons/media_player/pause.png')");

        playAudio(src, dur, function(position, duration) {
                var progress = Math.round(position ? (position / duration * 100) : 0);

                var current = Math.ceil(position);
                var total = duration ? Math.round(duration) : 0;

//                var currentStr = Math.floor(current / 60) + ":" + zeroLeftPad("" + (current % 60), 2);
//                var totalStr = Math.floor(total / 60) + ":" + zeroLeftPad("" + (total % 60), 2);
//                 $(".footer-progress").html(currentStr + " / " + totalStr);

                var percProgress = (current / total * 100);
                app.view.percProgress = Math.round(percProgress);
                $('.audioProgress').each(function() {
                    $(this).nstSlider('set_position', percProgress);
                });
            });
    };

    this.playPrevAudioTrack = function() {
        app.view.currentAudioTrackIndex += (app.view.currentAudioTrackIndex > 0) ? -1 : 0;
        var track = app.view.audioTrack[app.view.currentAudioTrackIndex];
        this.playAudioTrack(track.trackPath, track.seconds, track.trackName, true);
    };

    this.playNextAudioTrack = function() {
        app.view.currentAudioTrackIndex += (app.view.currentAudioTrackIndex < (app.view.audioTrack.length - 1)) ? 1 : 0;
        var track = app.view.audioTrack[app.view.currentAudioTrackIndex];
        this.playAudioTrack(track.trackPath, track.seconds, track.trackName, true);
    };

    this.playIntroTrack = function() {
        app.view.playAudioTrack("resources/intro.mp3", 100, "Intro");
        location.href = "#menu";
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



                    app.view.playAudioTrack(src, dur, trackName);
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
                            + "         <li> "
                            + "             <img src=\"" + maps[i].filePath + "\"/>"
                            + "         </li>";
                }
                $("#image-slider-map").html(imagesHtml);


//                $("#map .animal-name").html(animal.name);
//                $("#map .cautionNotice").html(animal.cautionNotice);
//                $("#map .identification-pointers").html(profile.idPointers);
//
//                $(".animal-length").html(profile.length);
//                $(".animal-height").html(profile.height);
//                $(".animal-weight").html(profile.weight);

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
                            + "         <li> "
                            + "             <img src=\"" + footprints[i].filePath + "\"/>"
                            + "         </li>";
                }
                $("#image-slider-footprints").html(imagesHtml);


//                $("#footprints .animal-name").html(animal.name);
//                $("#footprints .cautionNotice").html(animal.cautionNotice);
//                $("#footprints .identification-pointers").html(profile.idPointers);
//
//                $(".animal-length").html(profile.length);
//                $(".animal-height").html(profile.height);
//                $(".animal-weight").html(profile.weight);

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
                        + "animalSize=\"" + animals[x].animalID + "\">";
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

                var sortedAnimals = [];
                for (var x = 0; x < animals.length; x++) {
                    sortedAnimals[x] = animals[x];
                }

                var tempAnimal = null;

                var allSorted = false;
                while (!allSorted) {
                    allSorted = true;
                    for (var x = 0; x < sortedAnimals.length-1; x++) {
                        if (sortedAnimals[x].thumbName > sortedAnimals[x+1].thumbName) {
                            tempAnimal = sortedAnimals[x];
                            sortedAnimals[x] = sortedAnimals[x+1];
                            sortedAnimals[x+1] = tempAnimal;
                            allSorted = false;
                            break;
                        }
                    }
                }

                lettersHtml += "<div id=\"all\" class=\"letter-option\">All</div>";
                for (var x = 0; x < sortedAnimals.length; x++) {
                    var firstLetter = sortedAnimals[x].thumbName.charAt(0);
                    if (firstLetter !== lastLetter) {
                        lettersHtml += "<hr/><div id=\"" + firstLetter + "\" class=\"letter-heading\">"
                                + "<b>" + firstLetter + "</b></div>";
                        lastLetter = firstLetter;
                    }
                    lettersHtml += "<div id=\"" + sortedAnimals[x].animalID + "\" class=\"letter-option\">"
                            + sortedAnimals[x].thumbName + "</div>";
                }
                $("#search-by-letter").html(lettersHtml);

                // Animals -----------------------------------------------------
                var animalGridHtml = "";
                for (var x = 0; x < animals.length; x++) {
                    animalGridHtml += "<div id=\"animalID_" + animals[x].animalID + "\" "
                            + "class=\"animal-block\" "
                            + "category=\"" + animals[x].category + "\" "
                            + "animalSize=\"" + animals[x].animalID + "\">";
                    animalGridHtml += "<img class=\"animal-icon\" src=\"" + animals[x].iconFilePath + "\"/>";
                    animalGridHtml += "<div class=\"animal-text\">" + animals[x].thumbName + "</div>";
                    animalGridHtml += "</div>";
                }
                this.animal_animalGrid
                $("#animal-grid").html(animalGridHtml);

                // Listeners ---------------------------------------------------
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
                                var unlockedApp = (app.mode === app.MODE_FREE_UNLOCKED);
                                var earnedAnimal = (animal.isEarned === "true");
                                var paidAnimal = (animal.isPaid === "true");
                                var nonFreeAnimal = (earnedAnimal || paidAnimal);

                                if ((freeApp && nonFreeAnimal) || (unlockedApp && paidAnimal)) {
                                    app.view.modal("limitedAccessMessage");
                                } else {
                                    app.view.destroySliders();

                                    app.view.animal_loadProfile(animal, function() {
                                        app.view.animal_loadMap(animal, function() {
                                            app.view.animal_loadFootprints(animal, function() {
                                                app.view.animal_loadAudio(animal, function() {

                                                    location.href = "#profile";
                                                    app.view.reloadImageSliders();

                                                });
                                            });
                                        });
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

    this.filterWeights = function(minLength, maxLength) {

        $(".animal-block").each(function() {
            var animalSize = parseFloat($(this).attr("animalSize"));
            if (animalSize >= minLength && animalSize <= maxLength) {
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
        html += "<div class=\"profile-option-spacer\"></div>"
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
        var left_handle_width = $(page + " .panel-slider-left-handle").width();
        var footer_height = $(page + ".footer").height();
        var bottom_handle_height = $(page + " .panel-slider-bottom-handle").height();
        var option_count = 0;
        var contentHeight = $(page + " .content").height();

        // Make provision for the spacing for teh foooter
        var optionsContentHeight = contentHeight;
        if (app.view.footerCollapsed) {
            optionsContentHeight = contentHeight - footer_height;
        }

        var option_height = optionsContentHeight / 6;

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
        $(page + " .profile-option-spacer")
                .css("margin-top", (top_margin_start + (option_padding*option_count) + (option_height*option_count++)) + "px");

        var left_margin_centre = 0; // from the centre of the content div

        var leftHandleTopPos = (contentHeight / 2) - (110 / 2);
        $(page + " .content .panel-slider-left-handle").css("background-position", (0 + "px " + leftHandleTopPos + "px"));

        $(page + " .content .panel-slider-left-handle").css("height", (contentHeight + footer_height) + "px");
        $(page + " .content .panel-slider-left-handle").css("margin-top", (-1) + "px");
        $(page + " .content .panel-slider-left-handle").css("margin-left", (option_width + left_margin_centre) + "px");

        $(page + " .content .panel-slider-bottom-handle").css("margin-top", (contentHeight - bottom_handle_height) + "px");
        $(page + " .content .panel-slider-bottom-handle").css("margin-left", (left_margin_centre) + "px");

        $(page + " .content .profile-content").css("margin-top", (-1) + "px");
        $(page + " .content .profile-content").css("margin-left", (option_width + left_margin_centre) + "px");

        $(page + " .content .profile-content.bottom").css("height", (contentHeight) + "px");
        $(page + " .content .profile-content").css("margin-left", (contentHeight + footer_height) + "px");

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
        html += "<div class=\"profile-option-spacer\"></div>"
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
        var left_handle_width = $(page + " .panel-slider-left-handle").width();
        var footer_height = $(page + ".footer").height();
        var bottom_handle_height = $(page + " .panel-slider-bottom-handle").height();
        var option_count = 0;
        var contentHeight = $(page + " .content").height();

        // If the footer is collapsed, dont have the options take up the space.
        var footer = $(".footer");
        var footer_oh = footer.height() > 0 ? footer.outerHeight(true) : 0;
//        if (app.view.footerCollapsed) {
//            contentHeight -= footer_oh;
//        }

        // Make provision for the spacing for teh foooter
        var optionsContentHeight = contentHeight;
        if (app.view.footerCollapsed) {
            optionsContentHeight = contentHeight - footer_height;
        }

        var option_height = optionsContentHeight / 6;

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
                app.view.destroySliders();
                location.href = "#profile";
                app.view.reloadImageSliders();
            });
            $("* .animal-audio").off();
            $("* .animal-audio").on("click", function(event) {
                location.href = "#audio";
            });
            $("* .animal-map").off();
            $("* .animal-map").on("click", function(event) {
                app.view.destroySliders();
                location.href = "#map";
                app.view.reloadImageSliders();
            });
            $("* .animal-footprints").off();
            $("* .animal-footprints").on("click", function(event) {
                app.view.destroySliders();
                location.href = "#footprints";
                app.view.reloadImageSliders();
            });
            $("* .animal-question").off();
            $("* .animal-question").on("click", function(event) {
                location.href = "#question";
            });
            $("* .animal-donate").off();
            $("* .animal-donate").on("click", function(event) {
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
//        console.log("=====================================");
        var header = $(".header");
        var header_oh = header.height() > 0 ? header.outerHeight(true) : 0;
//        console.log("header height: " + header_oh);

        var footer = $(".footer");
        var footer_oh = footer.height() > 0 ? footer.outerHeight(true) : 0;
//        console.log("footer height: " + footer_oh);

        var content = $(".content");

        var window_h = $(window).height();
//        console.log("window height: " + window_h);
        var content_h = content.height();
        var content_oh = content_h > 0 ? content.outerHeight(true) : 0;
//        console.log("current content h: " + (content_h));
//        console.log("current content oh: " + (content_oh));

        var x_factor = 56;
        // check if in portrait mode
        if (header_oh < 100) {
            x_factor = 20;
        }

        var c_new = window_h - header_oh - footer_oh - content_oh + content_h + x_factor;

        if (app.view.footerCollapsed) {
            c_new += footer_oh;
        }
//        console.log("new content height: " + c_new);
        content.height(c_new);
        $("* .content .profile-content").css("height", (c_new) + "px");
    };
};