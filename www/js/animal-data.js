load_animal_data = function(model, onCompleted) {
    var mdl = model;
    var animal_counter = 0;
    var resourcesPrefix = 'resources/animals/';
    var animalName;

    // should indicate the total number of animals loaded here
    var totalAnimals = 50;

    // Bats ==================================================================
    animalName = 'Bats'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bats of the savannah',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Bats, fruit bats, leaf-nosed bats, sheath-tailed bats, slit-faced bats, horseshoe bats, vesper bats, free-tailed bats', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Nocturnal Creatures', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Bats, fruit bats, leaf-nosed bats, sheath-tailed bats, slit-faced bats, horseshoe bats, vesper bats, free-tailed bats');

        // Profile Information
        mdl.addProfile(animalID,
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
                '5-300g', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Myth and reality',
                54, resourcesPrefix + name.toLowerCase()
                + '/Bats 1- Myth and reality.mp3');
        mdl.addAudio(animalID, '02 The flying mammal',
                38, resourcesPrefix + name.toLowerCase()
                + '/Bats 2- The flying mammal.mp3');
        mdl.addAudio(animalID, '03 Seeing the world through sound',
                121, resourcesPrefix + name.toLowerCase()
                + '/Bats 3- Seeing the world through sound.mp3');
        mdl.addAudio(animalID, '04 Not as blind as you think',
                97, resourcesPrefix + name.toLowerCase()
                + '/Bats 4- Not as blind as you think.mp3');
        mdl.addAudio(animalID, '05 Bats and society',
                31, resourcesPrefix + name.toLowerCase()
                + '/Bats 5- Bats and society.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        // mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        // mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Bushbabies ==================================================================
    animalName = 'Bush baby'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bushbabies or Galago',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Lesser bushbaby, southern lesser bushbaby, lesser galago; thick-tailed bushbaby, greater galago, thick-tailed galago', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Lesser bushbaby, southern lesser bushbaby, lesser galago; thick-tailed bushbaby, greater galago, thick-tailed galago');

        // Profile Information
        mdl.addProfile(animalID,
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
                'Lesser:120-210g, Thick-tailed:1-1.5kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                52, resourcesPrefix + name.toLowerCase()
                + '/Bush Babies 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Nocturnal, tree dweling primates',
                69, resourcesPrefix + name.toLowerCase()
                + '/Bush Babies 2- Nocturnal, tree dweling primates.mp3');
        mdl.addAudio(animalID, '03 Diet',
                28, resourcesPrefix + name.toLowerCase()
                + '/Bush Babies 3- Diet.mp3');
        mdl.addAudio(animalID, '04 Social interactions and communication',
                70, resourcesPrefix + name.toLowerCase()
                + '/Bush Babies 4- Social interactions and communication.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Squirrels ==================================================================
    animalName = 'Squirrel'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Squirrels (Xerus inauris & Paraxerus cepapi)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Ground squirrel, tree squirrel', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Other Herbivores', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Ground squirrel, tree squirrel');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Ground squirrel: Light brown to grey coat with white a stripe down each side; tail thick and bushy, sometimes held above head in bright sunlight; always found on the ground; Tree Squirrel: Smaller than ground squirrel; yellowish to reddish-brown coat, uniformly coloured with no distinct markings; tail thin; found in trees and on ground.',
                // Confused With
                'each other, meerkats, mongooses',
                'Diurnal', // Activity Period
                '±45-55 days', // Gestation Period
                '±8 years', // Lifespan
                // Diet
                'seeds, grass, fruit, bulbs and other plant material. Occasionally eat insects.',
                'a variety of small and large predators, including birds of prey, larger carnivores such as mongooses, caracal or leopard as well as snakes.', // Predators
                'Ground squirrels occur in dry, open habitat, usually in areas with a hard substrate; Tree squirrels occur in well wooded habitats from savannahs to semi deserts.', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threats, ground squirrels sometimes considered an agricultural pest.', // Threats
                'Ground Squirrel: 40-50cm<br/>Tree Squirrel: 35cm', // Length
                'Ground Squirrel: 25cm<br/>Tree Squirrel: 20cm', // Height
                'Ground Squirrel: 500-1000g<br/>Tree Squirrel: 100-300g', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');

        // Audio
        mdl.addAudio(animalID, 'Introduction- difference between tree and ground squirrels',
                100, resourcesPrefix + name.toLowerCase()
                + '/Squirrels 1- Introduction- difference between tree and ground squirrels.mp3');
        mdl.addAudio(animalID, '02- Hoarding behaviour',
                100, resourcesPrefix + name.toLowerCase()
                + '/Squirrels 2- The great springbok migration.mp3');
        mdl.addAudio(animalID, '03 Tree squirrel society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Squirrels 3- Tree squirrel society.mp3');
        mdl.addAudio(animalID, '04 Ground squirrel society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Squirrels 4- Ground squirrel society.mp3');
        mdl.addAudio(animalID, '04 Predator defense',
                100, resourcesPrefix + name.toLowerCase()
                + '/Squirrels 5- Predator defense.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Social Mongoose ==================================================================
    animalName = 'Social mongoose'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Social mongooses',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Banded mongoose, meerkat, suricate, dwarf mongoose', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Banded mongoose, meerkat, suricate, dwarf mongoose');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'long, slender bodies; small ears; forward facing eyes; pointed faces; Dwarf mongoose: very small size; fuzzy-looking dark grey to dark brown fur; Meerkat: pale, straw-coloured fur with irregular blotchy stripes across the back; blunt nose; stand in distinctive upright posture; Banded mongoose: Relatively large size, dark grey fur with 10-12 distinct black stripes across the back.',
                // Confused With
                'Other mongooses',
                'Diurnal', // Activity Period
                '±2 months', // Gestation Period
                '±10', // Lifespan
                // Diet
                'Mainly insects and other invertebrates, but will eat reptiles, amphibians, birds, eggs and carrion.',
                'Birds of prey, carnivores larger than the African wildcat, and large snakes.', // Predators
                'Dwarf mongooses prefer open savannah and woodland, meerkats occur mostly in dry, open semi desert and Banded mongoose has a wide habitat tolerance from deserts to rain forests.', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'There are no major threats to these species, habitat loss is probably their greatest threat.', // Threats
                'Dwarf mongoose: 30-40cm<br/>Meerkat: 45-55cm<br/>Banded mongoose: 45-65cm', // Length
                'Dwarf mongoose: 7-10cm<br/>Meerkat: 15cm<br/>Banded mongoose: 20cm', // Height
                'Dwarf mongoose: 200-500g<br/>Meerkat: 600-1000g<br/>Banded mongoose: 1-1.6kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');


        // Audio
        mdl.addAudio(animalID, 'Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Social Mongooses 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Cooperative defence and hunting',
                100, resourcesPrefix + name.toLowerCase()
                + '/Social Mongooses 2- Cooperative defence and hunting.mp3');
        mdl.addAudio(animalID, '03 Cooperative breeding',
                100, resourcesPrefix + name.toLowerCase()
                + '/Social Mongooses 3- Cooperative breeding.mp3');
         mdl.addAudio(animalID, '04 Dwarf mongooses and birds - unexpected relationships',
                100, resourcesPrefix + name.toLowerCase()
                + '/Social Mongooses 4- Dwarf mongooses and birds - unexpected relationships.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map1.jpg');
        mdl.addMap(animalID, 'Map 2', resourcesPrefix + name.toLowerCase() + '/map2.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot3.jpg');
    });
    // =========================================================================

    //Solitary Mongoose ==================================================================
    animalName = 'Solitary mongoose'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Solitary mongooses',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'slender mongoose, yellow mongoose, white-tailed mongoose, Egyptian mongoose', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Banded mongoose, meerkat, suricate, dwarf mongoose');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Small carnivores; long slender bodies, short legs; pointed faces; only seen alone Slender mongoose: thin, black-tipped tail which turns upwards when moving; Yellow mongoose: yellowish body, bushy tail with white-tipped tail; White-tailed mongoose: Large, dark-grey body, bushy white tail; Egyptian mongoose: relatively large size, shaggy grey fur.',
                // Confused With
                'Other mongooses',
                'Mostly nocturnal with exception of slender and grey mongoose.', // Activity Period
                '±2 months', // Gestation Period
                '±10', // Lifespan
                // Diet
                'Mainly insects and other invertebrates, but will eat reptiles, amphibians, birds, eggs and carrion.',
                'Birds of prey, carnivores larger than the African wildcat, and large snakes.', // Predators
                'Dwarf mongooses prefer open savannah and woodland, meerkats occur mostly in dry, open semi desert and Banded mongoose has a wide habitat tolerance from deserts to rain forests.', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'There are no major threats to these species, habitat loss is probably their greatest threat.', // Threats
                'Slender mongoose: 45-65cm<br/>Yellow mongoose: 40-60cm <br/>White-tailed mongoose: 90-150cm<br/>Egyptian mongoose: 95-110cm ', // Length
                'Slender mongoose: 10-12cm<br/>Yellow mongoose: 15cm <br/>White-tailed mongoose: 30cm<br/>Egyptian mongoose: 30cm', // Height
                'Slender mongoose: 400-800g<br/>Yellow mongoose: 400-900g<br/>White-tailed mongoose: 3-5kg<br/>Egyptian mongoose: 2.5-5kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');

        // Audio
        mdl.addAudio(animalID, 'Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Solitary Mongooses 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Why be solitary',
                100, resourcesPrefix + name.toLowerCase()
                + '/Solitary Mongooses 2- Why be solitary_.mp3');
        mdl.addAudio(animalID, '03 Social habits',
                100, resourcesPrefix + name.toLowerCase()
                + '/Solitary Mongooses 3- Social habits.mp3');
         mdl.addAudio(animalID, '04 Feeding habits and relationships with humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Solitary Mongooses 4- Feeding habits and relationships with humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map1.jpg');
        mdl.addMap(animalID, 'Map 2', resourcesPrefix + name.toLowerCase() + '/map2.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

     // Black-footed cat  ==================================================================
    animalName = 'Black-footed cat'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Black-footed cat (Felis nigripes)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'black-footed cat, small-spotted cat');

        // Profile Information
        mdl.addProfile(animalID,
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
                '1-2Kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Ferocious predators',
                100, resourcesPrefix + name.toLowerCase()
                + '/Black-Footed Cat 1- Ferocious predators.mp3');
        mdl.addAudio(animalID, '02 Defense strategies and social interactions',
                100, resourcesPrefix + name.toLowerCase()
                + '/Black-Footed Cat 2- Defense strategies and social interactions.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Genet ==================================================================
    animalName = 'Genet'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Genet (Genetta genetta & Genetta tigrina)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Small-spotted genet, common genet, large-spotted genet, ', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Small-spotted genet, common genet, large-spotted genet');

        // Profile Information
        mdl.addProfile(animalID,
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
                '1.5-3.2kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Genet 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Nocturnal Hunters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Genet 2- Nocturnal Hunters.mp3');
        mdl.addAudio(animalID, '03 Social Interactions',
                100, resourcesPrefix + name.toLowerCase()
                + '/Genet 3- Social Interactions.mp3');
        mdl.addAudio(animalID, '04 Genets and Humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Genet 4- Genets and Humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

     //Hares and rabbits ==================================================================
    animalName = 'Hares'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Hares and rabbits',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Savannah hare, scrub hare, cape hare, riverine rabbit, red rock rabbits', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Savannah hare, scrub hare, cape hare, riverine rabbit, red rock rabbits');

        // Profile Information
        mdl.addProfile(animalID,
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
                '1.5-3.2kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Difference - body shape',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hares and rabbits 1- Difference - body shape.mp3');
        mdl.addAudio(animalID, '02 Difference - reproduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hares and rabbits 2- Difference - reproduction.mp3');
        mdl.addAudio(animalID, '03 Neglectful parents',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hares and rabbits 3- Neglectful parents.mp3');
        mdl.addAudio(animalID, '04 Disgusting habits',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hares and rabbits 4- Disgusting habits.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Hyrax (Procavia capensus) ==================================================================
    animalName = 'Hyrax'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Hyrax (Procavia capensus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Dassie, rock dassie, tree dassie', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Dassie, rock dassie, tree dassie');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Approximately rabbit sized; stocky build; back rounded to resemble a boulder; ears small and rounded; fur dull grey to dark brown on top, paler below; black eyes with lighter patches around eyebrows and mouth',
                // Confused With
                'each other, rock rabbits',
                'Rock dwelling species are predominantly diurnal, tree dwelling species mainly nocturnal', // Activity Period
                '±7-8 months', // Gestation Period
                '±12 years', // Lifespan
                // Diet
                'grasses, herbs, leaves, fruit and bark',
                'Vereaux eagle and other large birds of prey, caracal, leopard ', // Predators
                'Rock hyraxes found on rocky outcrops and hillsides, tree hyraxes found in dense woodland and forest such as dune forest ', // Habitat
                'Least Concern', // Red List Status
                'Unknown', // Population
                'No major threats, hunted locally and can become a pest', // Threats
                '40-60cm', // Length
                '25cm', // Height
                '2.5-5kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Influencing history',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hyrax 1- Influencing history.mp3');
        mdl.addAudio(animalID, '02 Unlikely relations',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hyrax 2- Unlikely relations.mp3');
        mdl.addAudio(animalID, '03 Strange body design',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hyrax 3- Strange body design.mp3');
        mdl.addAudio(animalID, '04 Body heat regulation',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hyrax 4- Body heat regulation.mp3');
        mdl.addAudio(animalID, '05 Social interaction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hyrax 5- Social interaction.mp3');
        mdl.addAudio(animalID, '06 Hyraxes and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hyrax 6- Hyraxes and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Honey badger ==================================================================
    animalName = 'Honey badger'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Honey badger (Mellivora capensis)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'honey badger, ratel', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'honey badger, ratel');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'black underparts and legs, silver-grey fur on top including head and tail; legs very short, body stickily built; tail is very short. ',
                // Confused With
                'striped weasel and striped polecats, but much larger than both',
                'mostly nocturnal, sometime active in early morning, late afternoon.', // Activity Period
                '±6 months', // Gestation Period
                '±20 years', // Lifespan
                // Diet
                'a variety of small prey including snakes, rodents, invertebrates, and many others. Also known for breaking over bee hives and eating the honey comb and bee larvae.',
                'Leopards, lions', // Predators
                'Found in just about every habitat from the Cape to India except the driest deserts', // Habitat
                'Least concern', // Red List Status
                'Decreasing', // Population
                'persecuted by beekeepers and small livestock farmers; body parts used in traditional medicine to endow the taker with bravery and tenacity.', // Threats
                '90-100cm ', // Length
                '30cm', // Height
                '8-14kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction - unusual relations',
                100, resourcesPrefix + name.toLowerCase()
                + '/Honey Badger 1- The most hardcore animal.mp3');
        mdl.addAudio(animalID, '02 Why live in water',
                100, resourcesPrefix + name.toLowerCase()
                + '/Honey Badger 2- Hardcore diet.mp3');
        mdl.addAudio(animalID, '03 Red sweat and pink milk',
                100, resourcesPrefix + name.toLowerCase()
                + '/Honey Badger 3- A taste for honey.mp3');
        mdl.addAudio(animalID, '04 Can hippos swim',
                100, resourcesPrefix + name.toLowerCase()
                + '/Honey Badger 4- Attack as a defense.mp3');
        mdl.addAudio(animalID, '05 A male dominated society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Honey Badger 5- Aggressive mating.mp3');
        mdl.addAudio(animalID, '06 Watery love- hippo mating',
                100, resourcesPrefix + name.toLowerCase()
                + '/Honey Badger 6- Honey badgers and people.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // African Wildcat ==================================================================
    animalName = 'Wildcat'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('African wildcat (Felis silvestris cafra)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            '', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'African Wildcat');

        // Profile Information
        mdl.addProfile(animalID,
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
                '2.5-6kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/African Wild Cat 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Wild ancestors of the domestic cat',
                100, resourcesPrefix + name.toLowerCase()
                + '/African Wild Cat 2- Wild ancestors of the domestic cat.mp3');
        mdl.addAudio(animalID, '03 Adaptable lifestyle and diet',
                100, resourcesPrefix + name.toLowerCase()
                + '/African Wild Cat 3- Adaptable lifestyle and diet.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Vervet monkey ==================================================================
    animalName = 'Vervet monkey'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Vervet monkey (Chlorocebus aethiops)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'vervet monkey, green monkey, grivet monkey', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '<b>Vervet Monkey Safety Advice</b>'
            + '<br/><br/>Vervet monkeys are very intelligent and have the potential to become problem animals when they become too used to humans. They are not very dangerous to people, although they have been known to bite if cornered. They are more of a danger to your food, comfort and possessions.'
            + '<br/><br/><b>Do not feed the vervet monkeys:<b/> vervet monkeys become problem animals when people feed them. They start to expect food to be given, and when it is not, they will take it by forcefully or guile.'
            + '<br/><br/><b>Don’t leave windows/doors/tents open:<b/> remember to close your window, doors and tents when you leave. '
            + '<br/><br/><b>Do not leave goods unattended:<b/> never leave goods, especially food lying around. Put away your rubbish in vervet monkey-proof bins. They have been known to steel phones, wallets and car keys.'
            + '<br/><br/><b>Don’t fight them:<b/> if a vervet monkey tries to grab something from you, let them have it. If you try fight them, they can become aggressive.'
            + '<br/><br/><b>Vervet monkey body language:<b/> a vervet monkey is showing aggression if it opens its eyes wide showing its white eyelids, bares its teeth, advances imposingly or vocalises. '
            + '<br/><br/><b>Your body language:<b/> If a vervet monkey acts aggressively, do not cower or run away. Stand tall and confident. Shout and make loud noises, and even pretend to throw something at them if they start to get too close.'
            + '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'vervet monkey, green monkey, grivet monkey');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'medium-sized monkey, silvery-grey coat; black face; long, thin tails; always found in groups; males larger, with large blue scrotum and red penis.',
                // Confused With
                'samango monkey',
                'diurnal', // Activity Period
                '±7 months', // Gestation Period
                '±10-12', // Lifespan
                // Diet
                'Mainly leaves, fruit, flowers, seeds and gum. Also known to eat insects, and small vertebrates.',
                'Eagles such as the marshal eagle, large snakes, medium to large carnivores, in particular leopards, also occasionally taken by baboons.', // Predators
                'Found mainly in savannahs with some degree of tree cover. Also found in thicket, woodland and riverine habtitats.', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threats, considered as an agricultural pest in many fruit growing areas, often killed as problem animals in reserves and lodges.', // Threats
                '90-130cm', // Length
                '0.4-0.5cm', // Height
                '2-8.5kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Vervet monkey.mp3', 19 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');


        // Audio
        mdl.addAudio(animalID, '01- Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Vervet Monkeys 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Life in the trees',
                100, resourcesPrefix + name.toLowerCase()
                + '/Vervet Monkeys 2- Life in the trees.mp3');
        mdl.addAudio(animalID, '03- Heirarchies in the troop',
                100, resourcesPrefix + name.toLowerCase()
                + '/Vervet Monkeys 3- Heirarchies in the troop.mp3');
        mdl.addAudio(animalID, '04- Communication- expressive faces, colour communication',
                100, resourcesPrefix + name.toLowerCase()
                + '/Vervet Monkeys 4- Communication- expressive faces, colour communication.mp3');
        mdl.addAudio(animalID, '05- Vocalisations and defensive strategy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Vervet Monkeys 5- Vocalisations and defensive strategy.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Pangolin ==================================================================
    animalName = 'Pangolin'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Pangolin (Manis temminckii)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Ground pangolin, scaly anteater, cape pangolin, South African pangolin', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Nocturnal Creatures', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Ground pangolin, scaly anteater, cape pangolin, South African pangolin');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Unmistakeable, covered in hard, brown scales, hunched posture.',
                // Confused With
                'Unmistakeable, covered in hard, brown scales, hunched posture.',
                'Nocturnal', // Activity Period
                '±4 months', // Gestation Period
                '±20 years', // Lifespan
                // Diet
                'feeds entirely on a particular species of ants and termites',
                'Occasionally eaten by leopards and lions', // Predators
                'A relatively wide habitat tolerance including grasslands, semi deserts and savannahs, do not occur in deserts or forests.', // Habitat
                'Vulnerable', // Red List Status
                'Decreasing', // Population
                'Pangolin meat is considered a delicacy in some Asian countries and they are increasingly being hunted for this purpose. Pangolin scales are used for a variety of medicinal purposes in Africa and Asia. Poaching is on the increase, mostly to supply the Asian market. In South Africa, electric fences kill between 2 and 13% of the South African population each year.', // Threats
                '70-100cm ', // Length
                '0.4cm', // Height
                '5-15kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');


        // Audio
        mdl.addAudio(animalID, '01- Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Pangolin 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Armour plated defences',
                100, resourcesPrefix + name.toLowerCase()
                + '/Pangolin 2- Armour plated defences.mp3');
        mdl.addAudio(animalID, '03- Veracious predators',
                100, resourcesPrefix + name.toLowerCase()
                + '/Pangolin 3- Veracious predators.mp3');
        mdl.addAudio(animalID, '04- Caring mothers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Pangolin 4- Caring mothers.mp3');
        mdl.addAudio(animalID, '04- Pangolins and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Pangolin 5- Pangolins and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Jackals (black-backed and side-striped) ==================================================================
    animalName = 'Jackals'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Black-backed Jackal (Canis mesomelas) and Side-striped jackal (Canis adustus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Jackals, BLACK-BACKED JACKAL, SIDE-STRIPED JACKAL', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Jackals, BLACK-BACKED JACKAL, SIDE-STRIPED JACKAL');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Slender, dog-like appearance; black-backed: distinct black saddle on its back; reddish-brown sides and face; fairly large, pointed ears; black, bushy tail; side-striped: mostly grey with a light and dark stripe down their sides; white-tipped tail; smaller ears than black-backed jackal.',
                // Confused With
                'Each other, cape fox, bat-eared fox, aardwolf  ',
                'Mostly nocturnal, but can be active in the mornings and evenings', // Activity Period
                '±2 months', // Gestation Period
                '±10 years', // Lifespan
                // Diet
                'generalists, will feed on carrion, invertebrates, small mammals, young antelope and fruit',
                'Lions, leopard, hyaena, pythons, large eagles ', // Predators
                'Black-backed: wide habitat tolerance, deserts to woodlands, prefers drier regions; Side-striped: prefers well watered, wooded areas but absent from forests.', // Habitat
                'Least Concern', // Red List Status
                'stable', // Population
                'Disease, particularly rabies can affect local populations, widely persecuted for killing livestock.', // Threats
                '96-120cm', // Length
                '40cm', // Height
                '6-12kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Jackal howl.mp3', 43 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Jackals 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Jackal society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Jackals 2- Jackal society.mp3');
        mdl.addAudio(animalID, '03 Cunning and adaptability',
                100, resourcesPrefix + name.toLowerCase()
                + '/Jackals 3- Cunning and adaptability.mp3');
        mdl.addAudio(animalID, '04 Jackals and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Jackals 4- Jackals and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Otter ==================================================================
    animalName = 'Otter'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Otters (Aonyx capensis &Lutra maculicollis )',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Cape clawless otter, Spotted-necked otter', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Cape clawless otter, Spotted-necked otter');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Cape clawless otter: relatively large size; dark-brown to black coat; white neck and chin; hunched posture when moving on land; sexes similar; Spotted-necked otter: smaller than spot-necked otter; underparts lighter, pale spots on throat, never far from permanent water.',
                // Confused With
                'each other, and with the water mongoose',
                'diurnal', // Activity Period
                '±2 months', // Gestation Period
                '±20 years', // Lifespan
                // Diet
                'Cape clawless otters eat mainly crabs but will take fish, frogs, molluscs and small mammals; spotted-necked otters eat mostly fish but also frogs, crabs, birds and insects.',
                'occasionally killed by crocodiles.', // Predators
                'Permanent water sources such as rivers, lakes and dams in a variety of habitats.', // Habitat
                'Least Concern', // Red List Status
                'Stable to decreasing', // Population
                'Alteration and degradation of freshwater and riparian habitats, reduction of water quality and clarity from pollution and soil erosion reducing hunting success, particularly for spotted necked otter. They are accidentally caught in fishing nets, or killed by fisherman in retaliation for steeling fish and damaging nets.', // Threats
                'Cape Clawless otter: 110-160cm | Spotted-necked otter: 90-100cm ', // Length
                'Cape Clawless otter: 0.4cm | Spotted-necked otter: 0.3cm', // Height
                'Cape Clawless otter: 10-19kg | Spotted-necked otter: 3.5kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');


        // Audio
        mdl.addAudio(animalID, '01- Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Otters 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Otter fur- safe from cold',
                100, resourcesPrefix + name.toLowerCase()
                + '/Otters 2- Otter fur- safe from cold.mp3');
        mdl.addAudio(animalID, '03- Expert fishermen',
                100, resourcesPrefix + name.toLowerCase()
                + '/Otters 3- Expert fishermen.mp3');
        mdl.addAudio(animalID, '04- Otters and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Otters 4- Otters and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
         mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot3.jpg');
          mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot4.jpg');
    });
    // =========================================================================

    //Civet ==================================================================
    animalName = 'Civit'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Civet (Civettictus civetta)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Civit', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Civit');

        // Profile Information
        mdl.addProfile(animalID,
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
                '8-16kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Poorly equipped to compete',
                100, resourcesPrefix + name.toLowerCase()
                + 'Civit 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Scent communication',
                100, resourcesPrefix + name.toLowerCase()
                + '/Civit 2- Scent communication.mp3');
        mdl.addAudio(animalID, '03 Social males, solitary females',
                100, resourcesPrefix + name.toLowerCase()
                + '/Civit 3- Scent communication.mp3');
        mdl.addAudio(animalID, '04 Civits in the perfume industry',
                100, resourcesPrefix + name.toLowerCase()
                + '/Civit 4- Civits in the perfume industry.mp3');
        mdl.addAudio(animalID, '05 Poisonous diet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Civit 5- Poisonous diet.mp3');
        mdl.addAudio(animalID, '05 Role in the ecosystem.mp3',
                100, resourcesPrefix + name.toLowerCase()
                + '/Civit 6- Role in the ecosystem.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Caracal ==================================================================
    animalName = 'Caracal'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Caracal (Caracal caracal)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'caracal, desert lynx', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'caracal, desert lynx');

        // Profile Information
        mdl.addProfile(animalID,
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
                '7-19kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + 'Caracal 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Ear tufts',
                100, resourcesPrefix + name.toLowerCase()
                + '/Caracal 2- Ear tufts.mp3');
        mdl.addAudio(animalID, '02 Incredible athleticism',
                100, resourcesPrefix + name.toLowerCase()
                + '/Caracal 3- Incredible athleticism.mp3');
        mdl.addAudio(animalID, '02 Adaptable hunters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Caracal 4- Adaptable hunters.mp3');
        mdl.addAudio(animalID, '05 Agricultural pests',
                100, resourcesPrefix + name.toLowerCase()
                + '/Caracal 5- Agricultural pests.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Aardwolf ==================================================================
    animalName = 'Aardwolf'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Aardwolf (Proteles cristatus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Aardwolf', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Carnivores (<20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Aardwolf');

        // Profile Information
        mdl.addProfile(animalID,
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
                '6-11kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardwolf 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Built to hunt termites',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardwolf 2- Built to hunt termites.mp3');
        mdl.addAudio(animalID, '03 A lifestyle shaped by termites',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardwolf 3- A lifestyle shaped by termites.mp3');
        mdl.addAudio(animalID, '04 Aardwolves and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardwolf 4- Aardwolves and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Steenbok ==================================================================
    animalName = 'Steenbok'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Steenbok',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Steenbok', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Antelope (<100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Steenbok');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Small antelope; Coat a uniform reddish-brown on back, sides and head, lighter on the belly; huge ears with black and white stripes; only males have short, straight, pointy horns.',
                // Confused With
                'oribi, grysbok, common duiker, suni, klipspringer',
                'Early morning and late afternoon', // Activity Period
                '±6 months', // Gestation Period
                '±10-12', // Lifespan
                // Diet
                'mixed feeders, taking grass, leaves, pods, flowers and fruits',
                'Taken by a range of predators, including large eagles, pythons, and carnivores larger than jackals.', // Predators
                'savannahs and woodlands, require some cover ', // Habitat
                'Least Concern', // Red List Status
                'Stable', // Population
                'No major threats. Locally threatened by overhunting and predation by domestic dogs that discover their helpless lambs lying out.', // Threats
                '0.7-0.9m', // Length
                '50-55cm', // Height
                '8-11kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Secretive habits',
                100, resourcesPrefix + name.toLowerCase()
                + '/Steenbok 1- Secretive habits.mp3');
        mdl.addAudio(animalID, '02 Defensive strategy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Steenbok 2- Defensive strategy.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //PORCUPINE==================================================================
    animalName = 'Porcupine'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Porcupine (Hystrix africaeaustralis)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'crested porcupine, cape porcupine', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Other Herbivores', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'crested porcupine, cape porcupine');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Unmistakeable, entire body covered with long, sharp, black and white quills.',
                // Confused With
                'the southern African hedgehog, which is much smaller',
                'Nocturnal', // Activity Period
                '±3 months', // Gestation Period
                '±25-30 years', // Lifespan
                // Diet
                'Plant material, especially bark, roots, tubers and bulbs, and fallen fruit. ',
                'Only occasionally eaten by experienced leopards.', // Predators
                'Wide habitat tolerance, including semi-desert, scrubland, savannah and light woodland.', // Habitat
                'Least concern', // Red List Status
                'Stable', // Population
                'No major threats, can live in human altered habitats and in close proximity to human habitation. Can damage crops, in particular root crops, and is sometimes considered an agricultural pest.', // Threats
                '75-100cm', // Length
                '50-70cm', // Height
                '10-24kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');


        // Audio
        mdl.addAudio(animalID, '01- Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Porcupine 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Ecosystem engineers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Porcupine 2- Ecosystem engineers.mp3');
        mdl.addAudio(animalID, '03- Awkward reproduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Porcupine 3- Awkward reproduction.mp3');
        mdl.addAudio(animalID, '04- Prickly defenses',
                100, resourcesPrefix + name.toLowerCase()
                + '/Porcupine 4- Prickly defenses.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Duiker ==================================================================
    animalName = 'Duiker'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Common duiker (Sylvicapra grimmia)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Common duiker, grey duiker', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Antelope (<100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Common duiker, grey duiker');

        // Profile Information
        mdl.addProfile(animalID,
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
                '18-22kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Ancient and intelligent antelope',
                100, resourcesPrefix + name.toLowerCase()
                + '/Common Duiker 1- Ancient and intelligent antelope.mp3');
        mdl.addAudio(animalID, '02 The herd- a complex society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Common Duiker 2- The herd- a complex society.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Aardvark ==================================================================
    animalName = 'Aardvark'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Aardvark (Orycteropus afer)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Aardvark, ant bear', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Nocturnal Creatures', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Aardvark, ant bear');

        // Profile Information
        mdl.addProfile(animalID,
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
                '40-70kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardvark 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Solitary termite hunters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardvark 2- Solitary termite hunters.mp3');
        mdl.addAudio(animalID, '03 The ultimate diggers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardvark 3- The ultimate diggers.mp3');
        mdl.addAudio(animalID, '04 Tongue and digestive system',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardvark 4- Tongue and digestive system.mp3');
        mdl.addAudio(animalID, '05 Relationship with humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Aardvark 5- Relationship with humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Serval ==================================================================
    animalName = 'Serval'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Serval (Leptailurus serval)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Small Carnivores (<20kg)', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Primate', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Serval');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Medium sized cat; slightly built with very long legs; straw-yellow fur with numerous black spots;  spots merge to form stripes along the back and head; relatively small head with huge ears; tail short and striped; black and white stripes on the back of ears; sexes similar.',
                // Confused With
                'Cheetah, leopard',
                'Mainly nocturnal but occasionally active at damn and dusk.', // Activity Period
                '±2.5 months', // Gestation Period
                '±10 years in the wild, 20 years in captivity', // Lifespan
                // Diet
                'Primarily feed on rodents but will take prey as large as hares or young antelope. They will also take birds, reptiles and insects.',
                'Lions, leopards, cheetahs, hyaenas, pythons, large eagles, crocodiles.', // Predators
                'Often found in marshes, reed beds or tall grasslands.', // Habitat
                'Least concern', // Red List Status
                'Stable', // Population
                'degradation and destruction of their wetland and grassland habitats is the main threat to this species. Their skins are used for ceremonial outfits, particularly in west Africa.', // Threats
                '90-120cm', // Length
                '50-65m', // Height
                '8-13kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');


        // Audio
        mdl.addAudio(animalID, 'Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Serval 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Built to catch rodents',
                100, resourcesPrefix + name.toLowerCase()
                + '/Serval 2- Built to catch rodents.mp3');
        mdl.addAudio(animalID, '03 Solitary loners',
                100, resourcesPrefix + name.toLowerCase()
                + '/Serval 3- Solitary loners.mp3');
         mdl.addAudio(animalID, '04 A life of danger',
                100, resourcesPrefix + name.toLowerCase()
                + '/Serval 4- A life of danger.mp3');
         mdl.addAudio(animalID, '04 Servals and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Serval 5- Servals and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map1.jpg');
        mdl.addMap(animalID, 'Map 2', resourcesPrefix + name.toLowerCase() + '/map2.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Baboon ==================================================================
    animalName = 'Baboon'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Baboon (Papio cynocephalus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'CHACMA BABOON, OLIVE BABOON, SAVANNAH BABOON', // Common Names
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
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'CHACMA BABOON, OLIVE BABOON, SAVANNAH BABOON');

        // Profile Information
        mdl.addProfile(animalID,
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
                'Males: 25 – 45kg; Females: 12 – 20kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Baboon sound.mp3', 23 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        // Audio
        mdl.addAudio(animalID, '01 The troop centre of baboon society',
                100, resourcesPrefix + name.toLowerCase()
                + '/01 The troop centre of baboon society.mp3');
        mdl.addAudio(animalID, '02 Grooming and communication',
                100, resourcesPrefix + name.toLowerCase()
                + '/02 Grooming and communication 1.mp3');
        mdl.addAudio(animalID, '03 Baboon godfathers',
                100, resourcesPrefix + name.toLowerCase()
                + '/03 Baboon godfathers.mp3');
        mdl.addAudio(animalID, '04 Baboon males - defence and dominance',
                100, resourcesPrefix + name.toLowerCase()
                + '/04 Baboon males - defence and dominance.mp3');
        mdl.addAudio(animalID, '05 Colour communication',
                100, resourcesPrefix + name.toLowerCase()
                + '/05 Colour communication.mp3');
        mdl.addAudio(animalID, '06 Baby baboons the centre of attention',
                100, resourcesPrefix + name.toLowerCase()
                + '/06 Baby baboons the centre of attention.mp3');
        mdl.addAudio(animalID, '07 Education and innovation on  the troop',
                100, resourcesPrefix + name.toLowerCase()
                + '/07 Education and innovation on  the troop.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

//warthog ==================================================================
    animalName = 'Warthog'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('warthog (Phacochoerus africanus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'warthog', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Other Herbivores', // Category
            '<b>Warthog safety advice</b>'
            + '<br/><br/><b>Be cautious:</b> some lodges have warthogs that walk around the camp during the day. Some of these animals are relatively tame, and may even approach you. Remember that these are still wild animals. Do not feed them, as they may become intimidating when they start to expect food. Do not chase them or act in a threatening manner towards them, as they may react aggressively, and their tusks can be deadly.'
            + '<br/><br/><b>Don’t block a warthog burrow:</b> if you see a large hole in the ground that could be a warthog burrow, do not stand in the entrance, blocking their escape route. Warthogs always enter their burrows backwards, and when trapped inside, will burst out tusks first. They are extremely powerful, and can cause fatal injuries with their tusks.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'warthog');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'pig-like appearance; leathery, grey skin covered with sparse, wiry hair; a long mane of wiry brown hair along the neck and back; upward-curving tusks sticking out of the mouth; prominent warts on face; males larger, with two pairs of warts on the face, one under the eyes and one on the sides of the nose, females only have a pair under the eyes.',
                // Confused With
                'bushpig',
                'Mostly diurnal', // Activity Period
                '±8 months', // Gestation Period
                '±15 years', // Lifespan
                // Diet
                'prefer new growth grasses, can often be found in burnt areas',
                'Lions, leopards, hyaenas, wild dogs, cheetahs', // Predators
                'savannah grassland and woodland with good surface water.', // Habitat
                'Least concern', // Red List Status
                'decreasing', // Population
                'Hunting and habitat degradation have eliminated the tsessebe from much of its former range. They are extremely adversely affected by cattle grazing.', // Threats
                '190cm', // Length
                '120cm', // Height
                '120-140kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Why do they have warts',
                100, resourcesPrefix + name.toLowerCase()
                + '/Warthog 1- Why do they have warts_.mp3');
        mdl.addAudio(animalID, '02 Early lives',
                100, resourcesPrefix + name.toLowerCase()
                + '/Warthog 2- Early lives.mp3');
        mdl.addAudio(animalID, '03 Why do warthogs live in burrows',
                100, resourcesPrefix + name.toLowerCase()
                + '/Warthog 3- Why do warthogs live in burrows_.mp3');
        mdl.addAudio(animalID, '04 Why do warthogs bath in mud',
                100, resourcesPrefix + name.toLowerCase()
                + '/Warthog 4- Why do warthogs bath in mud_.mp3');
        mdl.addAudio(animalID, '05 Diet and feeding habits',
                100, resourcesPrefix + name.toLowerCase()
                + '/Warthog 5- Diet and feeding habits.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Leopard ==================================================================
    animalName = 'Leopard'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Leopard (Panthera pardus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Leopard', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Carnivores (>20kg)', // Category
            '<b>Leopard safety advice</b>'
            + '<br/><br/>Seeing a leopard is a rare and wonderful experience. This advice will help you to get the most out of your sighting while staying safe at the same time.'
            + '<br/><br/><b>Don’t scream:</b> the excitement of seeing a leopard often causes people to shout out. This often scares them off and ends the sighting.'
            + '<br/><br/><b>Be decisive, but be cautious:</b> leopard sightings are often fleeting, so when you see one you should decide where you will get a good view, and move there relatively swiftly. Be smooth and cautious when doing so though, as too rapid an approach could also scare the animal off.'
            + '<br/><br/><b>Be respectful:</b> don’t lean out of the vehicle, tease or throw things at the animal or get out of the car. Remember that the animal perceives the vehicle as one object, but when you stand up or lean out of it then the animal can identify individuals on the back, which can make them aggressive.'
            + '<br/><br/><b>Which individuals to look out for:</b> be particularly respectful of mothers with cubs and wounded leopards'
            + '<br/><br/><b>Leopard body language:</b> a leopard will usually look at you then move off if it feels that you have invaded their space. If they feel threatened they might flatten their ears while staring at you. If they growl or hiss they are giving you a warning that you need to move away.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Leopard');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Large, stickily built cat; fur a russet yellow colour with rosette spots covering the body; lacks the black tear-drop lines of the cheetah; ears rounded; head large and powerful; sexes similar, males larger than females.',
                // Confused With
                'cheetah, serval',
                'mainly nocturnal, but will occasionally hunt and patrol in the mornings and evenings.', // Activity Period
                '±3 months', // Gestation Period
                '±11-15 years', // Lifespan
                // Diet
                'a huge variety of prey species including rodents, reptiles, birds, large mammals and even fish. Will also eat carrion.',
                'Lions, hyaenas', // Predators
                'Occur in most habitats from Southern Africa to East Asia', // Habitat
                'Near threatened', // Red List Status
                'decreasing', // Population
                'Widely persecuted by livestock and wildlife farmers for real or perceived livestock killing. They often fall victim to shooting, poisoning and leg traps. Habitat loss is also a problem, but leopards can often survive in close proximity to people. Their body parts are used in traditional medicine, and their skins are used in traditional ceremonial dress.', // Threats
                '180cm', // Length
                '60-80cm', // Height
                '20-90kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Leopard roar.mp3', 22 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image7.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Leopard 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Adaptability - key to leopard success',
                100, resourcesPrefix + name.toLowerCase()
                + '/Leopard 2- Adaptability - key to leopard success.mp3');
        mdl.addAudio(animalID, '03 Opportunistic hunters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Leopard 3- Opportunistic hunters.mp3');
        mdl.addAudio(animalID, '04 Masters of surprise',
                100, resourcesPrefix + name.toLowerCase()
                + '/Leopard 4- Masters of surprise.mp3');
        mdl.addAudio(animalID, '05 Scary weaponry',
                100, resourcesPrefix + name.toLowerCase()
                + '/Leopard 5- Scary weaponry.mp3');
        mdl.addAudio(animalID, '06 Hoisting kills into trees',
                100, resourcesPrefix + name.toLowerCase()
                + '/Leopard 6- Hoisting kills into trees.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

     //Bushpig ==================================================================
    animalName = 'Bushpig'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bushpig (Potomochoerus larvatus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Bushpig', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Other Herbivores', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Bushpig');

        // Profile Information
        mdl.addProfile(animalID,
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
                '60-110kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Bush Pig 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Adaptable diet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Bush Pig 2- Adaptable diet.mp3');
        mdl.addAudio(animalID, '02 Social structures',
                100, resourcesPrefix + name.toLowerCase()
                + '/Bush Pig 3- Social structures.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //wild dogs ==================================================================
    animalName = 'Wild dog'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('wild dogs (Lycaon pictus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'wild dog, painted dog, African hunting dog', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Carnivores (>20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'wild dog, painted dog, African hunting dog');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'typical dog-like appearance; blotched black, white and tan coat; white tipped-tails; body slender with long legs; large, rounded ears.',
                // Confused With
                'brown hyaena, spotted hyaena',
                'diurnal', // Activity Period
                '±3.5 months', // Gestation Period
                '±6-12 years', // Lifespan
                // Diet
                'mainly medium sized antelope such as impala; but will take smaller prey such as hares, prey as large as zebra or young buffalo.',
                'Lions, hyaenas, leopards', // Predators
                'savannahs, grasslands and woodlands', // Habitat
                'endangered', // Red List Status
                'decreasing', // Population
                'habitat fragmentation and isolation of populations in protected areas is one of the major threats. Dogs are regularly killed by snares set on the periphery of reserves. Although protected in most of their range, they are killed by farmers and herders trying to protect their herds. Diseases such as rabies and canine distemper passed by domestic dogs. Competition with other large predators keeps them at low population densities in within protected areas.', // Threats
                '110-150m', // Length
                '60-80m', // Height
                '20-30kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Wild dog.mp3', 47 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');

        // Audio
        mdl.addAudio(animalID, 'Wild dog',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild dog.mp3');
        mdl.addAudio(animalID, '01 A poorly deserved reputation',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog 1- A poorly deserved reputation.mp3');
        mdl.addAudio(animalID, '02 A It\'s all about the family',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog 2- It\'s all about the family.mp3');
        mdl.addAudio(animalID, '03 Vocalizations, the definition of excitement',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog 3- Vocalizations, the definition of excitement.mp3');
        mdl.addAudio(animalID, '04 Communicating with their tails',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog 4- Communicating with their tails.mp3');
        mdl.addAudio(animalID, '05 It takes a pack to raise a pup',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog 5- It takes a pack to raise a pup.mp3');
        mdl.addAudio(animalID, '06 Caring for pack members',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog 6- Caring for pack members.mp3');
        mdl.addAudio(animalID, 'Wild Dog special 1- Hunting strategy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog special 1- Hunting strategy.mp3');
        mdl.addAudio(animalID, 'Wild Dog special 2- Why are wild dogs endangered',
                100, resourcesPrefix + name.toLowerCase()
                + '/Wild Dog special 2- Why are wild dogs endangered_.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

     //Bushbuck ==================================================================
    animalName = 'Bushbuck'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Bushbuck (Tragelaphus scriptus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Bushbuck', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Antelope (<100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Bushbuck');

        // Profile Information
        mdl.addProfile(animalID,
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
                '30-45kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Physical description',
                100, resourcesPrefix + name.toLowerCase()
                + '/Bush Buck 1- Physical description.mp3');
        mdl.addAudio(animalID, '02 Placing your hind feet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Bush Buck 2- Placing your hind feet.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
    });
    // =========================================================================

    //Springbok ==================================================================
    animalName = 'Springbok'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Springbok (Antidorcas marsulialis)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Springbok', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Antelope (<100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Springbok');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'a medium sized antelope;  russet-brown coat on back, distinct black stripe on the sides, white belly; white face with black strip through eye; white patch over rump; horns present on both males and females, turn in at the top.',
                // Confused With
                'impala, various gazelle species',
                'Diurnal', // Activity Period
                '±5.5 months', // Gestation Period
                '±7-9', // Lifespan
                // Diet
                'Generalist feeders, can switch between grass and leaves depending on conditions. Will also dig up bulbs.',
                'Adults taken by all carnivores larger than a jackal, young taken by large eagles, pythons and carnivores larger than the African wildcat.', // Predators
                'prefer arid grasslands and scrublands. ', // Habitat
                'Least Concern', // Red List Status
                'Increasing', // Population
                'No major threats. Fences, disease and automatic riffles put a stop to the great springbok migrations in the early 20th century.', // Threats
                '120-140m ', // Length
                '70-80cm', // Height
                '35-45kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');


        // Audio
        mdl.addAudio(animalID, 'Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Springbok 1- Why is the springbok South Africa\'s national animal_.mp3');
        mdl.addAudio(animalID, '02- Survivors',
                100, resourcesPrefix + name.toLowerCase()
                + '/Springbok 2- Survivors.mp3');
        mdl.addAudio(animalID, '03 The great springbok migration',
                100, resourcesPrefix + name.toLowerCase()
                + '/Springbok 3- The great springbok migration.mp3');
        mdl.addAudio(animalID, '04 Why are they called springbok',
                100, resourcesPrefix + name.toLowerCase()
                + '/Springbok 4- why are they called springbok.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Brown hyaena ==================================================================
    animalName = 'Brown Hyaena'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Brown hyaena (Hyaena brunnea)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Brown hyaena', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Carnivores (>20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Brown hyaena');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Large, dog-like appearance; back slopes down from shoulders to rump; large head; pointed ears; long, shaggy brown hair; hair on neck slightly lighter than body; sexes similar',
                // Confused With
                'spotted hyaena, aardwolf ',
                'Nocturnal', // Activity Period
                '±3 months', // Gestation Period
                'Not Listed', // Lifespan
                // Diet
                'Carrion, small vertebrates, insects, fruit',
                'Lions, spotted hyaena', // Predators
                'wide habitat tolerance, prefers drier regions of southern Africa, thrives in the absence of lions and spotted hyaenas', // Habitat
                'Near threatened', // Red List Status
                'Decreasing', // Population
                'Shot, poisoned and trapped by farmers in predator control programmes ', // Threats
                '1.3-1.6m ', // Length
                '80cm', // Height
                '42-47kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Brown Hyaena 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Misunderstood carnivores',
                100, resourcesPrefix + name.toLowerCase()
                + '/Brown Hyaena 2- Misunderstood carnivores.mp3');
        mdl.addAudio(animalID, '03 Scavengers extrodinaire',
                100, resourcesPrefix + name.toLowerCase()
                + '/Brown Hyaena 3- Scavengers extrodinaire.mp3');
        mdl.addAudio(animalID, '04 Adaptable diet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Brown Hyaena 4- Adaptable diet.mp3');
        mdl.addAudio(animalID, '05 Caring in the clan',
                100, resourcesPrefix + name.toLowerCase()
                + '/Brown Hyaena 5- Caring in the clan.mp3');
        mdl.addAudio(animalID, '06 Sent communication',
                100, resourcesPrefix + name.toLowerCase()
                + '/Brown Hyaena 5- Sent communication.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Cheetah ==================================================================
    animalName = 'Cheetah'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Cheetah (Ocinonyx jubatus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Cheetah', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Carnivores (>20kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'caracal, desert lynx');

        // Profile Information
        mdl.addProfile(animalID,
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
                '40-60kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Cheetah.mp3', 28 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Poorly equipped to compete',
                100, resourcesPrefix + name.toLowerCase()
                + 'Cheetah 1- Poorly equipped to compete.mp3');
        mdl.addAudio(animalID, '02 Vulnerable from birth',
                100, resourcesPrefix + name.toLowerCase()
                + '/Cheetah 2- Vulnerable from birth.mp3');
        mdl.addAudio(animalID, '03 Social males, solitary females',
                100, resourcesPrefix + name.toLowerCase()
                + '/Cheetah 3- Social males, solitary females.mp3');
        mdl.addAudio(animalID, '04 Avoiding competition - daylight hunters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Cheetah 4- Avoiding competition - daylight hunters.mp3');
        mdl.addAudio(animalID, '05 Cheetahs and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Cheetah 5- Cheetahs and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Spotted hyaena ==================================================================
    animalName = 'Spotted Hyaena'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Spotted hyaena (Crocuta crocuta)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Spotted hyaena', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Carnivores (>20kg)', // Category
            '<b>Spotted hyaena safety advice</b>'
            + '<br/><br/>Spotted hyaenas are generally not very aggressive to people or vehicles, but there are some situations that you should be wary of. '
            + '<br/><br/><b>Be cautious:</b> always approach slowly and carefully, and do not force yourself into their space. If you see one hyaena, look all around you to determine if there are any others around.'
            + '<br/><br/><b>Be respectful:</b> don’t lean out of the vehicle, tease or throw things at the animal or get out of the car. Remember that the animal perceives the vehicle as one object, but when you stand up or lean out of it then the animal can identify individuals on the back, which can cause them to run away or become aggressive.'
            + '<br/><br/><b>Don’t feed hyaenas:</b> some hyaenas will prowl around lodges and campsites at night in the hope of an easy meal. By feeding them you can make them dependent on humans, and hyaenas may become intimidating or destructive when trying to get food from people.'
            + '<br/><br/><b>Don’t keep food in the tent:</b> hyaenas are able to enter some campsites. Never keep food, especially meat like biltong, in the tent with you as you sleep. Hyeanas have been known to bite through a tent to try to get at an enticing smell, and ended up grabbing a person instead.'
            + '<br/><br/><b>Don’t leave food lying around:</b> never leave any food lying unguarded at night when hyaenas are around.</b> They will easily chew through cooler boxes or plastic crates to get to something they want, so make sure everything is locked away.'
            + '<br/><br/><b>Be wary of hyaenas in clans:</b> hyaenas are usually quite scared of people, and will run away if you shout and chase them. However, be careful if they are in a group, as this gives them confidence, and they may become aggressive if challenged. '
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Spotted hyaena');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'A large, dog-like carnivore; huge head; round ears; back slopes downwards from shoulders to hips; coat a shaggy brown with irregular black spots.',
                // Confused With
                'Brown hyaen ',
                'Nocturnal', // Activity Period
                '±4 months', // Gestation Period
                '±12-20', // Lifespan
                // Diet
                'They hunt mainly medium to large antelope but will take just about anything they can catch. Are also specialist scavengers capable of crushing large bones in their powerful jaws.',
                'Lions', // Predators
                'Wide habitat tolerance, only require good food and water sources. Absent from driest deserts and rainforests.', // Habitat
                'Least Concern', // Red List Status
                'decreasing', // Population
                'Often shot, poisoned or trapped by livestock farmers, particularly outside of protected areas. Habitat destruction and fragmentation is having a negative effect on them. Their prey base is being depleted across their range, and their body parts are used in traditional medicine.', // Threats
                '120-180cm', // Length
                '70-90cm', // Height
                '60-85kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Hyaena noise.mp3', 46 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Female dominated societies',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 2- Female dominated societies.mp3');
        mdl.addAudio(animalID, '03 Are they hermaphrodites',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 3- Are they hermaphrodites_.mp3');
        mdl.addAudio(animalID, '04 Dangerous siblings',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 4- Dangerous siblings.mp3');
        mdl.addAudio(animalID, '05 Territoriality and communication',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 5- Territoriality and communication.mp3');
        mdl.addAudio(animalID, '06 Hunting with stamina',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 6- Hunting with stamina.mp3');
        mdl.addAudio(animalID, '06 Master scavengers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 7- Master scavengers.mp3');
        mdl.addAudio(animalID, '06 Hyaenas, lions and other carnivores',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 8- Hyaenas, lions and other carnivores.mp3');
        mdl.addAudio(animalID, '06 Hyaenas and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Spotted Hyaena 9- Hyaenas and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Impala ==================================================================
    animalName = 'Impala'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Impala (Aepyceros melampus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Impala', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Antelope (<100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Dassie, rock dassie, tree dassie');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'long legs; reddish-brown fur on the back, and sides white belly; black tuft of fur on ankles; distinctive black and white “M” on backside; Males larger than females; only males have lyrate horns.',
                // Confused With
                'springbok, lechwe, several gazelle species',
                'Mainly diurnal', // Activity Period
                '±6.5 months', // Gestation Period
                '±10-12 years', // Lifespan
                // Diet
                'mixed feeders – have the ability to switch between grass and leaves depending on availability.',
                'Lions, hyaenas, leopards, cheetahs, wild dogs, young may be taken by caracals, jackals, baboon, large eagles and large snakes', // Predators
                'Prefer ecotones – the transition zones between grasslands and woodlands. Require cover and good water sources. ', // Habitat
                'Least Concern', // Red List Status
                'stable', // Population
                'No major threats, regularly killed for food, popular with sport hunters.', // Threats
                '140cm', // Length
                '80-90cm', // Height
                '40-50kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Impala call.mp3', 32 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Grooming to control ticks',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 2- Grooming to control ticks.mp3');
        mdl.addAudio(animalID, '03 Camouflage',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 3- Camouflage.mp3');
        mdl.addAudio(animalID, '04 Unique amongst antelope',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 4- Unique amongst antelope.mp3');
        mdl.addAudio(animalID, '05 The most successful antelope in Africa',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 5- The most successful antelope in Africa.mp3');
        mdl.addAudio(animalID, '06 Secret to success 1- be a generalist',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 6- Secret to success 1- be a generalist.mp3');
        mdl.addAudio(animalID, '07 Secret to success 2- be social',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 7- Secret to success 2- be social.mp3');
        mdl.addAudio(animalID, '08 Secret to success 3- mass breeding, mass birth',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 8- Secret to success 3- mass breeding, mass birth.mp3');
        mdl.addAudio(animalID, '09 Stay one step ahead',
                100, resourcesPrefix + name.toLowerCase()
                + '/Impala 9- Secret to success 4- stay one step ahead.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Blesbok and Bontebok   ==================================================================
    animalName = 'Blesbok'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Blesbok and Bontebok (Damaliscus pygargus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Blesbok, bontebok', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Small Antelope (<100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Blesbok, Bontebok');

        // Profile Information
        mdl.addProfile(animalID,
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
                '60-70Kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Blesbok and Bontebok',
                100, resourcesPrefix + name.toLowerCase()
                + '/Blesbok 1- Blesbok and Bontebok.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Lion ==================================================================
    animalName = 'Lion'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Lion (Panthera leo)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Lion', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Carnivores (>20kg)', // Category
            '<b>Lion safety advice</b>'
            + '<br/><br/><b>Be cautious:</b> always approach slowly and carefully, and do not force yourself into their space. If you see one lion, look all around you to determine the position of other pride members.'
            + '<br/><br/><b>Plan your retreat:</b> the driver should be aware of the route they will take to back away if the lion shows aggression'
            + '<br/><br/><b>Be respectful:</b> don’t lean out of the vehicle, tease or throw things at the animal or get out of the car. Remember that the animal perceives the vehicle as one object, but when you stand up or lean out of it then the animal can identify individuals on the back, which can make them aggressive.'
            + '<br/><br/><b>Don’t disturb a feeding lion:</b> Lions get grumpy when they feed, so keep a safe distance if they are on a kill. '
            + '<br/><br/><b>Beware the curious lion:</b>  Lions have been known to chew on cars out of curiosity. It may seem cute at first if a lion shows interest in your car, but it will stop being funny when they pop your tyre or bit off your wing mirror. If a lion starts sniffing around your car, close the windows and try to move away. '
            + '<br/><br/><b>Lion body language:</b> lions will usually look at you then move off if they feel that you have invaded their space. If they feel threatened they might flatten their ears while staring at you. If they growl or charge at you, they are telling you to get away. Don’t panic, close the windows and make a fast but safe retreat.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Lion');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Huge, powerful cat; coat uniformly straw-yellow coloured; males larger than females with a mane of long hair around the head and neck.',
                // Confused With
                'unmistakeable',
                'mainly nocturnal, but will occasionally hunt and patrol in the mornings and evenings.', // Activity Period
                '±3.5 month', // Gestation Period
                '±11-15 years', // Lifespan
                // Diet
                'Mostly large prey species such as large antelope but will take smaller prey when pressed. Will often kill smaller predators and stealing their kills, and will often eat carrion.',
                'cubs killed by lions and leopards', // Predators
                'wide habitat tolerance, from deserts to woodlands.', // Habitat
                'Vulnerable', // Red List Status
                'Decreasing – particularly ', // Population
                'Habitat fragmentation and isolation of populations within protected areas is a major risk. Lions are often persecuted by livestock farmers for killing livestock. Lions are popular with trophy hunters. Lion body parts are used for traditional medicine in Africa and Asia, and there is a growing market for lion meat in the bush meat trade. Over-hunting of their prey base is also having a detrimental effect.', // Threats
                '250-320cm ', // Length
                '110-120cm', // Height
                '110-250kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Lion roar.mp3', 31 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image7.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 The social cats',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 2- The social cats.mp3');
        mdl.addAudio(animalID, '04 Scent communication',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 3- Scent communication.mp3');
        mdl.addAudio(animalID, '04 What&#39;s in a roar',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 4- What&#39;s in a roar_.mp3');
        mdl.addAudio(animalID, '05 Vulnerable at birth',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 5- Vulnerable at birth.mp3');
        mdl.addAudio(animalID, '06 Male lions - a battle for supremacy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 6- Male lions - a battle for supremacy.mp3');
        mdl.addAudio(animalID, '06 Male lions - serial cub killers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 7- Male lions - serial cub killers.mp3');
        mdl.addAudio(animalID, '08 Male lions - serial cub killers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 8- Male lions - serial cub killers.mp3');
        mdl.addAudio(animalID, '09 Built to kill',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 9- Built to kill.mp3');
        mdl.addAudio(animalID, '10 Hunting alone',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 10- Hunting alone.mp3');
        mdl.addAudio(animalID, '11 Cooperative hunters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 11- Cooperative hunters.mp3');
        mdl.addAudio(animalID, '12 Serious appetites',
                100, resourcesPrefix + name.toLowerCase()
                + '/Lions 12- Serious appetites.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Tsessebe ==================================================================
    animalName = 'Tsessebe'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Tsessebe (Damaliscus lunatus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Tsessebe, topi, tiang', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Tsessebe, topi, tiang');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Back slopes downward from shoulders to hips; reddish brown body that has a scorched appearance; lighter brown “stockings”; long black face; short, slightly twisted horns; sexes similar.',
                // Confused With
                'Hartebeests, blesbok, wildebeest.',
                'Mostly diurnal', // Activity Period
                '±8 months', // Gestation Period
                '±15 years', // Lifespan
                // Diet
                'prefer new growth grasses, can often be found in burnt areas',
                'Lions, leopards, hyaenas, wild dogs, cheetahs', // Predators
                'savannah grassland and woodland with good surface water.', // Habitat
                'Least concern', // Red List Status
                'decreasing', // Population
                'Hunting and habitat degradation have eliminated the tsessebe from much of its former range. They are extremely adversely affected by cattle grazing.', // Threats
                '190cm', // Length
                '120cm', // Height
                '120-140kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');

        // Audio
        mdl.addAudio(animalID, '01 One of the most abundant antelope in Africa',
                100, resourcesPrefix + name.toLowerCase()
                + '/Tsessebe 1- One of the most abundant antelope in Africa.mp3');
        mdl.addAudio(animalID, '02 The fastest antelope in Africa',
                100, resourcesPrefix + name.toLowerCase()
                + '/Tsessebe 2- The fastest antelope in Africa.mp3');
        mdl.addAudio(animalID, '03 Migrating in search of grass and mating',
                100, resourcesPrefix + name.toLowerCase()
                + '/Tsessebe 3- Migrating in search of grass and mating.mp3');
        mdl.addAudio(animalID, '04 Tsessebe and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Tsessebe 4- Tsessebe and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Gemsbok ==================================================================
    animalName = 'Gemsbok'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Gemsbok (Oryx gazella)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Gemsbok, oryx, East African Oryx', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Gemsbok, oryx, East African Oryx');

        // Profile Information
        mdl.addProfile(animalID,
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
                '210-240kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Magical arid specialists',
                100, resourcesPrefix + name.toLowerCase()
                + 'Gemsbok 1- Magical arid specialists.mp3');
        mdl.addAudio(animalID, '02 Attaining water in the desert',
                100, resourcesPrefix + name.toLowerCase()
                + '/Gemsbok 2- Attaining water in the desert.mp3');
        mdl.addAudio(animalID, '03 Water retention',
                100, resourcesPrefix + name.toLowerCase()
                + '/Gemsbok 3- Water retention.mp3');
        mdl.addAudio(animalID, '04 Temperature regulation',
                100, resourcesPrefix + name.toLowerCase()
                + '/Gemsbok 4- Temperature regulation.mp3');
        mdl.addAudio(animalID, '05 Gemsbok and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Gemsbok 5- Gemsbok and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Sable ==================================================================
    animalName = 'Sable'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Sable antelope (Hippotragus niger)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Sable antelope, giant sable antelope', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Sable antelope, giant sable antelope');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Striking looking antelope; distinctive dark brown to black coat, white belly; face a conspicuous black and white mask; extremely long, ridged horns that curve backwards; females smaller than males with brown coat and smaller horns.',
                // Confused With
                'Roan, gemsbok',
                'Mostly early morning and late afternoon', // Activity Period
                '±9 months', // Gestation Period
                '±16-18 years', // Lifespan
                // Diet
                'Fussy eaters, preferring long grass, but will switch to browse when necessary.',
                'Lions, spotted hyaena, leopards and wild dogs.', // Predators
                'they are “edge species”, preferring mixed grassland and woodlands with dense stands of long grass. They avoid dense woodland or short grasslands', // Habitat
                'Least concern', // Red List Status
                'Stable', // Population
                'Sable have disappeared from much of their former range because of habitat loss and poaching for meat. They are stable in other parts of their range, and are popular with sport hunters.', // Threats
                '2.1-2.3m', // Length
                '1.3-1.4m', // Height
                '180-270kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');


        // Audio
        mdl.addAudio(animalID, 'Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Sable 1- Introduction.mp3');
        mdl.addAudio(animalID, '02- Fussy eaters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Sable 2- Fussy eaters.mp3');
        mdl.addAudio(animalID, '03 Social structures and predator defence',
                100, resourcesPrefix + name.toLowerCase()
                + '/Sable 3- Social structures and predator defence.mp3');
         mdl.addAudio(animalID, '04 Glorious males',
                100, resourcesPrefix + name.toLowerCase()
                + '/Sable 4- Glorious males.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //waterbuck ==================================================================
    animalName = 'Waterbuck'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('waterbuck',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'waterbuck', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '<b>Warthog safety advice</b>'
            + '<br/><br/><b>Be cautious:</b> some lodges have warthogs that walk around the camp during the day. Some of these animals are relatively tame, and may even approach you. Remember that these are still wild animals. Do not feed them, as they may become intimidating when they start to expect food. Do not chase them or act in a threatening manner towards them, as they may react aggressively, and their tusks can be deadly.'
            + '<br/><br/><b>Don’t block a warthog burrow:</b> if you see a large hole in the ground that could be a warthog burrow, do not stand in the entrance, blocking their escape route. Warthogs always enter their burrows backwards, and when trapped inside, will burst out tusks first. They are extremely powerful, and can cause fatal injuries with their tusks.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'waterbuck');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Large antelope; cshaggy brown coat, long, straggly hair under the neck; distinctive white ring on backside (solid white patch in northern subspecies); extremely large ears; males larger; only males have long, forward curving horns with prominent ridges.',
                // Confused With
                'lechwe, puku, roan, kudu',
                'diurnal', // Activity Period
                '±9.5 months', // Gestation Period
                '±10-12 years', // Lifespan
                // Diet
                'grazers, feeding mainly on grass, although will occasionally eat water plants.',
                'Lions, hyaenas, wild dogs, leopards, crocodiles', // Predators
                'permanent water sources in grasslands, savannahs and woodlands. Require good grazing in close proximity, prefer areas with long grasses or reed beds.', // Habitat
                'Least Concern', // Red List Status
                'decreasing', // Population
                'No major threats, but is now absent from much of its former range due to over-hunting, destruction and degradation of fresh water habitats.', // Threats
                '190cm', // Length
                '1.2-1.4m', // Height
                '250-280kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Why have a ring on your bum',
                100, resourcesPrefix + name.toLowerCase()
                + '/Waterbuck 1- Why have a ring on your bum_.mp3');
        mdl.addAudio(animalID, '02 A body adapted to water',
                100, resourcesPrefix + name.toLowerCase()
                + '/Waterbuck 2- A body adapted to water.mp3');
        mdl.addAudio(animalID, '03 Lifestyles shaped by water',
                100, resourcesPrefix + name.toLowerCase()
                + '/Waterbuck 3- Lifestyles shaped by water.mp3'); // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Blue wildebeest ==================================================================
    animalName = 'Wildebeest'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Blue wildebeest (Connochaetes taurinus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'blue wildebeest, common wildebeest, brindled gnu', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'blue wildebeest, common wildebeest, brindled gnu');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'downward sloping back; dark grey coat with dark vertical striped down sides; black tail and mane; broad face; sexes similar; males slightly larger; both have horns that grow outwards and upwards from the head',
                // Confused With
                'black wildebeest, buffalo, ',
                'Diurnal', // Activity Period
                '±8 months', // Gestation Period
                'Not Listed', // Lifespan
                // Diet
                'grazers, prefer short to medium length green grass',
                'Lions, leopards, hyaena, wild dog, cheetah', // Predators
                'savannahs, grasslands and woodlands', // Habitat
                'Least concern', // Red List Status
                'Stable', // Population
                'Poaching, livestock framing, barriers to their migratory routes e.g. roads, fences, international boundaries', // Threats
                '2m', // Length
                '1.3-1.5m', // Height
                '180-250kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Wildebeest noise.mp3', 11 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Blue Wildebeest 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 The great migration',
                100, resourcesPrefix + name.toLowerCase()
                + '/Blue Wildebeest 2 The great migration.mp3');
        mdl.addAudio(animalID, '03 Wildebeest 3- Mating on the move',
                100, resourcesPrefix + name.toLowerCase()
                + '/Blue Wildebeest 3- Mating on the move.mp3');
        mdl.addAudio(animalID, '04 Ecological effects of the migration',
                100, resourcesPrefix + name.toLowerCase()
                + '/Blue Wildebeest 4- Ecological effects of the migration.mp3');
        mdl.addAudio(animalID, '05 Humans and wildebeest',
                100, resourcesPrefix + name.toLowerCase()
                + '/Blue Wildebeest 5- Humans and wildebeest.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    // Buffalo ==================================================================
    animalName = 'Buffalo'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('African buffalo (Cycerus caffer)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'African buffalo, Cape buffalo', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Giant herbivores (>300kg)', // Category
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
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'African buffalo, Cape buffalo');

        // Profile Information
        mdl.addProfile(animalID,
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
                '550-700kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Fearsome foes',
                100, resourcesPrefix + name.toLowerCase()
                + '/Buffalo 1- Fearsome foes.mp3');
        mdl.addAudio(animalID, '02 The herd- a complex society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Buffalo 2- The herd- a complex society.mp3');
        mdl.addAudio(animalID, '03 Bovine democracy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Buffalo 3- Bovine democracy.mp3');
        mdl.addAudio(animalID, '04 Defensive strategy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Buffalo 4- Defensive strategy.mp3');
        mdl.addAudio(animalID, '05 Buffalo bulls, a battle for dominance',
                100, resourcesPrefix + name.toLowerCase()
                + '/Buffalo 5- Buffalo bulls, a battle for dominance.mp3');
        mdl.addAudio(animalID, '06 Daga boys- grumpy old men',
                100, resourcesPrefix + name.toLowerCase()
                + '/Buffalo 6- Daga boys- grumpy old men.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Roan ==================================================================
    animalName = 'Roan'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Roan antelope (Hippotragus equinus)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Roan antelope', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Roan antelope');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'A large, horse-like antelope; coat a uniform straw colour; face a conspicuous black and white mask; horns long and ridged and curve backwards; ears very long; sexes similar, males slightly larger with larger horns.',
                // Confused With
                'Sable, gemsbok, eland, kudu',
                'Diurnal', // Activity Period
                '±9 months', // Gestation Period
                '±16-18 years', // Lifespan
                // Diet
                'Mainly grazers preferring medium to long grass',
                'Lions, spotted hyaena, leopards and wild dogs.', // Predators
                'Roan prefer grasslands or light woodlands with long grass and a good water source.', // Habitat
                'Least concern', // Red List Status
                'Decreasing', // Population
                'Poaching and habitat loss have eliminated roan from much of their former range, but they still persist in many countries, including healthy populations in west Africa.', // Threats
                '2.2-2.4m', // Length
                '1.1-1.5m', // Height
                '210-300kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');


        // Audio
        mdl.addAudio(animalID, 'Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Roan 1- Introduction.mp3');
        mdl.addAudio(animalID, '01- Social behaviour.mp3',
                100, resourcesPrefix + name.toLowerCase()
                + '/Roan 2- Social behaviour.mp3');
        mdl.addAudio(animalID, '023 Roan and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Roan 3- Roan and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map1.jpg');
        mdl.addMap(animalID, 'Map 2', resourcesPrefix + name.toLowerCase() + '/map2.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

     //Kudu (Tragelaphus strepsiceros) ==================================================================
    animalName = 'Kudu'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Kudu (Tragelaphus strepsiceros)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Kudu, greater kudu', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Kudu, greater kudu');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'A tall, graceful antelope with long legs; grey-brown fur with six to eight vertical white stripes down the sides; white stripe between eyes; long ears; males larger than females; only males have long, spiralled horns. ',
                // Confused With
                'nyala, waterbuck, roan, eland',
                'Mainly diurnal, active in the mornings and evenings', // Activity Period
                '±9 months', // Gestation Period
                '±7-9 years', // Lifespan
                // Diet
                'Mainly browsers, feed on a wide variety of leaves, fruits, flowers, seeds, succulents and tubers.',
                'Lions, hyaenas, leopards, cheetahs, wild dogs', // Predators
                'Prefer thickets, open woodlands, occur along waterways in more arid areas', // Habitat
                'Least concern', // Red List Status
                'stable', // Population
                'No major threats, regularly killed for food, popular with sport hunters; habitat loss is also a problem, especially in the northern part of its range.', // Threats
                '190-210cm ', // Length
                '140-155cm', // Height
                '180-250kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Kudu call.mp3', 22 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');

        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Kudu 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Horns in kudu society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Kudu 2- Horns in kudu society.mp3');
        mdl.addAudio(animalID, '03 Defensive strategy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Kudu 3- Defensive strategy.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Hippo ==================================================================
    animalName = 'Hippo'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Hippopotamus (Hippopotamus amphibius)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Hippo', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Giant herbivores (>300kg)', // Category
            '<b>Hippo Safety Advice</b>'
            + '<br/><br/>Hippos are great to watch, but are notoriously bad tempered so always be careful when watching them.'
            + '<br/><br/><b>Be catious around water:</b> hippos are extremely territorial, and can perceive anything as a threat. When approaching a water body in a vehicle, approach slowly, and keep your eye out for hippos on the bank and in the water. Never get out of your vehicle near water.'
            + '<br/><br/><b>Plan your retreat:</b> the driver should be aware of the route they will take to back away if the hippo shows aggression'
            + '<br/><br/><b>Be respectful:</b> don’t lean out of the vehicle, tease or throw things at the animal or get out of the car. Remember that the animal perceives the vehicle as one object, but when you stand up or lean out of it then the animal can identify individuals on the back, which can make them aggressive.'
            + '<br/><br/><b>Hippo body language:</b> if a hippo looks at you and opens its mouth wide, it is issuing a warning that you are too close. Move slowly away. '
            + '<br/><br/><b>Be wary of mothers:</b> mother hippos can be very protective when with their calves. Do not get too close to a mother, and do not make fast or erratic movements.'
            + '<br/><br/><b>Be wary at night:</b> hippos come out onto land at night to feed. Sometimes they may feed on the lawns inside lodges. Ask you lodge if hippos are able to enter the grounds, and ask them to brief you on their safety protocol at night.'
            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Hippo');

        // Profile Information
        mdl.addProfile(animalID,
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
                '1000-2000kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Hippo noise.mp3', 34 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction - unusual relations',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 1- Introduction - unusual relations.mp3');
        mdl.addAudio(animalID, '02 Why live in water',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 2- Why live in water.mp3');
        mdl.addAudio(animalID, '03 Red sweat and pink milk',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 3- Red sweat and pink milk.mp3');
        mdl.addAudio(animalID, '04 Can hippos swim',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 4- Can hippos swim_.mp3');
        mdl.addAudio(animalID, '05 A male dominated society',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 5- A male dominated society.mp3');
        mdl.addAudio(animalID, '06 Watery love- hippo mating',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 6- Watery love- hippo mating.mp3');
        mdl.addAudio(animalID, '07 Impact on the natural environment',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 7- Impact on the natural environment.mp3');
        mdl.addAudio(animalID, '08 Hippos and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Hippo 8- Hippos and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Rhinoceros ==================================================================
    animalName = 'Rhino'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Rhinoceros (Ceratotherium simum and Diceros bicornis)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'White rhino, square-lipped rhino, black rhino, hooked-lipped rhino', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Giant herbivores (>300kg)', // Category
            '<b>Rhino safety advice</b>'
            + '<br/><br/><b>Be cautious:</b> always approach slowly and carefully, and do not force yourself into their space. If you see one rhino, look all around you to determine if there are any others around.'
            + '<br/><br/><b>Plan your retreat:</b> the driver should be aware of the route they will take to back away if the rhino shows aggression'
            + '<br/><br/><b>Be respectful:</b> don’t lean out of the vehicle, tease or throw things at the animal or get out of the car. Remember that the animal perceives the vehicle as one object, but when you stand up or lean out of it then the animal can identify individuals on the back, which can make them aggressive.'
            + '<br/><br/><b>Don’t challenge a rhino:</b> rhinos often move in the road, and have been known to cause traffic jams on occasion. IN such an event, do not try to push the rhino off the road, as they may become aggressive. Be patient and wait for them to give you space.'
            + '<br/><br/><b>Don’t startle a rhino:</b> rhinos have very poor eyesight, but excellent hearing and smell. Occasionally their senses can fail to detect a parked car, and they may move towards you. Do not panic. Do not start the car suddenly or make loud noises, stay still, and do not make sudden movements. '
            + '<br/><br/><b>Be wary of black rhinos:</b> black rhinos are notoriously aggressive. If you see one, keep a safe distance.'
            + '<br/><br/><b>Be wary of mother rhinos:</b> mother rhinos can be aggressive in defending their calves. Give mothers a wide birth, and never get between a mother and her calf. '

            + '', // Safety Advise
            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'White rhino, square-lipped rhino, black rhino, hooked-lipped rhino');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                'Unmistakeable; huge size; two long horns on nose. White rhino: Broad, square lips; huge head that slopes down to the floor, large hump around the shoulders; back concave; tail curls upwards when running; Black rhino: pointed top lip; head held in line with the shoulders; black relatively flat; tail help straight up when running.',
                // Confused With
                'unmistakeable',
                'Not Listed', // Activity Period
                '±15-16 months', // Gestation Period
                '±35-40 years', // Lifespan
                // Diet
                'Diet: White rhino are grazers that have a preference for short grass; Black rhinos browse on more than 200 plant species including many poisonous plants.',
                'young may be taken by lions', // Predators
                'White rhinos prefer grassland and open woodland habitats with plenty of short grass and good water supply; Black rhinos require low trees and shrubs to feed on and a good water supply. They prefer thickets and dense woodlands but can survive in a variety of habitats.', // Habitat
                'White Rhino: Near Threatened, Black rhino: Critically endangered', // Red List Status
                'White rhino: Increasing; Black rhinos: Increasing', // Population
                'Poaching for their horn has increased alarmingly since 2007, with over 1000 cases in 2013. This has been stimulated by demand for traditional medicines in Asian countries such as Vietnam and China. It is believed that the number of animals killed may now outnumber the number of births each year.', // Threats
                'White rhino: 3.5m | Black rhino: 3.3m ', // Length
                'White rhino: 1.5-1.7m | Black rhino: 1.6-1.8m', // Height
                'White rhino: 1400-2300kg | Black rhino: 800-1200kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Rhino noise.mp3', 28 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');


        // Audio
        mdl.addAudio(animalID, 'Rhino special- Rhino poaching - the history and reality.mp3',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhino special- Rhino poaching - the history and reality.mp3');
        mdl.addAudio(animalID, '01- Distinguising white and black rhinos',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 1- Distinguising white and black rhinos.mp3');
        mdl.addAudio(animalID, '02- Rhino ancient history',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 2- Rhino ancient history.mp3');
        mdl.addAudio(animalID, '03- White rhino diet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 3- White rhino diet.mp3');
        mdl.addAudio(animalID, '04- Black rhino diet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 4- Black rhino diet.mp3.mp3');
        mdl.addAudio(animalID, '05- Rhino social structures',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 5- Rhino social structures.mp3');
        mdl.addAudio(animalID, '06- Male rhinos territories',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 6- Male rhinos territories.mp3');
        mdl.addAudio(animalID, '07- Using the horn to socialise',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 7- Using the horn to socialise.mp3');
        mdl.addAudio(animalID, '08- Rhino horn - a formidable weapon',
                100, resourcesPrefix + name.toLowerCase()
                + '/Rhinos 8- Rhino horn - a formidable weapon.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map1.jpg');
        mdl.addMap(animalID, 'Map 2', resourcesPrefix + name.toLowerCase() + '/map2.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Eland  ==================================================================
    animalName = 'Eland'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Eland (Tragelaphus oryx)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Eland, common eland, giant eland', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Large Antelope (>100kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Eland, common eland, giant eland');

        // Profile Information
        mdl.addProfile(animalID,
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
                '450-900kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Eland 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Social interactions',
                100, resourcesPrefix + name.toLowerCase()
                + '/Eland 2- Social interactions.mp3');
        mdl.addAudio(animalID, '03 Defensive strategy',
                100, resourcesPrefix + name.toLowerCase()
                + '/Eland 3- Defensive strategy.mp3');
        mdl.addAudio(animalID, '04 Bad mothers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Eland 4- Bad mothers.mp3');
        mdl.addAudio(animalID, '05 Importance to hunter gatherers',
                100, resourcesPrefix + name.toLowerCase()
                + '/Eland 5- Importance to hunter gatherers.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Zebra ==================================================================
    animalName = 'Zebra'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Plains zebra (Equus burchellii)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Zebra', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Giant herbivores (>300kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Zebra');

        // Profile Information
        mdl.addProfile(animalID,
                // Identification Pointer
                ' large, horse-like appearance; black and white stripe pattern on the coat; black stripes separated by brown “shadow stripe”, distinguishing this from other zebra species; stripes connect on the belly; no dewlap of loose skin on throat.',
                // Confused With
                'Cape and Hartmann’s mountain zebras',
                'mainly diurnal but will move and feed at night', // Activity Period
                '±12.5 months', // Gestation Period
                '±18-20 years', // Lifespan
                // Diet
                'bulk grazers. Have the ability to survive on very low quality grass but prefer medium  length green grass.',
                'Lions, hyaenas, leopards, wild dog', // Predators
                'Open habitats such as grasslands, sparse woodlands, and savannahs, but will also be found in rocky, mountainous areas. Require good water sources. ', // Habitat
                'least convern', // Red List Status
                'Stable ', // Population
                'No major threats to the species as a whole, but over-hunting and habitat loss and degradation are causing local population declines. Barriers such as fences, roads, agricultural land and human settlements threaten to halt their migratory pathways, which may result in major population declines. ', // Threats
                '2.2-2.4m ', // Length
                '1.2.-1.4m', // Height
                '280-350kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Zebra.mp3', 23 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');

        // Audio
        mdl.addAudio(animalID, '01 A life on the move',
                100, resourcesPrefix + name.toLowerCase()
                + '/Zebra 1- A life on the move.mp3');
        mdl.addAudio(animalID, '02 Moving for food and water',
                100, resourcesPrefix + name.toLowerCase()
                + '/Zebra 2- Moving for food and water.mp3');
        mdl.addAudio(animalID, '03 Zebra and wildebeest relationship',
                100, resourcesPrefix + name.toLowerCase()
                + '/Zebra 3- Zebra and wildebeest relationship.mp3');
        mdl.addAudio(animalID, '04 Social structure- the harem',
                100, resourcesPrefix + name.toLowerCase()
                + '/Zebra 4- Social structure- the harem.mp3');
        mdl.addAudio(animalID, '05 Breeding and male competition',
                100, resourcesPrefix + name.toLowerCase()
                + '/Zebra 5- Breeding and male competition.mp3');
        mdl.addAudio(animalID, '05 Zebra domestication',
                100, resourcesPrefix + name.toLowerCase()
                + '/Zebra 6- Zebra domestication.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Giraffe ==================================================================
    animalName = 'Giraffe'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Giraffe (Giraffa camelopardalis)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'Giraffe', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Giant herbivores (>300kg)', // Category
            '', // Safety Advise

            PayStatus.FREE, // Animal Status
            10, // Game Score
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Giraffe');

        // Profile Information
        mdl.addProfile(animalID,
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
                '700-1400kg', // Weight
                '', 0 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');
        mdl.addImage(animalID, 'Image 7', resourcesPrefix + name.toLowerCase() + '/image7.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Giraffe 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Birth from above',
                100, resourcesPrefix + name.toLowerCase()
                + '/Giraffe 2- Birth from above.mp3');
        mdl.addAudio(animalID, '03 Social structures',
                100, resourcesPrefix + name.toLowerCase()
                + '/Giraffe 3- Social structures.mp3');
        mdl.addAudio(animalID, '04 Telling males and females apart',
                100, resourcesPrefix + name.toLowerCase()
                + '/Giraffe 4- Telling males and females apart.mp3');
        mdl.addAudio(animalID, '04 Predation',
                100, resourcesPrefix + name.toLowerCase()
                + '/Giraffe 5- Predation.mp3');
        mdl.addAudio(animalID, '04 Eating old bones',
                100, resourcesPrefix + name.toLowerCase()
                + '/Giraffe 6- Eating old bones.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
    });
    // =========================================================================

    //Elephant  ==================================================================
    animalName = 'Elephant'; // Thumbnail Name & Folder name under 'animals'
    mdl.addAnimal('Elephant (Loxadonta Africana)',
            animalName, // Thumbnail Name & Folder name under 'animals'
            'African elephant, elephant ', // Common Names
            resourcesPrefix + animalName.toLowerCase() + '/thumb.jpg', // Icon
            'Giant herbivores (>300kg)', // Category
            '<b>Elephant Safety Advice</b>'
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
            function(name, animalID) {

        animal_counter++;

        // Common Names listed seperately
        mdl.addName(animalID, 'Elephant');

        // Profile Information
        mdl.addProfile(animalID,
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
                '2 600-6 000kg', // Weight
                resourcesPrefix + name.toLowerCase() + '/Elephant sounds.mp3', 47 // Path to sound clip and duration in seconds
                );
        // Images
        mdl.addImage(animalID, 'Image 1', resourcesPrefix + name.toLowerCase() + '/image1.jpg');
        mdl.addImage(animalID, 'Image 2', resourcesPrefix + name.toLowerCase() + '/image2.jpg');
        mdl.addImage(animalID, 'Image 3', resourcesPrefix + name.toLowerCase() + '/image3.jpg');
        mdl.addImage(animalID, 'Image 4', resourcesPrefix + name.toLowerCase() + '/image4.jpg');
        mdl.addImage(animalID, 'Image 5', resourcesPrefix + name.toLowerCase() + '/image5.jpg');
        mdl.addImage(animalID, 'Image 6', resourcesPrefix + name.toLowerCase() + '/image6.jpg');
        // Audio
        mdl.addAudio(animalID, '01 Introduction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 1- Introduction.mp3');
        mdl.addAudio(animalID, '02 Unfussy eaters',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 2- Unfussy eaters.mp3');
        mdl.addAudio(animalID, '03 Intelligence',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 3- Intelligence.mp3');
        mdl.addAudio(animalID, '04 The herd - education institutions',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 4-  The herd - education institutions.mp3');
        mdl.addAudio(animalID, '05 Elephant bulls in musth',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 5- Elephant bulls in musth.mp3');
        mdl.addAudio(animalID, '06 The most bizarre body on the planet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 6- The most bizarre body on the planet.mp3');
        mdl.addAudio(animalID, '07 Multifunctional ears',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 7- Multifunctional ears.mp3');
        mdl.addAudio(animalID, '08 The trunk - the most useful body part of all',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 8- The trunk - the most useful body part of all.mp3');
        mdl.addAudio(animalID, '09 Tusks - teeth with a difference',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 9- Tusks - teeth with a difference.mp3');
        mdl.addAudio(animalID, '10 Hearing through their feet',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 10- Hearing through their feet.mp3');
        mdl.addAudio(animalID, '11 Elephants, makers and destroyers of habitats',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 11- Elephants, makers and destroyers of habitats.mp3');
        mdl.addAudio(animalID, '12 Creative destruction',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 12- Creative destruction.mp3');
        mdl.addAudio(animalID, '13 Elephant poo as food',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 13- Elephant poo as food.mp3');
        mdl.addAudio(animalID, '14 Elephants influencing water dynamics',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 14- Elephants influencing water dynamics.mp3');
        mdl.addAudio(animalID, '15 Culling and population control',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 15- Culling and population control.mp3');
        mdl.addAudio(animalID, '16 Elephants and humans',
                100, resourcesPrefix + name.toLowerCase()
                + '/Elephant 16- Elephants and humans.mp3');
        // Maps(s)
        mdl.addMap(animalID, 'Map 1', resourcesPrefix + name.toLowerCase() + '/map.jpg');
        // Footprints
        mdl.addFootprint(animalID, 'Back', resourcesPrefix + name.toLowerCase() + '/foot1.jpg');
        mdl.addFootprint(animalID, 'Front', resourcesPrefix + name.toLowerCase() + '/foot2.jpg');
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
