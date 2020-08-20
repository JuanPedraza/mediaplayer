import mediaPlayer from './mediaplayer.js';
import autoPlay from './plugins/autoPlay.js'


const video = document.querySelector("video");
// const button = document.querySelector("button");
const player = new mediaPlayer({ el: video, plugins: [
    new autoPlay()
] });

const playButton = document.querySelector('#playButton')
playButton.onclick = () => player.play();

const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => {
    if(player.media.muted){
        player.unmute()
    }else {
        player.mute()
    }

    
}



