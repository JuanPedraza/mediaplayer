import mediaPlayer from '../mediaplayer';

class autoPlay {
    constructor() { }
    run(player: mediaPlayer) {
        if (!player.media.muted) {

            player.media.muted = true;
        }
        player.play();
    }
}


export default autoPlay;

// import mediaPlayer from '../mediaplayer.js';
// 
// function autoPlay(){}
// 
// autoPlay.prototype.run = function (player) {
    // if(!player.media.muted){
// 
        // player.media.muted = true
    // }
    // player.play()
// }
// 
// export default autoPlay;