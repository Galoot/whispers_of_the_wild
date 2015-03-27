// share destinations
SOCIAL_SHARE_FACEBOOK = 1;
SOCIAL_SHARE_TWITTER = 2;

function share(destination, subject, text, url) {
    var actTypes = destination === SOCIAL_SHARE_FACEBOOK ?
            ["PostToFacebook"] : destination === SOCIAL_SHARE_TWITTER ?
            ["PostToTwitter"] : [];
    if (actTypes.length > 0) {
        var message = {
            subject: subject,
            text: text,
            url: url,
            activityTypes: actTypes
        };
        window.socialmessage.send(message);
    } else {
        console.log("No recognized share destinations [" + destination + "]");
    }
}