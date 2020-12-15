const video = document.getElementById("movie");
const button = document.getElementById("play-pause");
const player = new MediaPlayer({el: video});


function MediaPlayer (config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function() {
        this.media.play();
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused){
        this.play();
    }else {
        this.pause();
    }
}

button.onclick = () => player.togglePlay();
