var x = document.getElementById("myAudio");
var playState = 0;
function music(){
    if(playState ===  0){
        x.autoplay = true;
        x.load();
        playState = 1;
    }
}
$(".back").on('touchstart',function(){
    $(".back").attr('style','opacity: 0.5');
}); 

document.addEventListener('click', music); 