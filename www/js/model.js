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

    var _get_animals = "SELECT a.animalID, idPointers, name, thumbName, score, iconFilePath, category, weightMin, weightMax FROM ANM_Animal a, ANM_Profile p WHERE a.animalID = p.animalID ORDER BY name ASC";

    var _add_animal = "INSERT INTO ANM_Animal ("
            + "name, thumbName, iconFilePath, category, cautionNotice, isFree, isEarned, isPaid, score) "
            + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    var _get_animal = "SELECT animalID, name, thumbName, iconFilePath, cautionNotice, isFree, isEarned, isPaid, score FROM ANM_Animal WHERE animalID = ?";

    var _add_name = "INSERT INTO ANM_Name (\n\
            animalID, name) \n\
            VALUES (?, ?)";
    var _get_names = "SELECT nameID, animalID, name FROM ANM_Name WHERE animalID = ?";

    var _add_profile = "INSERT INTO ANM_Profile (\n\
            animalID, idPointers, confusedWith, activityPeriod, gestation, "
            + "lifespan, diet, predators, habitat, redListStatus, population, "
            + "threats, lengthMin, lengthMax, heightMin, heightMax, weightMin, weightMax) "
            + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    var _get_profile = "SELECT profileID, idPointers, confusedWith, activityPeriod, "
            + "gestation, lifespan, diet, predators, habitat, redListStatus, population, "
            + "threats, lengthMin, lengthMax, heightMin, heightMax, weightMin, weightMax "
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
                    onResults(jQuery.parseJSON(results).results);
                });
    };

    this.getAnimal = function(animalID, onResults) {
        this.data.dbQuery(_get_animal, [animalID],
                function(results) {
                    onResults(jQuery.parseJSON(results).results[0]);
                });
    };

    this.getNames = function(animalID, onResults) {
        this.data.dbQuery(_get_names, [animalID],
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

    this.addAnimal = function(name, thumbName, iconFilePath, category, cautionNotice, payStatus, score, onCompleted) {
        var isFree = (payStatus === PayStatus.FREE);
        var isEarned = (payStatus === PayStatus.EARNED);
        var isPaid = (payStatus === PayStatus.PAID);
        this.data.dbQuery(_add_animal, [name, thumbName, iconFilePath, category, cautionNotice, isFree, isEarned, isPaid, score],
                function(results) {
                    if (onCompleted) {
                        onCompleted(name);
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

    this.addProfile = function(animalID, idPointers, confusedWith, activityPeriod,
            gestation, lifespan, diet, predators, habitat, redListStatus, population, threats,
            lengthMin, lengthMax, heightMin, heightMax, weightMin, weightMax, onCompleted) {
        this.data.dbQuery(_add_profile, [animalID, idPointers, confusedWith, activityPeriod,
                gestation, lifespan, diet, predators, habitat, redListStatus, population, threats,
                lengthMin, lengthMax, heightMin, heightMax, weightMin, weightMax],
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
        var mdl = this;
        var animal_counter = 0;
        var resourcesPrefix = 'resources/animals/';
        var animalName;

        // should indicate the total number of animals loaded here
        var totalAnimals = 1;

        // Baboon
        animalName = 'Baboon'; // Animal Name & Folder name under 'animals'
        mdl.addAnimal(animalName,
                'Baboon', // Thumbnail Name
                resourcesPrefix + animalName.toLowerCase() + '/Adult-male-southern-chacma-baboon-portrait.jpg', // Icon
                'Primate', // Category
                'They bite!', // Safety Advise
                PayStatus.FREE, // Animal Status
                10, // Game Score
                function(name) {
            animal_counter++;

            // Names
            mdl.addName(animal_counter, 'Gorilla');
            mdl.addName(animal_counter, 'Ape');
            mdl.addName(animal_counter, 'Chimapzee');

            mdl.addProfile(animal_counter,
                    'Monkey-like appearance; dog-like, black face; coarse dark-grey to olive brown fur; long tail which points up from the rump then bends downward.', // Identification Pointer
                    'Humans', // Confused With
                    'Nocturnal', // Activity Period
                    '6 months', // Gestation Period
                    '20 – 30 years', // Lifespan
                    'omnivorous, highly varied – fruits, seeds, grass, invertebrates, birds, young mammals, shellfish', // Diet
                    'Larger baboons eat smaller baboons', // Predators
                    'Trees, Forests', // Habitat
                    'Least Concern', // Red List Status
                    'Unknown', // Population
                    'Hungry humans', // Threats
                    1.2, 1.6, // Length Min & Max
                    1, 1.2, // Height Min & Max
                    25, 45 // Weight Min & Max
                    );
            mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
            mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
            mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
            mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');

            mdl.addAudio(animal_counter, '01 The troop centre of baboon society',
                    100, resourcesPrefix + name.toLowerCase() + '/01 The troop centre of baboon society.mp3');
            mdl.addAudio(animal_counter, '02 Grooming and communication',
                    100, resourcesPrefix + name.toLowerCase() + '/02 Grooming and communication 1.mp3');
            mdl.addAudio(animal_counter, '03 Baboon godfathers',
                    100, resourcesPrefix + name.toLowerCase() + '/03 Baboon godfathers.mp3');
            mdl.addAudio(animal_counter, '04 Baboon males - defence and dominance',
                    100, resourcesPrefix + name.toLowerCase() + '/04 Baboon males - defence and dominance.mp3');
            mdl.addAudio(animal_counter, '05 Colour communication',
                    100, resourcesPrefix + name.toLowerCase() + '/05 Colour communication.mp3');
            mdl.addAudio(animal_counter, '06 Baby baboons the centre of attention',
                    100, resourcesPrefix + name.toLowerCase() + '/06 Baby baboons the centre of attention.mp3');
            mdl.addAudio(animal_counter, '07 Education and innovation on  the troop',
                    100, resourcesPrefix + name.toLowerCase() + '/07 Education and innovation on  the troop.mp3');

            mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');

            mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
            mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');

            if (animal_counter === totalAnimals) {
                if (onCompleted) {
                    onCompleted();
                }
            }
        });
        console.log('Animals loaded...');
    };
}

function Animal() {
    this.animalID;
    this.name;
    this.thumbName;
    this.cautionNotice;
    this.isFree;
    this.isEarned;
    this.isPaid;
}

function Name() {
    this.animalID;
    this.name;
}

function Profile() {
    this.profileID;
    this.animalID;
    this.idPointers;

    this.lengthMin;
    this.lengthMax;
    this.heightMin;
    this.heightMax;
    this.weightMin;
    this.weightMax;
}

function Audio() {
    this.audioID;
    this.animalID;
    this.trackName;
    this.filePath;
}

function Map() {
    this.mapID;
    this.animalID;
    this.mapName;
    this.filePath;
}

function Footprint() {
    this.footprintID;
    this.animalID;
    this.footprintName;
    this.filePath;
}
