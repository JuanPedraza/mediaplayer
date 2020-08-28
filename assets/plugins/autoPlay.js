import mediaPlayer from '../mediaplayer.js';

function autoPlay(){}

autoPlay.prototype.run = function (player) {
    if(!player.media.muted){

        player.media.muted = true
    }
    player.play()
}

export default autoPlay;