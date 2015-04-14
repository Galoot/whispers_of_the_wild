var shareFacebook = function() {
    console.log('Starting facebook share...');
    if (window.plugins && window.plugins.socialsharing) {
        console.log('Proceeding with facebook share...');
        window.plugins.socialsharing.shareViaFacebook(
                null,
                null, /* Image to share goes here */
                'https://www.facebook.com/whispersofthewild', /* URL to share goes here */
                function () {
                    app.view.unlockFreeApp();
                    app.view.animal_loadAnimals();
                },
                function (errormsg) {
                    console.log('Error with facebook share...' + errormsg);
                }
        );
    } else {
        console.log("Could not find scoialsharing plugin");
        app.view.unlockFreeApp();
        app.view.animal_loadAnimals();
    }
};

var shareTwitter = function() {
    console.log('Starting twitter share...');
    if (window.plugins && window.plugins.socialsharing) {
        console.log('Proceeding with twitter share...');
        window.plugins.socialsharing.shareViaTwitter(
                '@Whispers_Wild\n' + 'https://www.facebook.com/whispersofthewild\n'
                + '', /* Text to share goes here */
                'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/10714113_734077916675567_3272036327475912665_o.png', /* Image to share goes here */
                null, //'https://www.facebook.com/whispersofthewild', /* URL to share goes here */
                function () {
                    app.view.unlockFreeApp();
                    app.view.animal_loadAnimals();
                },
                function (errormsg) {
                    console.log('Error with twitter share...' + errormsg);
                    alert(errormsg)
                }
        );
    } else {
        console.log("Could not find scoialsharing plugin");
        app.view.unlockFreeApp();
        app.view.animal_loadAnimals();
    }
    // share(SOCIAL_SHARE_TWITTER, "Wispers of the Wild", "Checkout this awesome new app!", "http://www.galoot.co.za");
};