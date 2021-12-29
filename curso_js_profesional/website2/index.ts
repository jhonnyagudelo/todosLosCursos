import mediaPlayer from "./mediaPlayer";
import autoPlay from "./plugins/autoPlay";
import autoPause from "./plugins/autoPause";
import Ads from "./plugins/Ads";

const video = document.querySelector("video");
const player = new mediaPlayer({
  el: video,
  plugins: [new autoPlay(), new autoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch((error) => {
    console.log(error.message);
  });
}
