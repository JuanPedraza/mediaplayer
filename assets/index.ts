import mediaPlayer from './mediaplayer';
import autoPlay from './plugins/autoPlay'
import autoPause from './plugins/autoPause'
import Ads from './plugins/Ads'


const video = document.querySelector("video");
// const button = document.querySelector("button");
const player = new mediaPlayer({ el: video, plugins: [new autoPlay(), new autoPause(), new Ads()]});

const playButton: HTMLElement = document.querySelector('#playButton')
playButton.onclick = () => player.play();

const muteButton: HTMLElement = document.querySelector('#muteButton')
muteButton.onclick = () => {
    player.unmuteMute();
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .catch(error => {
            console.error(error.message);
        })
}


