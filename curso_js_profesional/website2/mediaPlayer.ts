class mediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config: any) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayers();
    this.initPlugins();
  }

  initPlayers() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    //const player = {
    //play: () => this.play(),
    //pause: () => this.pause(),
    //media: this.media.muted,
    //get muted() {
    //return this.media.muted;
    //},
    //set muted(value) {
    //this.media.muted = value;
    //},
    //};
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
}

export default mediaPlayer;
