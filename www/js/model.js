function Model() {
    this.data = new Datastore();
    this.data.init();

    var _get_animals = "SELECT animalID, name FROM ANM_Animal ORDER BY name ASC";
    var _get_animal = "SELECT name, cautionNotice, isFree, isEarned, isPaid FROM ANM_Animal WHERE animalID = ?";
    var _get_profile = "SELECT profileID, idPointers, lengthMaleMin, lengthMaleMax, lengthFemaleMin, lengthFemaleMax, weightMaleMin, weightMaleMax, weightFemaleMin, weightFemaleMax FROM ANM_Profile WHERE animalID = ?";
    var _get_images = "SELECT imageID, imageName, filePath FROM ANM_Image WHERE animalID = ?";
    var _get_audio = "SELECT audioID, trackName, filePath FROM ANM_Audio WHERE animalID = ?";
    var _get_maps = "SELECT mapID, mapName, filePath FROM ANM_Map WHERE animalID = ?";
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
}

function Animal() {
    this.animalID;
    this.name;
    this.cautionNotice;
    this.isFree;
    this.isEarned;
    this.isPaid;
};

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
};

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