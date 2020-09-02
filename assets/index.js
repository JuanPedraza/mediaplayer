import mediaPlayer from './mediaplayer.js';
import autoPlay from './plugins/autoPlay.js'
import autoPause from './plugins/autoPause.ts'


const video = document.querySelector("video");
// const button = document.querySelector("button");
const player = new mediaPlayer({ el: video, plugins: [new autoPlay(), new autoPause()]});

const playButton = document.querySelector('#playButton')
playButton.onclick = () => player.play();

const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => {
    player.unmuteMute();
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .catch(error => {
            console.error(error.message);
        })
}


