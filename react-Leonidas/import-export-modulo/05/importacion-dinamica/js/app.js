video.addEventListener("click", function () {
  console.log("click");

  this.classList.add("hidden");
  import("./player.js").then(({ myplayer }) => {
    //console.log(myplayer);
    setTimeout(() => {
      myplayer.play();
    }, 1000);
  });
});
