import MediaPlayer from './MediaPlayer.js'

const video = document.getElementById("movie");
const button = document.getElementById("play-pause");
const player = new MediaPlayer({el: video});

button.onclick = () => player.togglePlay();
