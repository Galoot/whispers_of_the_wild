load_animal_data = function(model, onCompleted) {
    var mdl = model;
    var animal_counter = 0;
    var resourcesPrefix = 'resources/animals/';
    var animalName;

    // should indicate the total number of animals loaded here
    var totalAnimals = 11;
    
    // Aardvark ==================================================================
    animalName = 'Aardvark'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Aardvark (Orycteropus afer)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Aardvark, ant bear', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
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
        mdl.addName(animal_counter, 'Aardvark');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Pig-like snout; long, tubular ears; arched back; thick, kangaroo-like tail, yellowish-grey to grey coat. Sexes appear similar.',
                // Confused With
                'Unmistakeable',
                'Duirnal', // Activity Period
                '±7 months', // Gestation Period
                '±20 years', // Lifespan
                // Diet
                'Ants and termites',
                'Lion, Leopard, Hyaena, Pythons', // Predators
                'Able to tolerate a range of habitats. They occur from semi-desert to rainforest, and are only absent from the driest deserts. Their distribution is determined by the availability of ants and termites.', // Habitat
                'Least Concern', // Red List Status
                'Unknown', // Population
                'Habitat loss to agriculture, hunting for meat and traditional medicine', // Threats
                '1.4-1.8m', // Length
                '0.4-0.5m', // Height
                '40-70kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardvark 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Solitary termite hunters',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardvark 2- Solitary termite hunters.mp3');
        mdl.addAudio(animal_counter, '03 The ultimate diggers',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardvark 3- The ultimate diggers.mp3');
        mdl.addAudio(animal_counter, '04 Tongue and digestive system',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardvark 4- Tongue and digestive system.mp3');
        mdl.addAudio(animal_counter, '05 Relationship with humans',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardvark 5- Relationship with humans.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    // Aardwolf ==================================================================
    animalName = 'Aardwolf'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Aardwolf (Proteles cristatus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Aardwolf', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
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
        mdl.addName(animal_counter, 'Aardwolf');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Sexes look alike; Hyaena-like appearance; mane of long hair on neck and back; tawny coloured coat with vertical black stripes; black feet, tail and muzzle.',
                // Confused With
                'Brown hyaena, spotted hyaena – aardwolf is much smaller than the other hyaena species',
                'Active at night and early morning', // Activity Period
                '±2 months', // Gestation Period
                '±8-10 years', // Lifespan
                // Diet
                'Ants and termites',
                'Larger carnivores, martial eagles, pythons ', // Predators
                'Preference for open habitats where there are healthy populations of harvester termites available. ', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'Road collisions, habitat loss, mistakenly killed by farmers as vermin, despite not being capable of killing livestock.', // Threats
                '80-100cm', // Length
                '50cm', // Height
                '6-11kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardwolf 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Built to hunt termites',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardwolf 2- Built to hunt termites.mp3');
        mdl.addAudio(animal_counter, '03 A lifestyle shaped by termites',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardwolf 3- A lifestyle shaped by termites.mp3');
        mdl.addAudio(animal_counter, '04 Aardwolves and humans',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Aardwolf 4- Aardwolves and humans.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // ========================================================================= 
    
    // African Wildcat ==================================================================
    animalName = 'African Wildcat'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('African wildcat (Felis silvestris cafra)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
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
        mdl.addName(animal_counter, 'African Wildcat');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Sexes similar; similar appearance to domestic cat; fur a sandy brown colour; reddish-brown colour on the back of ears; black stripes on legs; longer legs than the average housecat.',
                // Confused With
                'Domestic cats, black footed cat – black footed cat is smaller and stockier, with black spots and a short tail.',
                'Mostly nocturnal but adaptable', // Activity Period
                '±2 months', // Gestation Period
                '±13-14 years', // Lifespan
                // Diet
                'Rodents, birds, reptiles, hares, invertebrates',
                'Larger carnivores, martial eagles, pythons ', // Predators
                'Occurs widely from desert to woodland, absent from tropical forests.', // Habitat
                'Least Concern', // Red List Status
                'Decreasing', // Population
                'Hybridization with domestic cats pollutes the gene pool, makes pure wildcats more rare; road kill; persecution by farmers', // Threats
                '85-100cm', // Length
                '35cm', // Height
                '2.5-6kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/African Wild Cat 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Wild ancestors of the domestic cat',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/African Wild Cat 2- Wild ancestors of the domestic cat.mp3');
        mdl.addAudio(animal_counter, '03 Adaptable lifestyle and diet',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/African Wild Cat 3- Adaptable lifestyle and diet.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Baboon ==================================================================
    animalName = 'Baboon'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Baboon (Papio cynocephalus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
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
    
    // Bats ==================================================================
    animalName = 'Bats'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bats of the savannah',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
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
        mdl.addName(animal_counter, 'Bats, fruit bats, leaf-nosed bats, sheath-tailed bats, slit-faced bats, horseshoe bats, vesper bats, free-tailed bats');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Microchirptera: flat faces; large ears; small eyes; Megachiroptera: large eyes; pointy, dog-like face.',
                // Confused With
                'Each other',
                'Nocturnal', // Activity Period
                '±3-8 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Microchiroptera: insects; Megachiroptera: fruit, nectar, pollen',
                'Snakes, bat hawks and other birds of prey. ', // Predators
                'Present in most of Africa apart from the driest deserts. Require trees, caves or other overhanging features to roost.', // Habitat
                'Several species listed as endangered in Africa', // Red List Status
                'Decreasing', // Population
                'Light and noise pollution, pesticides, human expansion.', // Threats
                '15-60cm', // Length
                '7-15cm', // Height
                '5-300g' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Myth and reality',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bats 1- Myth and reality.mp3');
        mdl.addAudio(animal_counter, '02 The flying mammal',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bats 2- The flying mammal.mp3');
        mdl.addAudio(animal_counter, '03 Seeing the world through sound',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bats 3- Seeing the world through sound.mp3');
        mdl.addAudio(animal_counter, '04 Not as blind as you think',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bats 4- Not as blind as you think.mp3');
        mdl.addAudio(animal_counter, '05 Bats and society',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bats 5- Bats and society.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
     // Black-footed cat  ==================================================================
    animalName = 'Black-footed cat'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Black-footed cat (Felis nigripes)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
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
        mdl.addName(animal_counter, 'black-footed cat, small-spotted cat');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Similar to a house cat; shorter legs and tail; tan body with regular black or brown spots, barred tail and legs',
                // Confused With
                'Domestic cat, African wildcat ',
                'Nocturnal', // Activity Period
                '±2 months', // Gestation Period
                '±13-14 years', // Lifespan
                // Diet
                'Mostly small rodents, also reptiles, birds, insects',
                'Snakes, larger carnivores, birds of prey', // Predators
                'Arid scrubland and grassland, require some vegetation cover, will often sleep in termite mounds', // Habitat
                'Vulnerable', // Red List Status
                'Decreasing', // Population
                'Habitat degradation, indiscriminate pest control methods like poisoning and leg traps', // Threats
                '50-60cm', // Length
                '25cm', // Height
                '1-2Kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Ferocious predators',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Black-Footed Cat 1- Ferocious predators.mp3');
        mdl.addAudio(animal_counter, '02 Defense strategies and social interactions',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Black-Footed Cat 2- Defense strategies and social interactions.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    // Blesbok and Bontebok   ==================================================================
    animalName = 'Blesbok and Bontebok'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Blesbok and Bontebok (Damaliscus pygargus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
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
        mdl.addName(animal_counter, 'Blesbok, Bontebok');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Rich purplish-brown coat, lighter on shoulders and back; white on buttocks, belly face and forehead; sexes indistinct; both sexes have lyre shaped horns',
                // Confused With
                'Hartebeest and Tsessebe',
                'Diurnal, less active in the heat of the day', // Activity Period
                '±8 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Mainly short grass but will occasionally browse',
                'Lions, leopards, hyaena, wild dog, jackal', // Predators
                'Open grassland and Cape fynbos', // Habitat
                'Least concern', // Red List Status
                'Stable', // Population
                'No substantial threats, distinct bontebok subspecies under threat of hybridisation when introduced onto farms with more common blesbok', // Threats
                '130-150', // Length
                '90-95cm', // Height
                '60-70Kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Blesbok and Bontebok',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Blesbok 1- Blesbok and Bontebok.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    // Buffalo ==================================================================
    animalName = 'Buffalo'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('African buffalo (Cycerus caffer)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'African buffalo, Cape buffalo', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '<b>Buffalo Safety Advice</b>'
            + '<br/><br/><b>Don’t underestimate buffalo:</b> Buffalo may seem docile at times, but do not be fooled into thinking that they are harmless. They are one of the most dangerous animals to encounter on foot, and have also been known to be aggressive towards vehicles so please take note of the following advice.'
            + '<br/><br/><b>Walking in buffalo areas:</b> never walk around without a guide in areas where buffalo are present. Find out from your lodge if buffalo are able to enter the camp, and ask to briefed on safety procedure within the camp if they can.'
            + '<br/><br/><b>Be cautious:</b> Buffalo are usually quite tolerant of vehicles but it is always good to be cautious.  If you spot a buffalo, look around on both sides of the road to assess the position of the rest of the herd.  Never get in the middle of a herd of buffalo. '
            + '<br/><br/><b>Buffalo body language:</b> If you see a buffalo or a herd, approach slowly, gauging their level of comfort. If they stop eating and turn to stare at you, you should stop moving closer until they have resolved normal activity.  '
            + '<br/><br/><b>Plan your retreat:</b> If they start to advance towards you threateningly, then slowly back away from them. Always be aware of the route you will take to do this. '
            + '<br/><br/><b>Be respectful:</b> never lean out of the vehicle, and never get out of the car when in the presence of buffalo. Do not throw things, shout or tease the buffalo. '
            + '<br/><br/><b>Be wary of old males:</b> The individuals to be most wary of are the big, old males. These guys are notoriously bad tempered, so give them a wide birth.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animal_counter, 'African buffalo, Cape buffalo');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Large, cow-like appearance; coat dark-brown to black; males larger than females; horns present on males and females; horns grow down and outward, then up and inward; male horns have thick base, called boss.',
                // Confused With
                ' wildebeest, domestic cattle',
                'Diurnal, resting in the heat of the day', // Activity Period
                '±11 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Grazers, with a preference for long fresh grass',
                'Lions', // Predators
                'Wide habitat tolerance, require daily drinking water and a large supply grass, grassland, woodland, rainforest', // Habitat
                'Least Concern', // Red List Status
                'Decreasing', // Population
                'Habitat loss through competition with herders, poaching for bush meat, susceptible to disease and drought.', // Threats
                '2.5m', // Length
                '1.4m', // Height
                '550-700kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        mdl.addImage(animal_counter, 'Image 5', resourcesPrefix + animalName.toLowerCase() + '/image5.jpg');
        mdl.addImage(animal_counter, 'Image 6', resourcesPrefix + animalName.toLowerCase() + '/image6.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Fearsome foes',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Buffalo 1- Fearsome foes.mp3');
        mdl.addAudio(animal_counter, '02 The herd- a complex society',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Buffalo 2- The herd- a complex society.mp3');
        mdl.addAudio(animal_counter, '03 Bovine democracy',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Buffalo 3- Bovine democracy.mp3');
        mdl.addAudio(animal_counter, '04 Defensive strategy',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Buffalo 4- Defensive strategy.mp3');
        mdl.addAudio(animal_counter, '05 Buffalo bulls, a battle for dominance',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Buffalo 5- Buffalo bulls, a battle for dominance.mp3');
        mdl.addAudio(animal_counter, '06 Daga boys- grumpy old men',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Buffalo 6- Daga boys- grumpy old men.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Bushbabies ==================================================================
    animalName = 'Bushbaby or Galago'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bushbabies or Galago',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Lesser bushbaby, southern lesser bushbaby, lesser galago; thick-tailed bushbaby, greater galago, thick-tailed galago', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '<b>Buffalo Safety Advice</b>'
            + '<br/><br/><b>Don’t underestimate buffalo:</b> Buffalo may seem docile at times, but do not be fooled into thinking that they are harmless. They are one of the most dangerous animals to encounter on foot, and have also been known to be aggressive towards vehicles so please take note of the following advice.'
            + '<br/><br/><b>Walking in buffalo areas:</b> never walk around without a guide in areas where buffalo are present. Find out from your lodge if buffalo are able to enter the camp, and ask to briefed on safety procedure within the camp if they can.'
            + '<br/><br/><b>Be cautious:</b> Buffalo are usually quite tolerant of vehicles but it is always good to be cautious.  If you spot a buffalo, look around on both sides of the road to assess the position of the rest of the herd.  Never get in the middle of a herd of buffalo. '
            + '<br/><br/><b>Buffalo body language:</b> If you see a buffalo or a herd, approach slowly, gauging their level of comfort. If they stop eating and turn to stare at you, you should stop moving closer until they have resolved normal activity.  '
            + '<br/><br/><b>Plan your retreat:</b> If they start to advance towards you threateningly, then slowly back away from them. Always be aware of the route you will take to do this. '
            + '<br/><br/><b>Be respectful:</b> never lean out of the vehicle, and never get out of the car when in the presence of buffalo. Do not throw things, shout or tease the buffalo. '
            + '<br/><br/><b>Be wary of old males:</b> The individuals to be most wary of are the big, old males. These guys are notoriously bad tempered, so give them a wide birth.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animal_counter, 'Lesser bushbaby, southern lesser bushbaby, lesser galago; thick-tailed bushbaby, greater galago, thick-tailed galago');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Lesser bushbaby: long, thin, bushy tail; small body; large ears; huge, amber coloured, forward facing eyes; light grey coat; amazing jumping ability; usually seen in trees; Thick-tailed bushbaby: long, thick, bushy tail; approximately cat-sized; large, forward-facing eyes; dark grey coat',
                // Confused With
                'Each other',
                'Nocturnal', // Activity Period
                '±4 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Fruit, gum, insects, small reptiles',
                'Large owls, snakes, servals, genets', // Predators
                'The lesser bushbaby prefers drier savannah woodland while the thick-tailed bushbaby prefers more moist coastal or riparian woodland', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threats, but habitat loss and fire can have local impacts', // Threats
                'Lesser:30-40cm, Thick-tailed:70-80cm', // Length
                '', // Height
                'Lesser:120-210g, Thick-tailed:1-1.5kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Babies 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Nocturnal, tree dweling primates',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Babies 2- Nocturnal, tree dweling primates.mp3');
        mdl.addAudio(animal_counter, '03 Diet',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Babies 3- Diet.mp3');
        mdl.addAudio(animal_counter, '04 Social interactions and communication',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Babies 4- Social interactions and communication.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Bushbuck ==================================================================
    animalName = 'Bushbuck'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bushbuck (Tragelaphus scriptus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Bushbuck', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '<b>Buffalo Safety Advice</b>'
            + '<br/><br/><b>Don’t underestimate buffalo:</b> Buffalo may seem docile at times, but do not be fooled into thinking that they are harmless. They are one of the most dangerous animals to encounter on foot, and have also been known to be aggressive towards vehicles so please take note of the following advice.'
            + '<br/><br/><b>Walking in buffalo areas:</b> never walk around without a guide in areas where buffalo are present. Find out from your lodge if buffalo are able to enter the camp, and ask to briefed on safety procedure within the camp if they can.'
            + '<br/><br/><b>Be cautious:</b> Buffalo are usually quite tolerant of vehicles but it is always good to be cautious.  If you spot a buffalo, look around on both sides of the road to assess the position of the rest of the herd.  Never get in the middle of a herd of buffalo. '
            + '<br/><br/><b>Buffalo body language:</b> If you see a buffalo or a herd, approach slowly, gauging their level of comfort. If they stop eating and turn to stare at you, you should stop moving closer until they have resolved normal activity.  '
            + '<br/><br/><b>Plan your retreat:</b> If they start to advance towards you threateningly, then slowly back away from them. Always be aware of the route you will take to do this. '
            + '<br/><br/><b>Be respectful:</b> never lean out of the vehicle, and never get out of the car when in the presence of buffalo. Do not throw things, shout or tease the buffalo. '
            + '<br/><br/><b>Be wary of old males:</b> The individuals to be most wary of are the big, old males. These guys are notoriously bad tempered, so give them a wide birth.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animal_counter, 'Bushbuck');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'White spots and stripes along sides; white patch under chin, white stripe on lower neck; colour varies from rich chestnut to dull brown; Males larger than females; only males possess short, almost straight horns',
                // Confused With
                'Nyala, kudu, sitatunga',
                'Diurnal', // Activity Period
                '±6 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'browsers, feeding on young leaves, flowers and fruits',
                'All carnivores larger than jackals, especially leopards', // Predators
                'Riverine forest and woodland, usually found close to water', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threats, increased aridity due to climate change and desertification may have an effect, but range is spreading where human activity is opening up forests', // Threats
                '130-150cm', // Length
                '70-80cm', // Height
                '30-45kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Physical description',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Buck 1- Physical description.mp3');
        mdl.addAudio(animal_counter, '02 Placing your hind feet',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Buck 2- Placing your hind feet.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
    });
    // =========================================================================
    
    //Bushpig ==================================================================
    animalName = 'Bushpig'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bushpig (Potomochoerus larvatus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Bushpig', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '<b>Buffalo Safety Advice</b>'
            + '<br/><br/><b>Don’t underestimate buffalo:</b> Buffalo may seem docile at times, but do not be fooled into thinking that they are harmless. They are one of the most dangerous animals to encounter on foot, and have also been known to be aggressive towards vehicles so please take note of the following advice.'
            + '<br/><br/><b>Walking in buffalo areas:</b> never walk around without a guide in areas where buffalo are present. Find out from your lodge if buffalo are able to enter the camp, and ask to briefed on safety procedure within the camp if they can.'
            + '<br/><br/><b>Be cautious:</b> Buffalo are usually quite tolerant of vehicles but it is always good to be cautious.  If you spot a buffalo, look around on both sides of the road to assess the position of the rest of the herd.  Never get in the middle of a herd of buffalo. '
            + '<br/><br/><b>Buffalo body language:</b> If you see a buffalo or a herd, approach slowly, gauging their level of comfort. If they stop eating and turn to stare at you, you should stop moving closer until they have resolved normal activity.  '
            + '<br/><br/><b>Plan your retreat:</b> If they start to advance towards you threateningly, then slowly back away from them. Always be aware of the route you will take to do this. '
            + '<br/><br/><b>Be respectful:</b> never lean out of the vehicle, and never get out of the car when in the presence of buffalo. Do not throw things, shout or tease the buffalo. '
            + '<br/><br/><b>Be wary of old males:</b> The individuals to be most wary of are the big, old males. These guys are notoriously bad tempered, so give them a wide birth.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animal_counter, 'Bushpig');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Typical pig-like appearance; body covered in coarse reddish-brown hair; mane longer and paler than body hair; sexes similar; no warts on face; tail held pointing down when running',
                // Confused With
                'Warthog',
                'Nocturnal but occasionally seen in daylight', // Activity Period
                '±4 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Omnivorous, feed on fruits, rhizomes, roots, tubers and bulbs. Will also eat animal matter like carrion, insects and amphibians',
                'Mainly leopards ', // Predators
                'Riverine, coastal and montane forest, dense woodland, reed-beds', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threats, hunting and habitat loss could have localised effects. Subject to population control measures to reduce crop damage', // Threats
                '140cm', // Length
                '55-90cm', // Height
                '60-110kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Pig 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Adaptable diet',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Pig 2- Adaptable diet.mp3');
        mdl.addAudio(animal_counter, '02 Social structures',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Bush Pig 3- Social structures.mp3');
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