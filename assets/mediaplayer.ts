class mediaPlayer {

    media: HTMLMediaElement;
    plugins: Array<any>
    container: HTMLElement;
    
    pause() {
        throw new Error("Method not implemented.");
    }
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative'

        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }


    private initPlugins() {
        
        this.plugins.forEach( plugin => {
            plugin.run(this);
        });
    }
    play() {
        if (this.media.paused) {
            this.media.play();
        }
        else {
            this.media.pause();
        }
    }
    
    unmuteMute() {
        this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
    }
}






// export default mediaPlayer

export default mediaPlayer;


// function mediaPlayer(config) {
//     this.media = config.el;
//     this.plugins = config.plugins || [];
//     this._initPlugins();
// }



// mediaPlayer.prototype._initPlugins = function () {
//     const player = {
//     play: () => this.play(),
//     pause: () => this.pause(),
//     media: this.media,
//     get muted() {
//     return this.media.muted;
//     },

//     set muted(value) {
//         this.media.muted = value;
//     },
// };

//     this.plugins.forEach((plugin) => {
//     plugin.run(this);
// });
// };

// // mediaPlayer.prototype.mute = function () {
// //     this.media.muted = true;
// // }

// // mediaPlayer.prototype.unmute = function () {
// //     this.media.unmuted = false;
// // }

// mediaPlayer.prototype.unmuteMute = function () {
//     this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
// };

// mediaPlayer.prototype.play = function () {
//     if (this.media.paused) {
//     this.media.play();
// } else {
//     this.media.pause();
// }

//   // this.media.paused ? this.media.play() : this.media.pause()
// };

// // export default mediaPlayer

// export default mediaPlayer;
