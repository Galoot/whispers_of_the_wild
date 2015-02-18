load_animal_data = function(model, onCompleted) {
    var mdl = model;
    var animal_counter = 0;
    var resourcesPrefix = 'resources/animals/';
    var animalName;

    // should indicate the total number of animals loaded here
    var totalAnimals = 1;

    // Baboon ==================================================================
    animalName = 'Baboon'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Baboon (Papio cynocephalus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/icon.jpg', // Icon
            'Primate', // Category
            '<b>Baboon Safety Advice</b>'
            + '<br/><br/>Baboons are very intelligent and have the potential to become dangerous when they become too used to humans. They are particularly troublesome around camps.'
            + '<br/><br/><b>Do not feed the baboons:</b> baboons become problem animals when people feed them. They start to expect food to be given, and when it is not, they will take it forcefully.'
            + '<br/><br/><b>Don’t leave windows/doors/tents open:</b> remember to close your window, doors and tents when you leave. '
            + '<br/><br/><b>Do not leave goods unattended:</b> never leave goods, especially food lying around. Put away your rubbish in baboon-proof bins. '
            + '<br/><br/><b>Don’t fight them:</b> if a baboon tries to grab something from you, let them have it. If you try fight them, they can become aggressive.'
            + '<br/><br/><b>Baboon body language:</b> a baboon is showing aggression if it opens its eyes wide, bares its teeth, stands up imposingly or vocalises. '
            + '<br/><br/><b>Your body language:</b> If a baboon acts aggressively, do not cower or run away. Stand tall and confident. Shout and make loud noises, and even pretend to throw something at them if they start to get too close.'
            + '<br/><br/><b>Use men as protection:</b> baboons are sexist. They recognise women, and will pick on them. Use large males to protect a group. '
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animal_counter, 'Baboon');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Monkey-like appearance; dog-like, black face; coarse dark-grey to olive brown fur; long tail which points up from the rump then bends downward, males much larger than females, with large canine and mane across shoulders.',
                // Confused With
                'Vervet monkey – baboons are much larger and darker in colour ',
                'Duirnal', // Activity Period
                '±6 months', // Gestation Period
                '±20-30 years', // Lifespan
                // Diet
                'omnivorous, highly varied – fruits, seeds, grass, invertebrates, birds, young mammals, shellfish',
                'Lion, hyaena, leopard, crocodile, large eagles', // Predators
                'habitat generalists, grasslands, savannahs, woodlands, semi-desert – require tall trees or cliff faces to sleep on.', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threat, occasionally killed as vermin, or for traditional medicine.', // Threats
                'Males: 1.2 - 1.6m; Females: 1 - 1.2m', // Length
                'Males: 70-75cm; females: 55-65cm', // Height
                'Males: 25 – 45kg; Females: 12 – 20kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 The troop centre of baboon society',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/01 The troop centre of baboon society.mp3');
        mdl.addAudio(animal_counter, '02 Grooming and communication',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/02 Grooming and communication 1.mp3');
        mdl.addAudio(animal_counter, '03 Baboon godfathers',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/03 Baboon godfathers.mp3');
        mdl.addAudio(animal_counter, '04 Baboon males - defence and dominance',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/04 Baboon males - defence and dominance.mp3');
        mdl.addAudio(animal_counter, '05 Colour communication',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/05 Colour communication.mp3');
        mdl.addAudio(animal_counter, '06 Baby baboons the centre of attention',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/06 Baby baboons the centre of attention.mp3');
        mdl.addAudio(animal_counter, '07 Education and innovation on  the troop',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/07 Education and innovation on  the troop.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    if (animal_counter === totalAnimals) {
        if (onCompleted) {
            onCompleted();
        }
    }
};

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