$(document).ready()

var playState = 0;
$(".myAudio").autoplay = true;

function music(){
    if(playState ===  0) {
        $(".myAudio").autoplay = true;
        playState = 1;
    }
}
document.addEventListener('click', music); 

$(".bt1").click(function(){
    $(".bg1").attr('style','visibility:hidden');
    $(".bt1").attr('style','visibility:hidden');
    $(".bg2").attr('style','none');
    $(".bt2").attr('style','none');
});
$(".bt2").click(function(){
    $(".bg2").attr('style','visibility:hidden');
    $(".bt2").attr('style','visibility:hidden');

    $(".bg3").attr('style','none');
    $(".dl3").attr('style','none');
    $(".bt3").attr('style','none');
});
$(".bt3").click(function(){
    $(".bg3").attr('style','visibility:hidden');
    $(".dl3").attr('style','visibility:hidden');
    $(".bt3").attr('style','visibility:hidden');

    $(".dl4").attr('style','none');
    $(".bt4").attr('style','none');
    $(".input4").attr('style','visibility:none');
});
$(".bt4").click(function(){
    $(".dl4").attr('style','visibility:hidden');
    $(".bt4").attr('style','visibility:hidden');
    $(".input4").attr('style','visibility:hidden');

    $(".dl5").attr('style','none');
    $(".bt5").attr('style','none');
});
$(".bt5").click(function(){
    $(".dl5").attr('style','visibility:hidden');
    $(".bt5").attr('style','visibility:hidden');

    $(".dg6").attr('style','none');
    $(".bt6").attr('style','none');
});