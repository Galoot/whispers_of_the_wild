// Audio player
//
var my_media = null;
var mediaTimer = null;
var useHtml5 = true;
// Play audio
//
function playAudio(src) {
    if (!useHtml5) {
        // Create Media object from src
        my_media = new Media(src, onSuccess, onError);

        // Play audio
        my_media.play();

        // Update my_media position every second
        if (mediaTimer == null) {
            mediaTimer = setInterval(function() {
                // get my_media position
                my_media.getCurrentPosition(
                    // success callback
                    function(position) {
                        if (position > -1) {
                            setAudioPosition((position) + " sec");
                        }
                    },
                    // error callback
                    function(e) {
                        console.log("Error getting pos=" + e);
                        setAudioPosition("Error: " + e);
                    }
                );
            }, 1000);
        }
    } else {
        var aud = $('#audio-controller');
        if (aud) {
            aud.src = src;
            aud.trigger("play");
            alert('music playing: ' + aud.src);
        }
    }
}

// Pause audio
//
function pauseAudio() {
    if (!useHtml5) {
        if (my_media) {
            my_media.pause();
        }
    } else {
        var aud = $('#audio-controller');
        if (aud) {
            aud.src = src;
            aud.pause();
            alert('music paused: ' + aud.src);
        }
    }
}

// Stop audio
//
function stopAudio() {
    if (!useHtml5) {
        if (my_media) {
            my_media.stop();
        }
        clearInterval(mediaTimer);
        mediaTimer = null;
    } else {
        var aud = $('#audio-controller');
        if (aud) {
            aud.src = src;
            aud.stop();
            alert('music stopped: ' + aud.src);
        }
    }
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