function AudioTrack(src, duration, name) {
    this.trackName = name;
    this.trackPath = src;
    this.seconds = duration;
}

function View() {
    model = new Model();
    console.log("calling model.load_data()...");
    model.load_data(function() {
        console.log("model.load_data() completed...reaeding animals...");
        model.getAnimals(function(animals) {
            // Here we dont really know if it has completed loading...
            console.log("Completed loading, found " + animals.length + " animals...");
            app.animals = animals;
        });
    });

    this.sliderDisplayDelay = 500;
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
    this.footerCollapsed = false;
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
                    app.view.modal("animalUnlockedMessage");
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

    this.hideModal = function() {
        $.pgwModal('close');
    }

    this.reloadImageSlider = function(slider, element) {
        try {
            return element.pgwSlider({
                        displayList : false,
                        transitionEffect: 'sliding',
                        displayControls : true,
                        autoSlide: false
                    });
        } catch (err) {}
    };

    this.destroySlider = function(slider) {
        if (slider) {
            try {
                slider.destroy(false);
            } catch (err) {}
        }
        return slider;
    };

    this.destroySliders = function() {

        app.view.profileSlider = app.view.destroySlider(app.view.profileSlider);
        app.view.mapSlider = app.view.destroySlider(app.view.mapSlider);
        app.view.footprintSlider = app.view.destroySlider(app.view.footprintSlider);

    };

    this.reloadImageSliders = function() {
        $.blockUI({ message: $("#loader"), css: { backgroundColor: '#0000', color: '#000', border: 'none'} });
        window.setTimeout(function() {
            app.view.profileSlider = app.view.reloadImageSlider(app.view.profileSlider, $('#image-slider-profile'));
            app.view.mapSlider = app.view.reloadImageSlider(app.view.mapSlider, $('#image-slider-map'));
            app.view.footprintSlider = app.view.reloadImageSlider(app.view.footprintSlider, $('#image-slider-footprints'));
            $.unblockUI();
        }, app.view.sliderDisplayDelay);
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
            }, function() {
                if (app.view.currentAudioTrackIndex < (app.view.audioTrack.length - 1)) {
                    app.view.playNextAudioTrack();
                } else {
//                    console.log("Last tracked reached...");
                }
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

    this.queueIntroTrack = function() {
        app.view.audioTrack.push(new AudioTrack("resources/intro.mp3", 134, "Welcome to the African Wilderness"));
        app.view.currentAudioTrackIndex = app.view.audioTrack.length - 1;
    };

    this.playIntroTrack = function() {
        app.view.playAudioTrack("resources/intro.mp3", 134, "Welcome to the African Wilderness");
        location.href = "#menu";
    };

    this.playSafetyTrack = function() {
        app.view.playAudioTrack("resources/safety.mp3", 275, "Safety Advice");
    };

    this.animal_loadProfile = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            model.getImages(animal.animalID, function(images) {
                $("#profile .header .title").html(animal.thumbName);
                $("#audio .header .title").html(animal.thumbName);
                $("#map .header .title").html(animal.thumbName);
                $("#footprints .header .title").html(animal.thumbName);
                $("#question .header .title").html(animal.thumbName);
                $("#donate .header .title").html(animal.thumbName);

                var imagesHtml = "";
                for (var i = 0; i < images.length; i++) {
                    imagesHtml += ""
                            + "         <li> "
                            + "             <img src=\"" + images[i].filePath + "\"/>"
                            + "         </li>";
                }
                $("#image-slider-profile").html(imagesHtml);

                if (profile.soundPath && profile.soundPath.trim() != '') {
                    $(".listen-to").show();

                    $(".listen-to").off();
                    $(".listen-to").on("click",
                        function(event) {
                            app.view.playAudioTrack(profile.soundPath, profile.soundDuration, ('Listen to a ' + animal.thumbName));
                        });
                } else {
                    $(".listen-to").hide();
                }
                $(".animal-name").html("Listen to " + (startsWithVowel(animal.thumbName) ? "an" : "a") + " " + animal.thumbName);
                $(".full-names").html(animal.name);
                $(".common-names").html(animal.commonNames);
                $(".confused-with").html(profile.confusedWith);
                $(".activity-period").html(profile.activityPeriod);
                $(".predators").html(profile.predators);
                $(".red-list-status").html(profile.redListStatus);
                $(".population").html(profile.population);
                $(".threats").html(profile.threats);

                if (animal.cautionNotice && animal.cautionNotice.trim() != '') {
                    $(".caution").show();
                    $(".cautionNotice").html(animal.cautionNotice);
                } else {
                    $(".caution").hide();
                }

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

    this.animal_loadAudio = function(animal, onComplete) {
        model.getAudio(animal.animalID, function(tracks) {
            var audioHtml = "";

            for (var i = 0; i < tracks.length; i++) {
                audioHtml += "<div trackIndex=\"" + i + "\" duration=\"" + tracks[i].duration + "\" path=\"" + tracks[i].filePath + "\" id=\"track_" + i + "\" class=\"audio-track\">" + tracks[i].trackName + "</div>";
            }

            $("#audio .profile-content").html(audioHtml);

            $('*[id^="track_"]').off();
            $('*[id^="track_"]').on("click",
                function(event) {
                    var elementID = event.currentTarget.id;
                    var index = parseInt($("#" + elementID).attr("trackIndex"));
                    var src = $("#" + elementID).attr("path");
                    var dur = $("#" + elementID).attr("duration");
                    var trackName = $("#" + elementID).html();

                    var previousTrackLength = app.view.audioTrack.length;
                    for (var i = 0; i < tracks.length; i++) {
                        app.view.audioTrack.push(new AudioTrack(tracks[i].filePath, tracks[i].duration, tracks[i].trackName));
                    }
                    app.view.currentAudioTrackIndex = previousTrackLength + index;

                    app.view.playAudioTrack(src, dur, trackName, true);
                });
        });

        if (onComplete) {
            onComplete();
        }
    };

    this.animal_loadMap = function(animal, onComplete) {
        model.getProfile(animal.animalID, function(profile) {
            model.getMaps(animal.animalID, function(maps) {

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
                var isPaid = animals[x].isPaid;
                // console.log("Displaying thumbnail image: [" + animals[x].iconFilePath + "]");
                //
//                var filePrefix = 'content://' + app.contentProviderName + '/';
//                var requestFileName = animals[x].iconFilePath.substring(filePrefix.length, animals[x].iconFilePath.length);
//                XAPKReader.get(requestFileName,
//                    function(url) { // success
//                        console.log('Retrieved file from obb file...URL: [' + url + ']');
//                    }, function(error) {
//                        console.log('Error retrieving file from obb file...error: [' + error + ']');
//                    }, 'image/jpeg');

                animalGridHtml += "<div id=\"" + idPrefix + "animalID_" + animals[x].animalID + "\" "
                        + "class=\"" + idPrefix + "animal-block paid-mode-" + isPaid + "\" "
                        + "category=\"" + animals[x].category + "\" "
                        + "animalSize=\"" + animals[x].animalID + "\">";

                animalGridHtml += "<img id=\"" + idPrefix + "animal-icon-" + animals[x].animalID + "\" class=\"" + idPrefix + "animal-icon\" src=\"" + animals[x].iconFilePath + "\"/>";
                if (idPrefix.toLowerCase().indexOf('game') > -1) {
                    animalGridHtml += "<div class=\"ribbon-wrapper\"><div class=\"ribbon\">" + animals[x].score + "</div></div>";
                }
                animalGridHtml += "<div class=\"animal-text\">" + animals[x].thumbName + "</div>";
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
                model.getNames(function(animalNames) {
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
                    for (var x = 0; x < animalNames.length; x++) {
                        sortedAnimals[x] = animalNames[x];
                    }

                    var tempAnimal = null;

                    var allSorted = false;
                    while (!allSorted) {
                        allSorted = true;
                        for (var x = 0; x < sortedAnimals.length-1; x++) {
                            if (sortedAnimals[x].name > sortedAnimals[x+1].name) {
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
                        var firstLetter = sortedAnimals[x].name.charAt(0);
                        if (firstLetter !== lastLetter) {
                            lettersHtml += "<hr/><div id=\"" + firstLetter + "\" class=\"letter-heading\">"
                                    + "<b>" + firstLetter + "</b></div>";
                            lastLetter = firstLetter;
                        }
                        lettersHtml += "<div id=\"" + sortedAnimals[x].animalID + "\" class=\"letter-option\">"
                                + sortedAnimals[x].name + "</div>";
                    }
                    $("#search-by-letter").html(lettersHtml);

                    // Animals -----------------------------------------------------
                    var animalGridHtml = "";
                    for (var x = 0; x < animals.length; x++) {
                        var freeApp = (app.mode === app.MODE_FREE);
                        var unlockedApp = (app.mode === app.MODE_FREE_UNLOCKED);
                        var earnedAnimal = (animals[x].isEarned === "true");
                        var paidAnimal = (animals[x].isPaid === "true");
                        var nonFreeAnimal = (earnedAnimal || paidAnimal);
                        var disableAnimal = ((freeApp && nonFreeAnimal) || (unlockedApp && paidAnimal));

                        animalGridHtml += "<div id=\"animalID_" + animals[x].animalID + "\" "
                                + "class=\"animal-block " + (disableAnimal ? " icon-selected" : "") + "\" "
                                + "category=\"" + animals[x].category + "\" "
                                + "animalSize=\"" + animals[x].animalID + "\">";
                        animalGridHtml += "<img class=\"animal-icon\" src=\"" + animals[x].iconFilePath + "\"/>";
                        animalGridHtml += "<div class=\"animal-text\">" + animals[x].thumbName + "</div>";

                        if (app.mode == app.MODE_FREE && earnedAnimal) {
                            animalGridHtml += "<div class=\"ribbon-wrapper\"><div class=\"ribbon\">Unlock</div></div>";
                        }

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
                            $("#search-by-category").toggle();
                            var selectedCategory = event.target.id;

                            $(".animal-block").each(function() {
                                var animalCategories = $(this).attr("category");

                                if (selectedCategory === ("all")) {
                                    $(this).show();
                                } else if (animalCategories.indexOf(selectedCategory) !== -1) {
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
                            $("#search-by-letter").toggle();
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
                                                        ga_storage._trackPageview('/index.html#profile?animal=' + animal.thumbName);
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
                ga_storage._trackPageview('/index.html#profile?animal=' + animal.thumbName);
                location.href = "#profile";
                app.view.reloadImageSliders();
            });
            $("* .animal-audio").off();
            $("* .animal-audio").on("click", function(event) {
                ga_storage._trackPageview('/index.html#audio?animal=' + animal.thumbName);
                location.href = "#audio";
            });
            $("* .animal-map").off();
            $("* .animal-map").on("click", function(event) {
                app.view.destroySliders();
                ga_storage._trackPageview('/index.html#map?animal=' + animal.thumbName);
                location.href = "#map";
                app.view.reloadImageSliders();
            });
            $("* .animal-footprints").off();
            $("* .animal-footprints").on("click", function(event) {
                app.view.destroySliders();
                ga_storage._trackPageview('/index.html#footprints?animal=' + animal.thumbName);
                location.href = "#footprints";
                app.view.reloadImageSliders();
            });
            $("* .animal-question").off();
            $("* .animal-question").on("click", function(event) {
                ga_storage._trackPageview('/index.html#question?animal=' + animal.thumbName);
                location.href = "#question";
            });
            $("* .animal-donate").off();
            $("* .animal-donate").on("click", function(event) {
                ga_storage._trackPageview('/index.html#donate?animal=' + animal.thumbName);
                location.href = "#donate";
            });
        });
    };

    this.initializeAboutLinks = function() {
        $("* .about-founder").off();
        $("* .about-founder").on("click", function(event) {
            app.view.about_alignOptions("founder");
            ga_storage._trackPageview('/index.html#founder');
            location.href = "#founder";
        });
        $("* .about-partners").off();
        $("* .about-partners").on("click", function(event) {
            app.view.about_alignOptions("partners");
            ga_storage._trackPageview('/index.html#partners');
            location.href = "#partners";
        });
        $("* .about-board").off();
        $("* .about-board").on("click", function(event) {
            app.view.about_alignOptions("board");
            ga_storage._trackPageview('/index.html#board');
            location.href = "#board";
        });
        $("* .about-sounds").off();
        $("* .about-sounds").on("click", function(event) {
            app.view.about_alignOptions("sounds");
            ga_storage._trackPageview('/index.html#sounds');
            location.href = "#sounds";
        });
        $("* .about-photographers").off();
        $("* .about-photographers").on("click", function(event) {
            app.view.about_alignOptions("photographers");
            ga_storage._trackPageview('/index.html#photographers');
            location.href = "#photographers";
        });
        $("* .about-sources").off();
        $("* .about-sources").on("click", function(event) {
            app.view.about_alignOptions("sources");
            ga_storage._trackPageview('/index.html#sources');
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
        var portraitMode = false;
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
        var animal_grid_spacer = 0;
        // check if in portrait mode
        if (header_oh < 100) {
            x_factor = 20;
            animal_grid_spacer = 10;
            portraitMode = true;
        }

        var c_new = window_h - header_oh - footer_oh - content_oh + content_h + x_factor;

        var animal_grid_collapsing = 0;

        var menuFooterAdjustment = 45;
        var gameFooterAdjustment = 98;
        var donateFooterAdjustment = footer_oh;

        if (app.view.footerCollapsed) {
            c_new += footer_oh;
            menuFooterAdjustment = (menuFooterAdjustment + (portraitMode ? -24 : 0)) * -1;
            gameFooterAdjustment -= footer_oh;
            donateFooterAdjustment -= footer_oh;
        } else {
            animal_grid_collapsing = footer_oh;
        }
//        console.log("new content height: " + c_new);
        content.height(c_new);
        $("* .content .profile-content").css("height", (c_new) + "px");

        var animalsHeight = $("#animals .content").height();
        var searchBySizeHeight = $("#search-by-size").height();
        var sliderBottomHandleHeight = $(".panel-slider-bottom-handle").height() + 10;

        $(".animal-grid").css("height",
            (animalsHeight + footer_oh - searchBySizeHeight - searchBySizeHeight
            - sliderBottomHandleHeight - $(".category-label").height() - 60 - animal_grid_spacer) + "px");

        $(".game-animal-grid").css("height",
            (animalsHeight + footer_oh - searchBySizeHeight
            - sliderBottomHandleHeight - $(".category-label").height() - 60 - animal_grid_spacer) + "px");

        $(".game-winner-scroller").css("height",
            (animalsHeight + footer_oh - searchBySizeHeight
            - sliderBottomHandleHeight + 20) + "px");

        $(".scrollable").css("height",
            (animalsHeight + footer_oh - searchBySizeHeight
            - sliderBottomHandleHeight + 20) + "px");

        $(".game-spot-grid").css("height",
            (animalsHeight + footer_oh - searchBySizeHeight
            - sliderBottomHandleHeight - $(".category-label").height() - 60 - animal_grid_spacer) + "px");

        $("#search-by-size").css("bottom", ((app.view.footerCollapsed ? 0 : 0) + 20 + animal_grid_collapsing) + "px");

        // determine current page so that we only applu the below changes to the specific pages, and not the profile or about-us pages.
        // those pages look messed up when they get applied...
        var currentPage = window.location.href;
        if (currentPage.indexOf("#") > -1) {
            currentPage = currentPage.substring(currentPage.indexOf('#')+1);
        }
        if ("menu" === currentPage) {
            $("#menu .content").css("height", ($("#menu .content").height() + menuFooterAdjustment) + "px");
        }
        if ("game" === currentPage) {
            $("#game .content").css("height", ($("#game .content").height() + gameFooterAdjustment) + "px");
        }
        if ("menu-donate" === currentPage) {
            $("#menu-donate .content").css("height", ($("#menu-donate .content").height() + donateFooterAdjustment) + "px");
        }
    };
};
