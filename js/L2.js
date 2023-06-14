var correct = 0
$(".op7").click(function(){
    window.location=('../html/ar_cloth.html')
});
var x = document.getElementById("myAudio");
var playState = 0;
x.autoplay = true;
function music(){
    if(playState ===  0) {
        x2.pause();
        x3.pause();
        x.autoplay = true;
        x.load();
        playState = 1;
    }
}
document.addEventListener('click', music); 


var x2 = document.getElementById("myAudio_no");
var playState2 = 0;
function music2(){
    if(playState2 ===  0) {
        x.pause();
        x3.pause();
        x2.autoplay = true;
        x2.load();
        playState2 = 1;
    }
}
$("#a").click(function(){
    $("#a").attr('style','visibility:hidden');
    $("#b-t").attr('style','visibility:hidden');

    $("#a-t").attr('style','none');
    $("#b1").attr('style','none');
    correct=0;
    
});
$("#b").click(function(){
    $("#b").attr('style','visibility:hidden');
    $("#a-t").attr('style','visibility:hidden');

    $("#b-t").attr('style','none');
    $("#a").attr('style','none');
    correct=1;
    
});
$("#a-t").click(function(){
    $("#a1-t").attr('style','visibility:hidden');
    $("#a1").attr('style','none');
    correct=0; 
});
$("#b-t").click(function(){
    $("#b-t").attr('style','visibility:hidden');
    $("#b").attr('style','none');
    correct=0; 
});


// $("#a").on('touchstart',function(){
//     $("#a").attr('style','opacity: 0.5');
// }); 
// $("#b").on('touchstart',function(){
//     $("#b").attr('style','opacity: 0.5');
// }); 
$("#c").on('touchstart',function(){
    $("#c").attr('style','opacity: 0.5');
}); 



$("#c").on('touchend',function(){
    if(correct==1){
    $(".bg7").attr('style','visibility:hidden');
    $(".op7").attr('style','visibility:hidden');
    $(".bt7").attr('style','visibility:hidden');

    $(".bg9").attr('style','none');
    $(".dl9").attr('style','none');
    $(".bt9").attr('style','none');}
    else{
    $("#a-t").attr('style','visibility:hidden');
    $("#b-t").attr('style','visibility:hidden');
    $("#a").attr('style','none');
    $("#b").attr('style','none');
    $("#c").attr('style','none');

    }

});
$(".bt9").on('touchend',function(){
    $(".bg9").attr('style','visibility:hidden');
    $(".dl9").attr('style','visibility:hidden');
    $(".bt9").attr('style','visibility:hidden');

    $(".bg10").attr('style','none');
    $(".dl10").attr('style','none');
    $(".bt10").attr('style','none');
    
});

$(".bt10").on('touchend',function(){
    $(".bg10").attr('style','visibility:hidden');
    $(".dl10").attr('style','visibility:hidden');
    $(".bt10").attr('style','visibility:hidden');

    $(".bg11").attr('style','none');
    $(".bt11").attr('style','none');
    
});
$(".bt11").on('touchend',function(){
    $(".bg11").attr('style','visibility:hidden');
    $(".bt11").attr('style','visibility:hidden');

    $(".bg12").attr('style','none');
    $(".dl12").attr('style','none');
    $(".bt12").attr('style','none');
    music2()
});

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
})