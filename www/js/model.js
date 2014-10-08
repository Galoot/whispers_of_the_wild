function Model() {
    this.data = new Datastore();
    this.data.init();

    var _get_categories = "SELECT DISTINCT category FROM ANM_Animal ORDER BY category ASC";

    var _get_animals = "SELECT a.animalID, name, iconFilePath, category, weightMaleMin, weightMaleMax, weightFemaleMin, weightFemaleMax FROM ANM_Animal a, ANM_Profile p WHERE a.animalID = p.animalID ORDER BY name ASC";

    var _add_animal = "INSERT INTO ANM_Animal (\n\
            name, iconFilePath, category, cautionNotice, isFree, isEarned, isPaid) \n\
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    var _get_animal = "SELECT animalID, name, iconFilePath, cautionNotice, isFree, isEarned, isPaid FROM ANM_Animal WHERE animalID = ?";

    var _add_profile = "INSERT INTO ANM_Profile (\n\
            animalID, idPointers, lengthMaleMin, lengthMaleMax, lengthFemaleMin, \n\
            lengthFemaleMax, weightMaleMin, weightMaleMax, weightFemaleMin, weightFemaleMax) \n\
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    var _get_profile = "SELECT profileID, idPointers, lengthMaleMin, lengthMaleMax, lengthFemaleMin, lengthFemaleMax, weightMaleMin, weightMaleMax, weightFemaleMin, weightFemaleMax FROM ANM_Profile WHERE animalID = ?";

    var _add_image = "INSERT INTO ANM_Image (animalID, imageName, filePath) VALUES (?, ?, ?)";
    var _get_images = "SELECT imageID, imageName, filePath FROM ANM_Image WHERE animalID = ?";

    var _add_audio = "INSERT INTO ANM_Audio (animalID, trackName, filePath) VALUES (?, ?, ?)";
    var _get_audio = "SELECT audioID, trackName, filePath FROM ANM_Audio WHERE animalID = ?";

    var _add_map = "INSERT INTO ANM_Map (animalID, mapName, filePath) VALUES (?, ?, ?)";
    var _get_maps = "SELECT mapID, mapName, filePath FROM ANM_Map WHERE animalID = ?";

    var _add_footprint = "INSERT INTO ANM_Footprint (animalID, footprintName, filePath) VALUES (?, ?, ?)";
    var _get_footprints = "SELECT footprintID, footprintName, filePath FROM ANM_Footprint WHERE animalID = ?";

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

    this.addAnimal = function(name, iconFilePath, category, cautionNotice, payStatus, onCompleted) {
        var isFree = (payStatus === Model.FREE);
        var isEarned = (payStatus === Model.EARNED);
        var isPaid = (payStatus === Model.PAID);
        this.data.dbQuery(_add_animal, [name, iconFilePath, category, cautionNotice, isFree, isEarned, isPaid],
                function(results) {
                    if (onCompleted) {
                        onCompleted(name);
                    }
                });
    };

    this.addProfile = function(animalID, idPointers, lengthMaleMin,
            lengthMaleMax, lengthFemaleMin, lengthFemaleMax, weightMaleMin,
            weightMaleMax, weightFemaleMin, weightFemaleMax, onCompleted) {
        this.data.dbQuery(_add_profile, [animalID, idPointers, lengthMaleMin,
                lengthMaleMax, lengthFemaleMin, lengthFemaleMax, weightMaleMin,
                weightMaleMax, weightFemaleMin, weightFemaleMax],
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

    this.load_data = function() {
        var mdl = this;
        var animal_counter = 0;
        var imagePrefix = 'resources/images/animals/';
        var animalName;

        // Baboon
        animalName = 'Baboon';
        mdl.addAnimal(animalName, imagePrefix + animalName.toLowerCase()
                + '/icon.jpg', 'Primate', 'They bite!', PayStatus.FREE, function(name) {
            animal_counter++;
            mdl.addProfile(animal_counter, 'Monkey like...', 2.2, 2.6, 2, 2.2, 35, 55, 22, 30);
            mdl.addImage(animal_counter, 'Image 1', imagePrefix + name.toLowerCase() + '/image1.jpg');
            mdl.addImage(animal_counter, 'Image 2', imagePrefix + name.toLowerCase() + '/image2.jpg');
            mdl.addImage(animal_counter, 'Image 3', imagePrefix + name.toLowerCase() + '/image3.jpg');
        });

        // Bat-eared-fox
        animalName = 'Bat-Eared-Fox';
        mdl.addAnimal(animalName, imagePrefix + animalName.toLowerCase()
                + '/icon.jpg', 'Small Predator', 'They bite less than lion!', PayStatus.FREE, function(name) {
            animal_counter++;
            mdl.addProfile(animal_counter, 'Smaller than lion like...', 1.2, 1.6, 1, 1.2, 25, 45, 12, 20);
            mdl.addImage(animal_counter, 'Image 1', imagePrefix + name.toLowerCase() + '/image1.jpg');
            mdl.addImage(animal_counter, 'Image 2', imagePrefix + name.toLowerCase() + '/image2.jpg');
            mdl.addImage(animal_counter, 'Image 3', imagePrefix + name.toLowerCase() + '/image3.jpg');
        });

        // Lion
        animalName = 'Lion';
        mdl.addAnimal(animalName, imagePrefix + animalName.toLowerCase()
                + '/icon.jpg', 'Large Predator', 'They bite even more!', PayStatus.PAID, function(name) {
            animal_counter++;
            mdl.addProfile(animal_counter, 'A little bit larger than a house cat...', 3.2, 3.6, 3, 3.2, 45, 65, 32, 40);
            mdl.addImage(animal_counter, 'Image 1', imagePrefix + name.toLowerCase() + '/image1.jpg');
            mdl.addImage(animal_counter, 'Image 2', imagePrefix + name.toLowerCase() + '/image2.jpg');
            mdl.addImage(animal_counter, 'Image 3', imagePrefix + name.toLowerCase() + '/image3.jpg');
        });
    };
}

function PayStatus() {
    this.FREE = 1;
    this.EARNED = 2;
    this.PAID = 3;
}

function Animal() {
    this.animalID;
    this.name;
    this.cautionNotice;
    this.isFree;
    this.isEarned;
    this.isPaid;
}

function Profile() {
    this.profileID;
    this.animalID;
    this.idPointers;
    this.lengthMaleMin;
    this.lengthMaleMax;
    this.lengthFemaleMin;
    this.lengthFemaleMax;
    this.weightMaleMin;
    this.weightMaleMax;
    this.weightFemaleMin;
    this.weightFemaleMax;
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