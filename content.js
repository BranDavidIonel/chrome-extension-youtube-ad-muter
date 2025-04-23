console.log("✅ [Youtube Ad Muter] Content script loaded.");
function isAdPlaying() {
    const adDetected = document.querySelector('.ad-showing') !== null;
    //console.log(`[Ad Check] Ad playing: ${adDetected}`);
    return adDetected;
}

function mutePlayer() {
    const video = document.querySelector('video');
    if (video && !video.muted) {
        video.muted = true;
        console.log("🔇 [Mute] Video muted during ad.");
    }
}

function unmutePlayer() {
    const video = document.querySelector('video');
    if (video && video.muted) {
        video.muted = false;
        console.log("🔊 [Unmute] Video unmuted after ad.");
    };
}

function showOverlay() {
    if (!document.querySelector('#ad-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'ad-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.zIndex = '9999';
        overlay.style.backgroundImage = 'url("https://dummyimage.com/1280x720/000/fff&text=David don\'t%20waste%20your%20time!")'
        overlay.style.backgroundSize = 'cover';
        overlay.style.backgroundPosition = 'center';
        document.querySelector('#movie_player')?.appendChild(overlay);
    }
}

function hideOverlay() {
    const overlay = document.querySelector('#ad-overlay');
    if (overlay) overlay.remove();
}

function trySkipAd() {
    const skipBtn = document.querySelector('.ytp-ad-skip-button, .ytp-skip-ad-button, #skip-button\\:v');
    console.log("test [Check] skipBtn found:", skipBtn);

    if (skipBtn) {
        console.log("✅ [Action] Skipping ad...");
        const realClick = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        skipBtn.dispatchEvent(realClick);
    } else {
        console.log("❌ [Action] Skip button NOT found.");
    }
}

setInterval(() => {
    if (isAdPlaying()) {
        mutePlayer();
        showOverlay();
        trySkipAd();
    } else {
        unmutePlayer();
        hideOverlay();
    }
}, 300);
