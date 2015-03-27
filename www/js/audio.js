// Audio player
//
var my_media = null;
var mediaTimer = null;                      // interval that watches audioElement progress/position
var lastSrc = null;
var lastDuration = null;
var lastSetPosition = null;
var useHtml5 = !isMobile.Android() && !isMobile.iOS();                       // boolean to determine type of element audioElement is
var audio_state_play = false;

function startAudioPlayBack(duration, setPosition, onTrackCompleted) {
    my_media.play();
    audio_state_play = true;

    var position;

    // Update my_media position every second
    if (mediaTimer == null) {
        setPosition(0, duration);
        mediaTimer = setInterval(function() {

            if (!useHtml5) {
                // get my_media position
                my_media.getCurrentPosition(
                    // success callback
                    function(position) {
                        // report("DEBUG", "Audio (Media) position: " + position);
                        if (setPosition && position >= 0) {
                            setPosition(position, lastDuration);
                        } else {
                            if (onTrackCompleted && audio_state_play) {
                                onTrackCompleted();
                            }
                        }
                    },
                    // error callback
                    function(e) {
                        // console.log("Error getting pos=" + e);
                    }
                );
            } else {
                if (setPosition) {
                    // report("DEBUG", "Audio (HTML5) position: " + my_media.currentTime);
                    if (my_media.currentTime < 0) {
                        if (onTrackCompleted && audio_state_play) {
                            onTrackCompleted();
                        }
                    }

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

// Play audio
//
function playAudio(src, duration, setPosition, onTrackCompleted) {
    // duration = duration + 3;
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
            var apkExpPrefix = 'content://org.apache.cordova.xapkreader/';
            if (app.useExpansion && src.indexOf(apkExpPrefix) !== -1) {
                console.log("za.co.galoot.wotw - Finding audio track original: [" + src + "] in APK expansion file...");

                var requestFileName = src.substring(apkExpPrefix.length, src.length);
                XAPKReader.extract(requestFileName,
                    function(url) { // success
                        url = url.split("\\").join("");
                        console.log("Found audio track original: [" + src + "], new [" + url + "]");
                        my_media = new Media(url, onSuccess, onError);
                        startAudioPlayBack(duration, setPosition, onTrackCompleted);

                    }, function(error) {
                        console.log('Error retrieving file from obb file...error: [' + error + ']');
                    }, 'audio/mpeg3');
            } else {
                console.log("za.co.galoot.wotw - Audio track outside OBB file... [" + src + "]...");

                my_media = new Media(src, onSuccess, onError);
                startAudioPlayBack(duration, setPosition, onTrackCompleted);
            }

        } else {
            // (HTML5 Audio)
//            my_media = $("#audio-controller");
            my_media = document.getElementById('audio-controller');
            my_media.src = src;
            startAudioPlayBack(setPosition, onTrackCompleted);
        }

    }
}

// Resume audio
//
function resumeAudio() {
    if (my_media) {
        my_media.play();
        audio_state_play = true;
        return true;
    }
    return false;
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
    console.error('Error - Code [' + error.code + '], Message [' + error.message + ']');
}