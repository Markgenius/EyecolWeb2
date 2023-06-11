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

    $(".bg3").setAttribute('style','none');
    $(".dl3").setAttribute('style','none');
    $(".bt3_1").setAttribute('style','none');
    $(".bt3_2").setAttribute('style','none');
});
$(".bt3").click(function(){
    $("bg3").setAttribute('style','visibility:hidden');
    $("dl3").setAttribute('style','visibility:hidden');
    $("bt3_1").setAttribute('style','visibility:hidden');
    $("bt3_2").setAttribute('style','visibility:hidden');

    $("dl4").setAttribute('style','none');
    $("bt4_1").setAttribute('style','none');
    $("input4").setAttribute('style','visibility:none');
});
$("bt4_1").click(function(){
    $("dl4").setAttribute('style','visibility:hidden');
    $("bt4_1").setAttribute('style','visibility:hidden');
    $("input4").setAttribute('style','visibility:hidden');

    $("dl5").setAttribute('style','none');
    $("bt5_1").setAttribute('style','none');
    $("bt5_2").setAttribute('style','visibility:none');
});
$("bt5").click(function(){
    $("dl5").setAttribute('style','visibility:hidden');
    $("bt5_1").setAttribute('style','visibility:hidden');
    $("bt5_2").setAttribute('style','visibility:hidden');

    $("dg6").setAttribute('style','none');
    $("bt6_1").setAttribute('style','none');
    $("bt6_2").setAttribute('style','visibility:none');
});