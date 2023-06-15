var correct = 0
$(".op7").click(function(){
    window.location=('../html/ar_cloth.html')
});
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
var x2 = document.getElementById("myAudio_no");
var playState2 = 0;
function music2(){
    if(playState2 ===  0) {
        x.pause();
        x2.autoplay = true;
        x2.load();
        playState2 = 1;
    }
}
document.addEventListener('click', music); 
$("#a1").click(function(){
    $("#a1").attr('style','visibility:hidden');
    $("#b1-t").attr('style','visibility:hidden');

    $("#a1-t").attr('style','none');
    $("#b1").attr('style','none');
    correct=0
});
$("#b1").click(function(){
    $("#b1").attr('style','visibility:hidden');
    $("#a1-t").attr('style','visibility:hidden');

    $("#b1-t").attr('style','none');
    $("#a1").attr('style','none');
    correct=1
});
$("#a1-t").click(function(){
    $("#a1-t").attr('style','visibility:hidden');
    $("#a1").attr('style','none');
    correct=0
});
$("#b1-t").click(function(){
    $("#b1-t").attr('style','visibility:hidden');
    $("#b1").attr('style','none');
    correct=0
});

$("#sub").click(function(){
    if(correct==1){
    $(".bg7").attr('style','visibility:hidden');
    $(".op7").attr('style','visibility:hidden');
    $(".finger").attr('style','visibility:hidden');
    $(".bt7").attr('style','visibility:hidden');

    $(".bt9").attr('style','none');
    $(".bg9").attr('style','none');
    }
    else{
        window.location=('../html/wrongans.html');
    }
});
$(".bt9").click(function(){
    $(".bg9").attr('style','visibility:hidden');
    $(".bt9").attr('style','visibility:hidden');

    $(".bt10").attr('style','none');
    $(".bg10").attr('style','none');
    $(".dl10").attr('style','none');
});
$(".bt10").click(function(){
    $(".bg10").attr('style','visibility:hidden');
    $(".dl10").attr('style','visibility:hidden');
    $(".bt10").attr('style','visibility:hidden');

    $(".bg11").attr('style','none');
    $(".bt11").attr('style','none');
});
$(".bt11").click(function(){
    music2();
    $(".bg11").attr('style','visibility:hidden');
    $(".bt11").attr('style','visibility:hidden');

    $(".bg12").attr('style','none');
    $(".dl12").attr('style','none');
    $(".bt12").attr('style','none');
});
$(".bt12").click(function(){
    $(".bg12").attr('style','none');
    $(".dl12").attr('style','visibility:hidden');
    $(".bt12").attr('style','visibility:hidden');

    $(".bg13").attr('style','none');
    $(".dl13").attr('style','none');
    $(".bt13").attr('style','none');
});

$(".bt13").click(function(){
    $(".bg13").attr('style','none');
    $(".dl13").attr('style','visibility:hidden');
    $(".bt13").attr('style','visibility:hidden');

    $(".bg14").attr('style','none');
    $(".dl14").attr('style','none');
    $(".bt14").attr('style','none');
});

$(".bt14").on('touchend',function(){
    window.location=("../html/L3.html")
})

$(".bt7").on('touchstart',function(){
    $(".bt7").attr('style','opacity: 0.5');
}); 
$(".bt9").on('touchstart',function(){
    $(".bt9").attr('style','opacity: 0.5');
}); 
$(".bt10").on('touchstart',function(){
    $(".bt10").attr('style','opacity: 0.5');
}); 
$(".bt11").on('touchstart',function(){
    $(".bt11").attr('style','opacity: 0.5');
}); 
$(".bt12").on('touchstart',function(){
    $(".bt12").attr('style','opacity: 0.5');
}); 
$(".bt13").on('touchstart',function(){
    $(".bt13").attr('style','opacity: 0.5');
}); 
$(".bt14").on('touchstart',function(){
    $(".bt14").attr('style','opacity: 0.5');
}); 