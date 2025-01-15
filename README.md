# Video Player Application

This project is a simple video player application built with plain JavaScript. It allows users to play, pause, and control the playback of a video file with a sleek and user-friendly interface. The app also provides options to adjust volume, change playback speed, and navigate through the video timeline.

You can see a [live demo here](https://amaumaill.github.io/videoplayer/).

## Features

- **Play, Pause, and Stop**: Users can toggle between playing, pausing, and stopping the video with intuitive controls.
- **Progress Bar**: A dynamic progress bar shows the current playback position and allows users to seek to specific parts of the video.
- **Timestamp Display**: Displays the current playback time in minutes and seconds for easy tracking.
- **Fullscreen Support**: The app includes a fullscreen mode for an immersive viewing experience.

## How It Works

### Core Functions

1. **Playback Controls**: Buttons provide intuitive controls for playing, pausing, stopping, and navigating the video.
2. **Progress and Timestamp Updates**: The app updates the progress bar and displays the current timestamp dynamically as the video plays.
3. **Event Listeners**: The app uses JavaScript event listeners to handle user interactions with buttons and the progress bar.

### Code Highlights

- **Dynamic Timestamp Display**: Current playback time is calculated in a "MM:SS" format.
- **Intuitive Playback Controls**: Play, pause, and stop functionalities are easily accessible through event listeners.

### Example Code Snippet

```javascript
// Play & pause
function toggleVideoStatus() {
    video.paused ? video.play() : video.pause();
}

// Update progress and timestamp
function updateProgress() {
    progressBar.value = (video.currentTime / video.duration) * 100;
    const minutes = Math.floor(video.currentTime / 60).toString().padStart(2, '0');
    const seconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
    timestamp.innerHTML = `${minutes}:${seconds}`;
}

// Event listeners
playButton.addEventListener("click", toggleVideoStatus);
video.addEventListener("timeupdate", updateProgress);
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/AmauMaill/videoplayer.git
   ```
2. Open the project directory and launch `index.html` in your browser.
3. Enjoy seamless video playback with intuitive controls.

## Credits

- Inspired by [Brad Traversy](https://www.traversymedia.com).

## License

This project is licensed under the MIT License and is intended for educational purposes.

