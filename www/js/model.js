PayStatus = {
    FREE: 1,
    EARNED: 2,
    PAID: 3
};

function Model() {
    this.data = new Datastore();
    this.data.init();

    var _set_property = "UPDATE SYS_Property SET value = ? WHERE property = ?";

    var _get_property = "SELECT value FROM SYS_Property WHERE property = ?";

    var _get_categories = "SELECT DISTINCT category FROM ANM_Animal ORDER BY category ASC";

    var _get_animals = "SELECT a.animalID, idPointers, randomFacts, name, thumbName, commonNames, score, iconFilePath, category, isFree, isEarned, isPaid FROM ANM_Animal a, ANM_Profile p WHERE a.animalID = p.animalID ORDER BY a.animalID ASC";

    var _add_animal = "INSERT INTO ANM_Animal ("
            + "name, thumbName, commonNames, iconFilePath, category, cautionNotice, isFree, isEarned, isPaid, score) "
            + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    var _get_animal = "SELECT animalID, name, thumbName, commonNames, iconFilePath, cautionNotice, isFree, isEarned, isPaid, score FROM ANM_Animal WHERE animalID = ?";

    var _add_name = "INSERT INTO ANM_Name (\n\
            animalID, name) \n\
            VALUES (?, ?)";
    var _get_names = "SELECT nameID, animalID, name FROM ANM_Name ORDER BY name";

    var _add_profile = "INSERT INTO ANM_Profile (\n\
            animalID, idPointers, randomFacts, confusedWith, activityPeriod, gestation, "
            + "lifespan, diet, predators, habitat, redListStatus, population, "
            + "threats, length, height, weight, soundPath, soundDuration) "
            + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    var _get_profile = "SELECT animalID, profileID, idPointers, randomFacts, confusedWith, activityPeriod, "
            + "gestation, lifespan, diet, predators, habitat, redListStatus, population, "
            + "threats, length, height, weight, soundPath, soundDuration "
            + "FROM ANM_Profile WHERE animalID = ?";

    var _add_image = "INSERT INTO ANM_Image (animalID, imageName, filePath) VALUES (?, ?, ?)";
    var _get_images = "SELECT imageID, imageName, filePath FROM ANM_Image WHERE animalID = ?";

    var _add_audio = "INSERT INTO ANM_Audio (animalID, trackName, duration, filePath) VALUES (?, ?, ?, ?)";
    var _get_audio = "SELECT audioID, trackName, duration, filePath FROM ANM_Audio WHERE animalID = ?";

    var _add_map = "INSERT INTO ANM_Map (animalID, mapName, filePath) VALUES (?, ?, ?)";
    var _get_maps = "SELECT mapID, mapName, filePath FROM ANM_Map WHERE animalID = ?";

    var _add_footprint = "INSERT INTO ANM_Footprint (animalID, footprintName, filePath) VALUES (?, ?, ?)";
    var _get_footprints = "SELECT footprintID, footprintName, filePath FROM ANM_Footprint WHERE animalID = ?";

    this.setProperty = function(property, value, onComplete) {
        this.data.dbQuery(_set_property, [value, property],
                function(results) {
                    if (onComplete) {
                        onComplete();
                    }
                });
    };

    this.getProperty = function(property, onResults) {
        this.data.dbQuery(_get_property, [property],
                function(results) {
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getCategories = function(onResults) {
        this.data.dbQuery(_get_categories, null,
                function(results) {
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getAnimals = function(onResults) {
        this.data.dbQuery(_get_animals, null,
                function(results) {
                    // just make sure we get the animal data...
                    app.animals = jQuery.parseJSON(results).results;
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getAnimal = function(animalID, onResults) {
        this.data.dbQuery(_get_animal, [animalID],
                function(results) {
                    onResults(jQuery.parseJSON(results).results[0]);
                });
    };

    this.getNames = function(onResults) {
        this.data.dbQuery(_get_names, null,
                function(results) {
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getProfile = function(animalID, onResults) {
        this.data.dbQuery(_get_profile, [animalID],
                function(results) {
                    onResults(jQuery.parseJSON(results).results[0]);
                });
    };

    this.getImages = function(animalID, onResults) {
        this.data.dbQuery(_get_images, [animalID],
                function(results) {
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getAudio = function(animalID, onResults) {
        this.data.dbQuery(_get_audio, [animalID],
                function(results) {
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getMaps = function(animalID, onResults) {
        this.data.dbQuery(_get_maps, [animalID],
                function(results) {
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getFootprints = function(animalID, onResults) {
        this.data.dbQuery(_get_footprints, [animalID],
                function(results) {
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.addAnimal = function(name, thumbName, commonNames, iconFilePath, category, cautionNotice, payStatus, score, onCompleted) {
        var isFree = (payStatus === PayStatus.FREE);
        var isEarned = (payStatus === PayStatus.EARNED);
        var isPaid = (payStatus === PayStatus.PAID);

        this.data.dbQuery(_add_animal, [name, thumbName, commonNames, iconFilePath, category, cautionNotice, isFree, isEarned, isPaid, score],
                function(results) {
                    if (onCompleted) {
                        onCompleted(thumbName, jQuery.parseJSON(results).insertId);
                    }
                });
    };

    this.addName = function(animalID, name, onCompleted) {
        this.data.dbQuery(_add_name, [animalID, name],
                function(results) {
                    if (onCompleted) {
                        onCompleted();
                    }
                });
    };

    this.addProfile = function(animalID, idPointers, randomFacts, confusedWith, activityPeriod,
            gestation, lifespan, diet, predators, habitat, redListStatus, population, threats,
            length, height, weight, soundPath, soundDuration, onCompleted) {
        this.data.dbQuery(_add_profile, [animalID, idPointers, randomFacts, confusedWith, activityPeriod,
                gestation, lifespan, diet, predators, habitat, redListStatus, population, threats,
                length, height, weight, soundPath, soundDuration],
                function(results) {
                    if (onCompleted) {
                        onCompleted();
                    }
                });
    };

    this.addImage = function(animalID, imageName, filePath, onCompleted) {
        this.data.dbQuery(_add_image, [animalID, imageName, filePath],
                function(results) {
                    if (onCompleted) {
                        onCompleted();
                    }
                });
    };

    this.addAudio = function(animalID, trackName, duration, filePath, onCompleted) {
        this.data.dbQuery(_add_audio, [animalID, trackName, duration, filePath],
                function(results) {
                    if (onCompleted) {
                        onCompleted();
                    }
                });
    };

    this.addMap = function(animalID, mapName, filePath, onCompleted) {
        this.data.dbQuery(_add_map, [animalID, mapName, filePath],
                function(results) {
                    if (onCompleted) {
                        onCompleted();
                    }
                });
    };

    this.addFootprint = function(animalID, footprintName, filePath, onCompleted) {
        this.data.dbQuery(_add_footprint, [animalID, footprintName, filePath],
                function(results) {
                    if (onCompleted) {
                        onCompleted();
                    }
                });
    };

    this.load_data = function(onCompleted) {


        this.data.checkDatabaseExists(this,
                function(model) {
                    console.log('Existing database, NOT inserting data');
                    if (onCompleted) {
                        onCompleted();
                    }
                }, function(model) {
                    console.log('New database, inserting data');
                    load_animal_data(model, onCompleted);
                });
//        load_animal_data(this, onCompleted);
    };
}
