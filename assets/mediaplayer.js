function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

mediaPlayer.prototype._initPlugins = function () {
    const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
    return this.media.muted;
    },

    set muted(value) {
        this.media.muted = value;
    },
};

    this.plugins.forEach((plugin) => {
    plugin.run(this);
});
};

// mediaPlayer.prototype.mute = function () {
//     this.media.muted = true;
// }

// mediaPlayer.prototype.unmute = function () {
//     this.media.unmuted = false;
// }

mediaPlayer.prototype.unmuteMute = function () {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

mediaPlayer.prototype.play = function () {
    if (this.media.paused) {
    this.media.play();
} else {
    this.media.pause();
}

  // this.media.paused ? this.media.play() : this.media.pause()
};

// export default mediaPlayer

export default mediaPlayer;
