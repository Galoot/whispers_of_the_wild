load_animal_data = function(model, onCompleted) {
    var mdl = model;
    var animal_counter = 0;
    var resourcesPrefix = 'resources/animals/';
    var animalName;

    // should indicate the total number of animals loaded here
    var totalAnimals = 22;
    
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
    
    //Caracal ==================================================================
    animalName = 'Caracal'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Caracal (Caracal caracal)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'caracal, desert lynx', // Common Names
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
        mdl.addName(animal_counter, 'caracal, desert lynx');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Russet-red coat; pointed black ears with black tufts at the tips; short, powerful legs; hind legs higher than front legs, short tail; face has prominent black and white markings; sexes similar',
                // Confused With
                'Serval, African golden cat',
                'Nocturnal', // Activity Period
                '±2.5 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Small to medium sized vertebrates: rodents and hares, birds, reptiles from snakes to monitor lizards, small antelope up to the size of a bushbuck, livestock',
                'Leopards, Lions, Hyaenas', // Predators
                'Wide habitat tolerance, savannah woodland and grassland, semi-desert scrubland', // Habitat
                'Least Concern', // Red List Status
                'Unknown', // Population
                'No major threats, subject to persecution for livestock killings, habitat destruction a greater risk in Central, West and North Africa', // Threats
                '70-110cm', // Length
                '40-45cm', // Height
                '7-19kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + 'Caracal 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Ear tufts',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Caracal 2- Ear tufts.mp3');
        mdl.addAudio(animal_counter, '02 Incredible athleticism',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Caracal 3- Incredible athleticism.mp3');
        mdl.addAudio(animal_counter, '02 Adaptable hunters',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Caracal 4- Adaptable hunters.mp3');
        mdl.addAudio(animal_counter, '05 Agricultural pests',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Caracal 5- Agricultural pests.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Cheetah ==================================================================
    animalName = 'Cheetah'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Cheetah (Ocinonyx jubatus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Cheetah', // Common Names
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
        mdl.addName(animal_counter, 'caracal, desert lynx');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Very tall cat with greyhound-like build; long, slender legs; slender build; long, thick tail; black tear marks on face; coat a tan colour with solid, round black spots (unlike the rosettes of a leopard); sexes similar.',
                // Confused With
                'Serval, leopard',
                'Duirnal', // Activity Period
                '±3 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Mostly medium sized antelope such as impala. Coalitions of males can take prey as large as wildebeest.',
                'Leopards, lions, hyaenas', // Predators
                'Open habitats such as grassland and light woodland. Require good visibility to hunt. Not water dependent.', // Habitat
                'Vulnerable but the Asiatic subspecies is critically endangered', // Red List Status
                'Decreasing: 7 000-10 000 in Africa, and 60-100 in Asia', // Population
                'Cheetah require huge areas to support a viable populations, habitat loss is causing isolation and extinction of populations. Depletion of their wild prey, particularly in North Africa, is a major problem. Conflict with farmers and herders a major threat in Southern Africa, despite them posing little threat to livestock. Indiscriminate predator control methods like leg traps and poison are a major threat. ', // Threats
                '1.8-2.2cm', // Length
                '80cm', // Height
                '40-60kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        mdl.addImage(animal_counter, 'Image 5', resourcesPrefix + animalName.toLowerCase() + '/image5.jpg');
        mdl.addImage(animal_counter, 'Image 6', resourcesPrefix + animalName.toLowerCase() + '/image6.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Poorly equipped to compete',
                100, resourcesPrefix + animalName.toLowerCase()
                + 'Cheetah 1- Poorly equipped to compete.mp3');
        mdl.addAudio(animal_counter, '02 Vulnerable from birth',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Cheetah 2- Vulnerable from birth.mp3');
        mdl.addAudio(animal_counter, '03 Social males, solitary females',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Cheetah 3- Social males, solitary females.mp3');
        mdl.addAudio(animal_counter, '04 Avoiding competition - daylight hunters',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Cheetah 4- Avoiding competition - daylight hunters.mp3');
        mdl.addAudio(animal_counter, '05 Cheetahs and humans',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Cheetah 5- Cheetahs and humans.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Civet ==================================================================
    animalName = 'Civet'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Civet (Civettictus civetta)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Genet', // Common Names
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
        mdl.addName(animal_counter, 'Civet');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Relatively large, approximately the size of a medium sized dog; racoon-like face with black “mask” over eyes; tan to grey coat, heavily marked with black spots; black stripe running the length of the back; short tail; hunched appearance with head held low when walking.',
                // Confused With
                'Genet',
                'Mainly nocturnal, occasionally active in early morning and late afternoon.', // Activity Period
                '±2 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Omnivorous, hunt insects and other invertebrate with a particular taste for poisonous millipededs. Also take rodents reptiles, birds and carrion and will feed on fruits and berries.',
                'Leopards, lions, hyaenas', // Predators
                'wide habitat tolerance, prefer denser habitats like woodland, absent from deserts and rainforests, but will occupy forested areas opened up by human activity.', // Habitat
                'Least concern', // Red List Status
                'Unknown', // Population
                'No major threats, popularly caught for bushmeat and fur trade, excretions from anal glands used in perfume industry.', // Threats
                '120-140cm', // Length
                '40-50cm', // Height
                '8-16kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Poorly equipped to compete',
                100, resourcesPrefix + animalName.toLowerCase()
                + 'Civit 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Scent communication',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Civit 2- Scent communication.mp3');
        mdl.addAudio(animal_counter, '03 Social males, solitary females',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Civit 3- Scent communication.mp3');
        mdl.addAudio(animal_counter, '04 Civits in the perfume industry',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Civit 4- Civits in the perfume industry.mp3');
        mdl.addAudio(animal_counter, '05 Poisonous diet',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Civit 5- Poisonous diet.mp3');
        mdl.addAudio(animal_counter, '05 Role in the ecosystem.mp3',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Civit 6- Role in the ecosystem.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    // Duiker ==================================================================
    animalName = 'Duiker (common)'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Common duiker (Sylvicapra grimmia)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Common duiker, grey duiker', // Common Names
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
                'Coat a uniform dull grey to reddish-yellow colour on top, paler on the belly; long, narrow face with black running up the nose; have a crest of long black hair between the ears; females slightly larger than males; only the males equipped with short, sharp, straight horns.',
                // Confused With
                'Steenbok, oribi, grysbok, reedbuck, rhebok',
                'Early morning and late afternoon', // Activity Period
                '±6-7 months', // Gestation Period
                'No Info', // Lifespan
                // Diet
                'Primarily browsers, feeding on leaves, fruit and flowers from many different species',
                'Most carnivores larger than a jackal, martial eagles, pythons', // Predators
                'Fairly wide habitat tolerance, found anywhere with adequate cover, from savannah woodland mixed grassland and scrubland', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threats, but localised declines have been recorded, can survive in human altered landscapes, are extensively hunted for meat but can withstand relatively high hunting pressure.', // Threats
                '±100cm', // Length
                '40-50cm', // Height
                '18-22kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Ancient and intelligent antelope',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Common Duiker 1- Ancient and intelligent antelope.mp3');
        mdl.addAudio(animal_counter, '02 The herd- a complex society',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Common Duiker 2- The herd- a complex society.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Eland  ==================================================================
    animalName = 'Eland'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Eland (Tragelaphus oryx)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Eland, common eland, giant eland', // Common Names
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
        mdl.addName(animal_counter, 'Eland, common eland, giant eland');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Huge, bulky build; slightly cow-like in appearance; almost uniformly coloured tan to blue-grey coat; both sexes have straight, corkscrew shaped horns; Male horns heavier than females; males have hump around shoulders, a dewlap of loose skin under the neck and a tuft of hair between the eyes',
                // Confused With
                'Gemsbok, kudu, roan',
                'Diurnal', // Activity Period
                '±9 months', // Gestation Period
                '±20 years', // Lifespan
                // Diet
                'Primarily browsers, feeding on leaves, fruit and flowers from many different species',
                'Mainly lions, but young taken by hyaena, leopard and wild dog', // Predators
                'Relatively wide habitat tolerance including savannah woodlands, semi-desert scrubland and montane grasslands', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'Habitat loss, hunting and poaching for meat', // Threats
                '2.4-2.8m', // Length
                '1.5-1.7m', // Height
                '450-900kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Eland 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Social interactions',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Eland 2- Social interactions.mp3');
        mdl.addAudio(animal_counter, '03 Defensive strategy',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Eland 3- Defensive strategy.mp3');
        mdl.addAudio(animal_counter, '04 Bad mothers',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Eland 4- Bad mothers.mp3');
        mdl.addAudio(animal_counter, '05 Importance to hunter gatherers',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Eland 5- Importance to hunter gatherers.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Elephant  ==================================================================
    animalName = 'Elephant'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Elephant (Loxadonta Africana)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'African elephant, elephant ', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '<b>Buffalo Safety Advice</b>'
            + '<br/><br/>Elephants are capable of overturning and crushing vehicles, so follow these basic rules to keep yourself safe. '
            + '<br/><br/><b>Be cautious:</b> always approach slowly and carefully, and do not force yourself into their space'
            + '<br/><br/><b>Plan your retreat:</b> The driver should be aware of the route they will take to back away if the elephant shows aggression'
            + '<br/><br/><b>Watch their body language:</br> If an elephant is feeding and not paying you much attention then it is comfortable. '
            + '<br/><br/>When they pretend to eat without putting food into their mouth, you have started to make them uncomfortable, and they are assessing you as a threat.  Do not move any closer until they have resumed normal activity. '
            + '<br/><br/>If they look at you and flap their ears, trumpet or shake their head, they have become agitated. You should not panic, just slowly back away until they calm down.'
            + '<br/><br/>If they charge with their ears out, it is a warning charge, and you should back away quickly without panicking. '
            + '<br/><br/>If they charge with their ears in, it is a full charge and you should try get away from them as quickly as possible.'
            + '<br/><br/><b>Be respectful:</b> don’t tease them, throw things at them or shout at them. '
            + '<br/><br/><b>Don’t get between a mother and her calf:</b> when a family herd passes by, keep a safe distance, and don’t place yourself between a mother and her calf'
            + '<br/><br/><b>Be wary of musth bulls:</b> If an elephant has liquid leaking from behind its eye, has its penis hanging out and is dribbling urine, it is in musth, a state of heightened aggression. Give these guys a wide berth'
            + '<br/><br/><b>Don’t try intimidate them:</b> elephants can dominate the road sometimes. Don’t try to intimidate them into moving. Be patient and wait for them to give you space'
            + '<br/><br/><b>Stay in your car:</b> do not stand up, make sudden movements, lean out or get out of your car when near an elephant'
            + '<br/><br/><b>Don’t feed the elephants:</b> Do not be tempted to share your food with them. If an elephant develops a taste for human food they can become extremely dangerous.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animal_counter, 'Eland, common eland, giant eland');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                ': Unmistakable; huge size; long trunk that reaches the floor; white ivory tusks protruding from mouth; huge ears; males larger than females; in profile females have a square forehead while a male’s is rounded',
                // Confused With
                'Unmistakeable',
                'Active day and night, will rest in the heat of the day', // Activity Period
                '±22 months', // Gestation Period
                '±60 years', // Lifespan
                // Diet
                'generalists herbivores, feeding on most plant species and almost any part of the plant including grass, leaves, roots, bark, fruits, wood, bulbs, tubers and flowers',
                'Mainly lions, but young taken by hyaena, leopard and wild dog', // Predators
                'Relatively wide habitat tolerance including savannah woodlands, semi-desert scrubland and montane grasslands', // Habitat
                'Vulnerable', // Red List Status
                'Increasing in Southern and East Africa, decreasing in Central and West Africa', // Population
                'Poaching for ivory is exploding, habitat fragmentation, human-elephant conflict owing to raids and human attacks', // Threats
                '5-7m', // Length
                '2.5-4m', // Height
                '2 600-6 000kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        mdl.addImage(animal_counter, 'Image 5', resourcesPrefix + animalName.toLowerCase() + '/image5.jpg');
        mdl.addImage(animal_counter, 'Image 6', resourcesPrefix + animalName.toLowerCase() + '/image6.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Unfussy eaters',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 2- Unfussy eaters.mp3');
        mdl.addAudio(animal_counter, '03 Intelligence',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 3- Intelligence.mp3');
        mdl.addAudio(animal_counter, '04 The herd - education institutions',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 4-  The herd - education institutions.mp3');
        mdl.addAudio(animal_counter, '05 Elephant bulls in musth',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 5- Elephant bulls in musth.mp3');
        mdl.addAudio(animal_counter, '06 The most bizarre body on the planet',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 6- The most bizarre body on the planet.mp3');
        mdl.addAudio(animal_counter, '07 Multifunctional ears',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 7- Multifunctional ears.mp3');
        mdl.addAudio(animal_counter, '08 The trunk - the most useful body part of all',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 8- The trunk - the most useful body part of all.mp3');
        mdl.addAudio(animal_counter, '09 Tusks - teeth with a difference',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 9- Tusks - teeth with a difference.mp3');
        mdl.addAudio(animal_counter, '10 Hearing through their feet',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 10- Hearing through their feet.mp3');
        mdl.addAudio(animal_counter, '11 Elephants, makers and destroyers of habitats',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 11- Elephants, makers and destroyers of habitats.mp3');
        mdl.addAudio(animal_counter, '12 Creative destruction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 12- Creative destruction.mp3');
        mdl.addAudio(animal_counter, '13 Elephant poo as food',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 13- Elephant poo as food.mp3');
        mdl.addAudio(animal_counter, '14 Elephants influencing water dynamics',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 14- Elephants influencing water dynamics.mp3');
        mdl.addAudio(animal_counter, '15 Culling and population control',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 15- Culling and population control.mp3');
        mdl.addAudio(animal_counter, '16 Elephants and humans',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Elephant 16- Elephants and humans.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Gemsbok ==================================================================
    animalName = 'Gemsbok'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Gemsbok (Oryx gazella)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Gemsbok, oryx, East African Oryx', // Common Names
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
        mdl.addName(animal_counter, 'caracal, desert lynx');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'distinct black and white facial pattern; black and white markings along neck, belly and legs; long, straight, sharp horns; thick neck; horse-like tail; males and females similar, males slightly larger',
                // Confused With
                'Roan, eland',
                'Early morning, late afternoon and night, rest in the heat of the day', // Activity Period
                '±9 months', // Gestation Period
                '±25 years', // Lifespan
                // Diet
                'Mostly grass but will eat leaves, pods, fruits such as tsamma melons, roots, tubers and bulbs',
                'Lions and hyaenas, young taken by cheetah, wild dog and leopard', // Predators
                'Arid and semi-arid grasslands, scrubland and bushland ', // Habitat
                'Southern Africa: Least concern; East Arica: Near Threatened', // Red List Status
                'Stable in Southern Africa, decreasing East Africa', // Population
                'Hunting and poaching for meat, skins and horns, encroachment by livestock farmers and herders', // Threats
                '190-240cm', // Length
                '120cm', // Height
                '210-240kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Magical arid specialists',
                100, resourcesPrefix + animalName.toLowerCase()
                + 'Gemsbok 1- Magical arid specialists.mp3');
        mdl.addAudio(animal_counter, '02 Attaining water in the desert',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Gemsbok 2- Attaining water in the desert.mp3');
        mdl.addAudio(animal_counter, '03 Water retention',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Gemsbok 3- Water retention.mp3');
        mdl.addAudio(animal_counter, '04 Temperature regulation',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Gemsbok 4- Temperature regulation.mp3');
        mdl.addAudio(animal_counter, '05 Gemsbok and humans',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Gemsbok 5- Gemsbok and humans.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
     //Genet ==================================================================
    animalName = 'Genet'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Genet (Genetta genetta & Genetta tigrina)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Small-spotted genet, common genet, large-spotted genet, ', // Common Names
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
        mdl.addName(animal_counter, 'caracal, desert lynx');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Body long and slender; legs relatively short; tail thick and striped; coat a dull grey, well spotted; face mongoose-like with black and white mask; Small-spotted genet: white-tipped tail, small black spots; Large-spotted genet: black-tipped tail, large russet coloured spots.',
                // Confused With
                'Each other and the African civet',
                'Early morning, late afternoon and night, rest in the heat of the day', // Activity Period
                '±70 days', // Gestation Period
                '±12-14 years', // Lifespan
                // Diet
                'Mostly insectivorous, but will also take small mammals, birds, reptiles and amphibians. They will also eat eggs, wild berries and fruits.',
                'Some larger predators such as leopards and caracal but largely arboreal lifestyle keeps them relatively safe.', // Predators
                'Both species spend time in the trees so they don’t stray too far from well-wooded areas. The small spotted genet has a wider habitat tolerance, occurring along rivers in semi-deserts. The Large-spotted genet prefers more moist areas.', // Habitat
                'Least concern', // Red List Status
                'Stable', // Population
                'No major threats, sometimes killed by poultry farmers. Occasionally eaten as bush meat, and used for traditional medicine. Their fur is used for decorative purposes.', // Threats
                '80-110cm', // Length
                '25-35cm', // Height
                '1.5-3.2kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Genet 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Nocturnal Hunters',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Genet 2- Nocturnal Hunters.mp3');
        mdl.addAudio(animal_counter, '03 Social Interactions',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Genet 3- Social Interactions.mp3');
        mdl.addAudio(animal_counter, '04 Genets and Humans',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Genet 4- Genets and Humans.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Giraffe ==================================================================
    animalName = 'Giraffe'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Giraffe (Giraffa camelopardalis)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Giraffe', // Common Names
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
        mdl.addName(animal_counter, 'caracal, desert lynx');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Unmistakeable; extremely tall; neck and legs very long; patchwork brown and yellow pattern on coat.',
                // Confused With
                'Unmistakeable',
                'Active day and night', // Activity Period
                '±15 months', // Gestation Period
                '±25 years', // Lifespan
                // Diet
                'Very selective feeders, eat mainly young and nutritious leaves. ',
                'Young can be taken by lions, hyaenas and leopards, adults only killed by lions.', // Predators
                'From dry to moist savannah woodland, sometimes on forest margins. Avoid mountains and thick forests.', // Habitat
                'Least concern', // Red List Status
                'Northern populations are decreasing, southern populations are increasing.', // Population
                'No major threats, sometimes killed by poultry farmers. Occasionally eaten as bush meat, and used for traditional medicine. Their fur is used for decorative purposes. Habitat degradation and poaching are the main threats. Desertification from overgrazing also a problem. Increased aridity from climate change may also become a major threat.', // Threats
                '3.5-5m (including neck and head)', // Length
                '2-3.5m', // Height
                '700-1400kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        mdl.addImage(animal_counter, 'Image 5', resourcesPrefix + animalName.toLowerCase() + '/image5.jpg');
        mdl.addImage(animal_counter, 'Image 6', resourcesPrefix + animalName.toLowerCase() + '/image6.jpg');
        mdl.addImage(animal_counter, 'Image 7', resourcesPrefix + animalName.toLowerCase() + '/image7.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Giraffe 1- Introduction.mp3');
        mdl.addAudio(animal_counter, '02 Birth from above',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Giraffe 2- Birth from above.mp3');
        mdl.addAudio(animal_counter, '03 Social structures',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Giraffe 3- Social structures.mp3');
        mdl.addAudio(animal_counter, '04 Telling males and females apart',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Giraffe 4- Telling males and females apart.mp3');
        mdl.addAudio(animal_counter, '04 Predation',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Giraffe 5- Predation.mp3');
        mdl.addAudio(animal_counter, '04 Eating old bones',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Giraffe 6- Eating old bones.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
     //Hares and rabbits ==================================================================
    animalName = 'Hares and rabbits'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Genet (Genetta genetta & Genetta tigrina)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Savannah hare, scrub hare, cape hare, riverine rabbit, red rock rabbits', // Common Names
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
        mdl.addName(animal_counter, 'Savannah hare, scrub hare, cape hare, riverine rabbit, red rock rabbits');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'small size; upright stance when sitting; soft, brown-grey fur; small, tufty tail; Hares: Long ears, long hind legs; Rabbits: smaller ears, shorter legs. ',
                // Confused With
                'Each other, spring hare',
                'Nocturnal', // Activity Period
                '±1.5 months', // Gestation Period
                '±6-7 years', // Lifespan
                // Diet
                'Mainly grass but will occasionally eat leaves.',
                'Most carnivores larger than an African wildcat, large owls and snakes', // Predators
                'A variety of habitats from dry scrubland for the Cape hare, woodland and grassland for the scrub hare, rocky outcrops for red rock rabbits  and dense riverine habitat for the riverine rabbit.', // Habitat
                'Least Concern but Critically Endangered for the riverine rabbit', // Red List Status
                'Decreasing', // Population
                'Habitat fragmentation is the major threat to these animals. They are also hunted for their meat or for sport, and many are killed in collisions with cars.', // Threats
                '80-110cm', // Length
                '25-35cm', // Height
                '1.5-3.2kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Difference - body shape',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hares and rabbits 1- Difference - body shape.mp3');
        mdl.addAudio(animal_counter, '02 Difference - reproduction',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hares and rabbits 2- Difference - reproduction.mp3');
        mdl.addAudio(animal_counter, '03 Neglectful parents',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hares and rabbits 3- Neglectful parents.mp3');
        mdl.addAudio(animal_counter, '04 Disgusting habits',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hares and rabbits 4- Disgusting habits.mp3');
        // Maps(s)
        mdl.addMap(animal_counter, 'Map 1', resourcesPrefix + animalName.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animal_counter, 'Back', resourcesPrefix + animalName.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animal_counter, 'Front', resourcesPrefix + animalName.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================
    
    //Hippo ==================================================================
    animalName = 'Hippo'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Hippopotamus (Hippopotamus amphibius)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Savannah hare, scrub hare, cape hare, riverine rabbit, red rock rabbits', // Common Names
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
        mdl.addName(animal_counter, 'Hippo');

        // Profile Information
        mdl.addProfile(animal_counter,
                // Identification Pointer
                'Huge size; skin a dark grey, smooth and hairless with pink tinge around eyes and mouth; small ears; usually in or close to water; short legs, barrel shaped body; huge head, large mouth.',
                // Confused With
                'rhinos when on land',
                'Nocturnal', // Activity Period
                '±8 months', // Gestation Period
                '±35-40 years', // Lifespan
                // Diet
                'Mostly grass,  sometimes aquatic herbs.',
                'Lions', // Predators
                'Permanent waterbodies such as rivers, lakes and dams.', // Habitat
                'Vulnerable', // Red List Status
                'Decreasing', // Population
                'Hunting for meat and ivory is the major threat, particularly in areas of civil unrest. Pollution of waterways and disruption of water flow, as well as overgrazing have a major adverse effect. Expansion of human populations along waterways is also adversely affecting hippo populations. They are often killed in revenge for destroying crops or attacking humans.', // Threats
                '3.1m', // Length
                '1.4-1.7m', // Height
                '1000-2000kg' // Weight
                );
        // Images
        mdl.addImage(animal_counter, 'Image 1', resourcesPrefix + animalName.toLowerCase() + '/image1.jpg');
        mdl.addImage(animal_counter, 'Image 2', resourcesPrefix + animalName.toLowerCase() + '/image2.jpg');
        mdl.addImage(animal_counter, 'Image 3', resourcesPrefix + animalName.toLowerCase() + '/image3.jpg');
        mdl.addImage(animal_counter, 'Image 4', resourcesPrefix + animalName.toLowerCase() + '/image4.jpg');
        mdl.addImage(animal_counter, 'Image 5', resourcesPrefix + animalName.toLowerCase() + '/image5.jpg');
        // Audio
        mdl.addAudio(animal_counter, '01 Introduction - unusual relations',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 1- Introduction - unusual relations.mp3');
        mdl.addAudio(animal_counter, '02 Why live in water',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 2- Why live in water.mp3');
        mdl.addAudio(animal_counter, '03 Red sweat and pink milk',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 3- Red sweat and pink milk.mp3');
        mdl.addAudio(animal_counter, '04 Can hippos swim',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 4- Can hippos swim_.mp3');
        mdl.addAudio(animal_counter, '05 A male dominated society',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 5- A male dominated society.mp3');
        mdl.addAudio(animal_counter, '06 Watery love- hippo mating',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 6- Watery love- hippo mating.mp3');
        mdl.addAudio(animal_counter, '07 Impact on the natural environment',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 7- Impact on the natural environment.mp3');
        mdl.addAudio(animal_counter, '08 Hippos and humans',
                100, resourcesPrefix + animalName.toLowerCase()
                + '/Hippo 8- Hippos and humans.mp3');
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