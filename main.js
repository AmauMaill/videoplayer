const video = document.getElementById("video");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const progressBar = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & pause & stop
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    if (video.paused) {
        playButton.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
    } else {
        playButton.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Progress & timestamp
function updateProgress() {
    // Progress bar
    progressBar.value = (video.currentTime / video.duration) * 100;

    // Timestamp
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setVideoProgress() {
    video.currentTime = (+progressBar.value * video.duration) / 100;
}

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playButton.addEventListener("click", toggleVideoStatus);

stopButton.addEventListener("click", stopVideo);

progressBar.addEventListener("change", setVideoProgress);