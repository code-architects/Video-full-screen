const toggleFullScreen = document.querySelector("button");
const video = document.querySelector("#video");

toggleFullScreen.onclick = () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}