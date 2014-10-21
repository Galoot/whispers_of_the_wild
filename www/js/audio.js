// Audio player
//
var my_media = null;
var mediaTimer = null;                      // interval that watches audioElement progress/position
var lastSrc = null;
var lastDuration = null;
var lastSetPosition = null;
var useHtml5 = false;                       // boolean to determine type of element audioElement is
var audio_state_play = false;
// Play audio
//
function playAudio(src, duration, setPosition) {
    if (!src && !setPosition) {
        src = lastSrc;
        setPosition = lastSetPosition;
    } else {
        lastSrc = src;
        lastDuration = duration;
        lastSetPosition = setPosition;
    }

    if (src != null) {
        src = getFullPath(src);
        // create/init [audioElement]
        if (!useHtml5) {
            // (Cordova MEDIA element)
            my_media = new Media(src, onSuccess, onError);
        } else {
            // (HTML5 Audio)
            my_media = $("#app_audio");
        }

        my_media.play();
        audio_state_play = true;

        var position;

        // Update my_media position every second
        if (mediaTimer == null) {
            mediaTimer = setInterval(function() {

                if (!useHtml5) {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            report("DEBUG", "Audio (Media) position: " + position);
                            if (setPosition && position > -1) {
                                setPosition(position, duration);
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                        }
                    );
                } else {
                    if (setPosition) {
                        report("DEBUG", "Audio (HTML5) position: " + my_media.currentTime);
                        if (parseInt(my_media.duration)) {
                            setPosition(my_media.currentTime, my_media.duration);
                        } else {
                            setPosition(my_media.currentTime, duration);
                        }
                    }
                }
            }, 1000);
        }
    }
}

// Resume audio
//
function resumeAudio() {
    if (my_media) {
        my_media.play();
        audio_state_play = true;
    }
}
//
// Pause audio
//
function pauseAudio() {
    if (my_media) {
        my_media.pause();
        audio_state_play = false;
    }
}

// Stop audio
//
function stopAudio() {
    if (my_media) {
        my_media.stop();
        audio_state_play = false;
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
}

// onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}