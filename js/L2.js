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

var answer7 = 0; 
$(".bt7#a").click(function(){
    $(".bg7#a").attr('style','visibility:hidden');
    $(".bg7#a-t").attr('style','none');
    $(".bg7#b").attr('style','none');
    $(".bg7#a-t").attr('style','visibility:hidden');
    answer7 = false;
});
$(".bt7#b").click(function(){
    $(".bg7#b").attr('style','visibility:hidden');
    $(".bg7#b-t").attr('style','none');
    $(".bg7#a").attr('style','none');
    $(".bg7#a-t").attr('style','visibility:hidden');
    answer7 = true;
});
$(".bt7").click(function(){
    if(answer7 ===1 ){
        $(".bg7").attr('style','visibility:hidden');
        $(".bt7").attr('style','visibility:hidden');
        $(".op7").attr('style','visibility:hidden');

        $(".bg9").attr('style','none');
        $(".bt9").attr('style','none');
    }
    else{
        $(".bt7#a-t").attr('style','visibility:hidden');
        $(".bt7#a").attr('style','visibility:none1');
    }
});
$(".bt9").click(function(){
    $(".bg10").attr('style','visibility:hidden');
    $(".dl10").attr('style','visibility:hidden');
    $(".bt10").attr('style','visibility:hidden');

    $(".bt9").attr('style','none');
    $(".bg9").attr('style','none');
});
$(".bt10").click(function(){
    $(".bg11").attr('style','visibility:hidden');
    $(".bt11").attr('style','visibility:hidden');

    $(".bg12").attr('style','none');
    $(".dl12").attr('style','none');
    $(".bt12").attr('style','none');
});
$(".bt12").click(function(){
    $(".dl12").attr('style','visibility:hidden');
    $(".bt12").attr('style','visibility:hidden');

    $(".dl13").attr('style','none');
    $(".bt13").attr('style','none');
});
$(".bt13").click(function(){
    $(".dl13").attr('style','visibility:hidden');
    $(".bt13").attr('style','visibility:hidden');

    $(".dl14").attr('style','none');
    $(".bt14").attr('style','none');
});
$(".bt14").on('touchend',function(){
    window.location=("../html/L3.html")
});