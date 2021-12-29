import mediaPlayer from "../mediaPlayer.js";

class AutoPlay {
  constructor() {}
  run(player: mediaPlayer) {
    if (player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}
export default AutoPlay;
