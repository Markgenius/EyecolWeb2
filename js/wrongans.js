var x = document.getElementById("myAudio");
var playState = 0;
function music(){
    if(playState ===  0){
        x.autoplay = true;
        x.load();
        playState = 1;
    }
}

document.addEventListener('click', music); 