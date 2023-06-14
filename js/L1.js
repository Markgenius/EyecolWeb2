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
$(".bt1").on('touchstart',function(){
    $(".bt1").attr('style','opacity: 0.5');
}); 
$(".bt2").on('touchstart',function(){
    $(".bt2").attr('style','opacity: 0.5');
}); 
$("#a").on('touchstart',function(){
    $("#a").attr('style','opacity: 0.5');
}); 
$("#b").on('touchstart',function(){
    $("#b").attr('style','opacity: 0.5');
}); 
$(".bt4").on('touchstart',function(){
    $(".bt4").attr('style','opacity: 0.5');
}); 
$("#c").on('touchstart',function(){
    $("#c").attr('style','opacity: 0.5');
});
$("#d").on('touchstart',function(){
    $("#d").attr('style','opacity: 0.5');
});


$(".bt1").on('touchend',function(){
    $(".bg1").attr('style','visibility:hidden');
    $(".bt1").attr('style','visibility:hidden');
    $(".bg2").attr('style','none');
    $(".bt2").attr('style','none');
});
$(".bt2").on('touchend',function(){
    $(".bg2").attr('style','visibility:hidden');
    $(".bt2").attr('style','visibility:hidden');

    $(".bg3").attr('style','none');
    $(".dl3").attr('style','none');
    $(".bt3").attr('style','none');
});
$(".bt3").on('touchend',function(){
    $(".dl3").attr('style','visibility:hidden');
    $(".bt3").attr('style','visibility:hidden');

    $(".dl4").attr('style','none');
    $(".bt4").attr('style','none');
    $(".input4").attr('style','visibility:none');
});
$(".bt4").on('touchend',function(){
    $(".dl4").attr('style','visibility:hidden');
    $(".bt4").attr('style','visibility:hidden');
    $(".input4").attr('style','visibility:hidden');

    $(".dl5").attr('style','none');
    $(".bt5").attr('style','none');
});
$(".bt5").on('touchend',function(){
    $(".bg3").attr('style','visibility:hidden');
    $(".dl5").attr('style','visibility:hidden');
    $(".bt5").attr('style','visibility:hidden');

    $(".bg6").attr('style','none');
    $(".bt6").attr('style','none');
});
$("#c").on('touchend',function(){
   window.location= ('../html/L2.html')
});
$("#d").on('touchend',function(){
    window.location= ('../html/L2.html')
 });