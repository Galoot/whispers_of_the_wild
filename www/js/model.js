function Model() {
    this.data = new Datastore();
    this.data.init();

    var _get_animals = "SELECT animalID, name FROM ANM_Animal ORDER BY name ASC";

    var _add_animal = "INSERT INTO ANM_Animal (\n\
            name, cautionNotice, isFree, isEarned, isPaid) \n\
            VALUES (?, ?, ?, ?, ?)";
    var _get_animal = "SELECT animalID, name, cautionNotice, isFree, isEarned, isPaid FROM ANM_Animal WHERE animalID = ?";

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

    this.addAnimal = function(name, cautionNotice, payStatus, onCompleted) {
        var isFree = (payStatus === Model.FREE);
        var isEarned = (payStatus === Model.EARNED);
        var isPaid = (payStatus === Model.PAID);
        this.data.dbQuery(_add_animal, [name, cautionNotice, isFree, isEarned, isPaid],
                function(results) {
                    if (onCompleted) {
                        onCompleted();
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

    this.load_data = function() {
        var mdl = this;
        var animal_counter = 0;

        // Baboon
        mdl.addAnimal('Baboon', 'They bite!', PayStatus.FREE, function() {
            animal_counter++;
            mdl.addProfile(animal_counter, 'Monkey like...', 1.2, 1.6, 1, 1.2, 25, 45, 12, 20);
        });

        // Lion
        mdl.addAnimal('Lion', 'They bite even more!', PayStatus.PAID, function() {
            animal_counter++;
            mdl.addProfile(animal_counter, 'A little bit larger than a house cat...', 1.2, 1.6, 1, 1.2, 25, 45, 12, 20);
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