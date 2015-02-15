var shareFacebook = function () {
    console.log('Starting facebook share...');
    if (window.plugins && window.plugins.socialsharing) {
        console.log('Proceeding with facebook share...');
        window.plugins.socialsharing.shareViaFacebook(
                null,
                null, //'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/10714113_734077916675567_3272036327475912665_o.png',
                'https://www.facebook.com/whispersofthewild',
                function () {
                    app.view.unlockFreeApp();
                },
                function (errormsg) {
                    console.log('Error with facebook share...' + errormsg);
                }
        );
    }
};

var shareTwitter = function () {
    console.log('Starting twitter share...');
    if (window.plugins && window.plugins.socialsharing) {
        console.log('Proceeding with twitter share...');
        window.plugins.socialsharing.shareViaTwitter(
                '@Whispers_Wild\n'
                + 'https://www.facebook.com/whispersofthewild\n'
                + 'I just love this site!',
                'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/10714113_734077916675567_3272036327475912665_o.png',
                null, //'https://www.facebook.com/whispersofthewild',
                function () {
                    app.view.unlockFreeApp();
                },
                function (errormsg) {
                    console.log('Error with twitter share...' + errormsg);
                    alert(errormsg)
                }
        );
    } else {
        console.log("Could not find scoialsharing plugin");
    }
    // share(SOCIAL_SHARE_TWITTER, "Wispers of the Wild", "Checkout this awesome new app!", "http://www.galoot.co.za");
};