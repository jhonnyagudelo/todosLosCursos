import "https://vjs.zencdn.net/7.14.3/video.min.js";

console.log("he importado el player");

ps5.classList.remove("hidden");

const myplayer = videojs("ps5", {
  controls: true,
  preload: "auto",
});

export { myplayer };
