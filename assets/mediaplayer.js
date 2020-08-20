

function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || []


    this._initPlugins()
}


mediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

mediaPlayer.prototype.mute = function () {
    this.media.muted = true
}

mediaPlayer.prototype.unmute = function () {
    this.media.unmute = false
}

mediaPlayer.prototype.play = function () {
    if (this.media.paused) {
        this.media.play();
    } else {
        this.media.pause();
    }
    
    // this.media.paused ? this.media.play() : this.media.pause()
};

// export default mediaPlayer

export default mediaPlayer