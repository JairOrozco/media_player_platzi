import MediaPlayer from './MediaPlayer.js'
import AutoPlay from '../plugins/AutoPlay.js'

const video = document.getElementById("movie");
const button = document.getElementById("play-pause");
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});
const button_sound = document.getElementById("unmute");

button.onclick = () => player.togglePlay();
button_sound.onclick = () => player.unmute();