var x = document.getElementById("myAudio");
var playState = 0;
function music(){
    if(playState ===  0) {
        x2.pause();
        x.autoplay = true;
        x.load();
        playState = 1;
    }
}