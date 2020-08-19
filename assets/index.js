const video = document.querySelector("video");
const button = document.querySelector("button");

function mediaPlayer(config) {
    this.media = config.el;
}

mediaPlayer.prototype.play = function () {
    if (this.media.paused) {
    this.media.play();
    } else {
    this.media.pause();
    }

  // this.media.paused ? this.media.play() : this.media.pause()
};

const player = new mediaPlayer({ el: video });
button.onclick = () => player.play();