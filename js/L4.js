var background_22 = document.querySelector(".background_image22");
var buttonGroup22_0 = document.querySelector(".button22_0");
var buttonGroup22_1 = document.querySelector(".button22_1");
var buttonGroup22_2 = document.querySelector(".button22_2");

var background_23 = document.querySelector(".background_image23");
var buttonGroup23_0 = document.querySelector(".button23_0");
var buttonGroup23_1 = document.querySelector(".button23_1");
var buttonGroup23_2 = document.querySelector(".button23_2");

var background_24 = document.querySelector(".background_image24");
var buttonGroup24_0 = document.querySelector(".button24_0");
var buttonGroup24_1 = document.querySelector(".button24_1");
var buttonGroup24_2 = document.querySelector(".button24_2");

var background_25 = document.querySelector(".background_image25");
var buttonGroup25_0 = document.querySelector(".button25_0");
var buttonGroup25_1 = document.querySelector(".button25_1");
var buttonGroup25_2 = document.querySelector(".button25_2");

var background_26 = document.querySelector(".background_image26");
var buttonGroup26_0 = document.querySelector(".button26_0");
var buttonGroup26_1 = document.querySelector(".button26_1");
var buttonGroup26_2 = document.querySelector(".button26_2");
var buttonGroup26_3 = document.querySelector(".button26_3");
var buttonGroup26_1_ = document.querySelector(".button26_1_");
var buttonGroup26_2_ = document.querySelector(".button26_2_");
var buttonGroup26_3_ = document.querySelector(".button26_3_");
var buttonGroup26_4 = document.querySelector(".button26_4");
var clickBG26_state = 0;

var background_28 = document.querySelector(".background_image28");
var buttonGroup28_0 = document.querySelector(".button28_0");
var buttonGroup28_1 = document.querySelector(".button28_1");
var buttonGroup28_2 = document.querySelector(".button28_2");

var background_29 = document.querySelector(".background_image29");
var buttonGroup29_0 = document.querySelector(".button29_0");
var buttonGroup29_1 = document.querySelector(".button29_1");
var buttonGroup29_2 = document.querySelector(".button29_2");
var buttonGroup29_3 = document.querySelector(".button29_3");
var buttonGroup29_4 = document.querySelector(".button29_4");
var buttonGroup29_5 = document.querySelector(".button29_5");
var buttonGroup29_6 = document.querySelector(".button29_6");
var buttonGroup29_1_ = document.querySelector(".button29_1_");
var buttonGroup29_2_ = document.querySelector(".button29_2_");
var buttonGroup29_3_ = document.querySelector(".button29_3_");
var buttonGroup29_4_ = document.querySelector(".button29_4_");
var buttonGroup29_5_ = document.querySelector(".button29_5_");
var buttonGroup29_6_ = document.querySelector(".button29_6_");
var buttonGroup29_7 = document.querySelector(".button29_7");
var clickBG29_state = 0;

var background_30 = document.querySelector(".background_image30");
var buttonGroup30_0 = document.querySelector(".button30_0");
var input_30 = document.querySelector(".input30");
var input_30_value = document.querySelector(".input30");
var buttonGroup30_finger = document.querySelector(".button30_finger");
var buttonGroup30_1 = document.querySelector(".button30_1");

var background_31 = document.querySelector(".background_image31");
var buttonGroup31_0 = document.querySelector(".button31_0");
var buttonGroup31_1 = document.querySelector(".button31_1");
var buttonGroup31_2 = document.querySelector(".button31_2");

var background_32 = document.querySelector(".background_image32");
var buttonGroup32_1 = document.querySelector(".button32_1");

var background_33 = document.querySelector(".background_image33");
var buttonGroup33_0 = document.querySelector(".button33_0");


var x = document.getElementById("myAudio");
var playState = 0;
x.autoplay = true;

function music(){
    if(playState ===  0) {
        x.autoplay = true;
        x.load();
        playState = 1;
    }
}
document.addEventListener('click', music); 

function clickBG22_1(){
    background_22.setAttribute('style','visibility:hidden');
    buttonGroup22_0.setAttribute('style','visibility:hidden');
    buttonGroup22_1.setAttribute('style','visibility:hidden');
    buttonGroup22_2.setAttribute('style','visibility:hidden');

    background_23.setAttribute('style','none');
    buttonGroup23_0.setAttribute('style','none');
    buttonGroup23_1.setAttribute('style','none');
    buttonGroup23_2.setAttribute('style','none');
}

function clickBG23_1(){
    background_23.setAttribute('style','visibility:hidden');
    buttonGroup23_0.setAttribute('style','visibility:hidden');
    buttonGroup23_1.setAttribute('style','visibility:hidden');
    buttonGroup23_2.setAttribute('style','visibility:hidden');

    background_24.setAttribute('style','none');
    buttonGroup24_0.setAttribute('style','none');
    buttonGroup24_1.setAttribute('style','none');
    buttonGroup24_2.setAttribute('style','none');
}

function clickBG24_1(){
    background_24.setAttribute('style','visibility:hidden');
    buttonGroup24_0.setAttribute('style','visibility:hidden');
    buttonGroup24_1.setAttribute('style','visibility:hidden');
    buttonGroup24_2.setAttribute('style','visibility:hidden');

    background_25.setAttribute('style','none');
    buttonGroup25_0.setAttribute('style','none');
    buttonGroup25_1.setAttribute('style','none');
    buttonGroup25_2.setAttribute('style','none');
}

function clickBG25_1(){
    // background_25.setAttribute('style','visibility:hidden');
    // buttonGroup25_0.setAttribute('style','visibility:hidden');
    // buttonGroup25_1.setAttribute('style','visibility:hidden');
    // buttonGroup25_2.setAttribute('style','visibility:hidden');

    // background_26.setAttribute('style','none');
    // buttonGroup26_0.setAttribute('style','none');
    // buttonGroup26_1.setAttribute('style','none');
    // buttonGroup26_2.setAttribute('style','none');
    // buttonGroup26_3.setAttribute('style','none');
    // buttonGroup26_4.setAttribute('style','none');

    window.location = ('../html/L4_2.html');
}
function clickBG26_0(){
    window.location=("../html/ar_filter.html");
}

function clickBG26_4(){
    if(clickBG26_state === 2){
        background_26.setAttribute('style','visibility:hidden');
        buttonGroup26_0.setAttribute('style','visibility:hidden');
        buttonGroup26_1.setAttribute('style','visibility:hidden');
        buttonGroup26_2.setAttribute('style','visibility:hidden');
        buttonGroup26_3.setAttribute('style','visibility:hidden');
        buttonGroup26_1_.setAttribute('style','visibility:hidden');
        buttonGroup26_2_.setAttribute('style','visibility:hidden');
        buttonGroup26_3_.setAttribute('style','visibility:hidden');
        buttonGroup26_4.setAttribute('style','visibility:hidden');

        background_28.setAttribute('style','none');
        buttonGroup28_0.setAttribute('style','none');
        buttonGroup28_1.setAttribute('style','none');
        buttonGroup28_2.setAttribute('style','none');
    }
    else {
        clickBG26_state = 0;
        buttonGroup26_4.setAttribute('style','none');

        buttonGroup26_1.setAttribute('style','none');
        buttonGroup26_2.setAttribute('style','none');
        buttonGroup26_3.setAttribute('style','none');

        buttonGroup26_1_.setAttribute('style','visibility:hidden');
        buttonGroup26_2_.setAttribute('style','visibility:hidden');
        buttonGroup26_3_.setAttribute('style','visibility:hidden');
    }
}

function clickBG28_1(){
    background_28.setAttribute('style','visibility:hidden');
    buttonGroup28_0.setAttribute('style','visibility:hidden');
    buttonGroup28_1.setAttribute('style','visibility:hidden');
    buttonGroup28_2.setAttribute('style','visibility:hidden');

    background_29.setAttribute('style','none');
    buttonGroup29_0.setAttribute('style','none');
    buttonGroup29_1.setAttribute('style','none');
    buttonGroup29_2.setAttribute('style','none');
    buttonGroup29_3.setAttribute('style','none');
    buttonGroup29_4.setAttribute('style','none');
    buttonGroup29_5.setAttribute('style','none');
    buttonGroup29_6.setAttribute('style','none');
    buttonGroup29_7.setAttribute('style','none');
}

function clickBG29_7(){
    if(clickBG29_state != 0){
        background_29.setAttribute('style','visibility:hidden');
        buttonGroup29_0.setAttribute('style','visibility:hidden');
        buttonGroup29_1.setAttribute('style','visibility:hidden');
        buttonGroup29_2.setAttribute('style','visibility:hidden');
        buttonGroup29_3.setAttribute('style','visibility:hidden');
        buttonGroup29_4.setAttribute('style','visibility:hidden');
        buttonGroup29_5.setAttribute('style','visibility:hidden');
        buttonGroup29_6.setAttribute('style','visibility:hidden');
        buttonGroup29_1_.setAttribute('style','visibility:hidden');
        buttonGroup29_2_.setAttribute('style','visibility:hidden');
        buttonGroup29_3_.setAttribute('style','visibility:hidden');
        buttonGroup29_4_.setAttribute('style','visibility:hidden');
        buttonGroup29_5_.setAttribute('style','visibility:hidden');
        buttonGroup29_6_.setAttribute('style','visibility:hidden');
        buttonGroup29_7.setAttribute('style','visibility:hidden');

        background_30.setAttribute('style','none');
        buttonGroup30_0.setAttribute('style','none');
        input_30.setAttribute('style','none');
        buttonGroup30_1.setAttribute('style','none');
    }
    else {
        buttonGroup29_7.setAttribute('style','none');
    }
}

function clickBG30_1(){
    input_30_value = document.querySelector(".input30").value;
    if(input_30_value != 0){
        background_30.setAttribute('style','visibility:hidden');
        buttonGroup30_0.setAttribute('style','visibility:hidden');
        input_30.setAttribute('style','visibility:hidden');
        buttonGroup30_1.setAttribute('style','visibility:hidden');
        buttonGroup30_finger.setAttribute('style','visibility:hidden');

        background_31.setAttribute('style','none');
        buttonGroup31_0.setAttribute('style','none');
        buttonGroup31_1.setAttribute('style','none');
        buttonGroup31_2.setAttribute('style','none');
    }
    else{
        buttonGroup30_finger.setAttribute('style','none');
        buttonGroup30_1.setAttribute('style','none');
    }
}

function clickBG31_1(){
    background_31.setAttribute('style','visibility:hidden');
    buttonGroup31_0.setAttribute('style','visibility:hidden');
    buttonGroup31_1.setAttribute('style','visibility:hidden');
    buttonGroup31_2.setAttribute('style','visibility:hidden');

    background_32.setAttribute('style','none');
    buttonGroup32_1.setAttribute('style','none');
}

function clickBG32_1(){
    background_32.setAttribute('style','visibility:hidden');
    buttonGroup32_1.setAttribute('style','visibility:hidden');

    background_33.setAttribute('style','none');
    buttonGroup33_0.setAttribute('style','none');
}

function clickBG33_0(){
    window.location = ('../html/L5.html');
}

function clickBG22_1_(){
    buttonGroup22_1.setAttribute('style','opacity: 0.5');
}
function clickBG22_2_(){
    buttonGroup22_2.setAttribute('style','opacity: 0.5');
}
function clickBG23_1_(){
    buttonGroup23_1.setAttribute('style','opacity: 0.5');
}
function clickBG23_2_(){
    buttonGroup23_2.setAttribute('style','opacity: 0.5');
}
function clickBG24_1_(){
    buttonGroup24_1.setAttribute('style','opacity: 0.5');
}
function clickBG24_2_(){
    buttonGroup24_2.setAttribute('style','opacity: 0.5');
}
function clickBG25_1_(){
    buttonGroup25_1.setAttribute('style','opacity: 0.5');
}
function clickBG25_2_(){
    buttonGroup25_2.setAttribute('style','opacity: 0.5');
}
function clickBG26_4_(){
    buttonGroup26_4.setAttribute('style','opacity: 0.5');
}
function clickBG28_1_(){
    buttonGroup28_1.setAttribute('style','opacity: 0.5');
}
function clickBG28_2_(){
    buttonGroup28_2.setAttribute('style','opacity: 0.5');
}
function clickBG29_7_(){
    buttonGroup29_7.setAttribute('style','opacity: 0.5');
}
function clickBG30_1_(){
    buttonGroup30_1.setAttribute('style','opacity: 0.5');
}
function clickBG31_1_(){
    buttonGroup31_1.setAttribute('style','opacity: 0.5');
}
function clickBG31_2_(){
    buttonGroup31_2.setAttribute('style','opacity: 0.5');
}
function clickBG32_1_(){
    buttonGroup32_1.setAttribute('style','opacity: 0.5');
}


function clickBG26_1(){
    buttonGroup26_1.setAttribute('style','visibility:hidden');
    buttonGroup26_1_.setAttribute('style','none');
    clickBG26_2_();
    clickBG26_3_();
    clickBG26_state = 1;
}
function clickBG26_1_(){
    buttonGroup26_1_.setAttribute('style','visibility:hidden');
    buttonGroup26_1.setAttribute('style','none');
    clickBG26_state = 0;
}
function clickBG26_2(){
    buttonGroup26_2.setAttribute('style','visibility:hidden');
    buttonGroup26_2_.setAttribute('style','none');
    clickBG26_1_();
    clickBG26_3_();
    clickBG26_state = 2;
}
function clickBG26_2_(){
    buttonGroup26_2_.setAttribute('style','visibility:hidden');
    buttonGroup26_2.setAttribute('style','none');
    clickBG26_state = 0;
}
function clickBG26_3(){
    buttonGroup26_3.setAttribute('style','visibility:hidden');
    buttonGroup26_3_.setAttribute('style','none');
    clickBG26_1_();
    clickBG26_2_();
    clickBG26_state = 3;
}
function clickBG26_3_(){
    buttonGroup26_3_.setAttribute('style','visibility:hidden');
    buttonGroup26_3.setAttribute('style','none');
    clickBG26_state = 0;
}


function clickBG29_1(){
    buttonGroup29_1.setAttribute('style','visibility:hidden');
    buttonGroup29_1_.setAttribute('style','none');
    clickBG29_state += 1;
}
function clickBG29_1_(){
    buttonGroup29_1_.setAttribute('style','visibility:hidden');
    buttonGroup29_1.setAttribute('style','none');
    clickBG29_state -= 1;
}
function clickBG29_2(){
    buttonGroup29_2.setAttribute('style','visibility:hidden');
    buttonGroup29_2_.setAttribute('style','none');
    clickBG29_state += 1;
}
function clickBG29_2_(){
    buttonGroup29_2_.setAttribute('style','visibility:hidden');
    buttonGroup29_2.setAttribute('style','none');
    clickBG29_state -= 1;
}
function clickBG29_3(){
    buttonGroup29_3.setAttribute('style','visibility:hidden');
    buttonGroup29_3_.setAttribute('style','none');
    clickBG29_state += 1;
}
function clickBG29_3_(){
    buttonGroup29_3_.setAttribute('style','visibility:hidden');
    buttonGroup29_3.setAttribute('style','none');
    clickBG29_state -= 1;
}
function clickBG29_4(){
    buttonGroup29_4.setAttribute('style','visibility:hidden');
    buttonGroup29_4_.setAttribute('style','none');
    clickBG29_state += 1;
}
function clickBG29_4_(){
    buttonGroup29_4_.setAttribute('style','visibility:hidden');
    buttonGroup29_4.setAttribute('style','none');
    clickBG29_state -= 1;
}
function clickBG29_5(){
    buttonGroup29_5.setAttribute('style','visibility:hidden');
    buttonGroup29_5_.setAttribute('style','none');
    clickBG29_state += 1;
}
function clickBG29_5_(){
    buttonGroup29_5_.setAttribute('style','visibility:hidden');
    buttonGroup29_5.setAttribute('style','none');
    clickBG29_state -= 1;
}
function clickBG29_6(){
    buttonGroup29_6.setAttribute('style','visibility:hidden');
    buttonGroup29_6_.setAttribute('style','none');
    clickBG29_state += 1;
}
function clickBG29_6_(){
    buttonGroup29_6_.setAttribute('style','visibility:hidden');
    buttonGroup29_6.setAttribute('style','none');
    clickBG29_state -= 1;
}




buttonGroup22_1.addEventListener('touchstart',clickBG22_1_);
buttonGroup22_1.addEventListener('touchend',clickBG22_1);

buttonGroup22_2.addEventListener('touchstart',clickBG22_2_);
buttonGroup22_2.addEventListener('touchend',clickBG22_1);

buttonGroup23_1.addEventListener('touchstart',clickBG23_1_);
buttonGroup23_1.addEventListener('touchend',clickBG23_1);

buttonGroup23_2.addEventListener('touchstart',clickBG23_2_);
buttonGroup23_2.addEventListener('touchend',clickBG23_1);

buttonGroup24_1.addEventListener('touchstart',clickBG24_1_);
buttonGroup24_1.addEventListener('touchend',clickBG24_1);

buttonGroup24_2.addEventListener('touchstart',clickBG24_2_);
buttonGroup24_2.addEventListener('touchend',clickBG24_1);

buttonGroup25_1.addEventListener('touchstart',clickBG25_1_);
buttonGroup25_1.addEventListener('touchend',clickBG25_1);

buttonGroup25_2.addEventListener('touchstart',clickBG25_2_);
buttonGroup25_2.addEventListener('touchend',clickBG25_1);

buttonGroup26_0.addEventListener('click',clickBG26_0);
buttonGroup26_1.addEventListener('touchstart',clickBG26_1);
buttonGroup26_2.addEventListener('touchstart',clickBG26_2);
buttonGroup26_3.addEventListener('touchstart',clickBG26_3);
buttonGroup26_1_.addEventListener('touchstart',clickBG26_1_);
buttonGroup26_2_.addEventListener('touchstart',clickBG26_2_);
buttonGroup26_3_.addEventListener('touchstart',clickBG26_3_);
buttonGroup26_4.addEventListener('touchstart',clickBG26_4_);
buttonGroup26_4.addEventListener('touchend',clickBG26_4);

buttonGroup28_1.addEventListener('touchstart',clickBG28_1_);
buttonGroup28_1.addEventListener('touchend',clickBG28_1);

buttonGroup28_2.addEventListener('touchstart',clickBG28_2_);
buttonGroup28_2.addEventListener('touchend',clickBG28_1);

buttonGroup29_1.addEventListener('touchstart',clickBG29_1);
buttonGroup29_2.addEventListener('touchstart',clickBG29_2);
buttonGroup29_3.addEventListener('touchstart',clickBG29_3);
buttonGroup29_4.addEventListener('touchstart',clickBG29_4);
buttonGroup29_5.addEventListener('touchstart',clickBG29_5);
buttonGroup29_6.addEventListener('touchstart',clickBG29_6);
buttonGroup29_1_.addEventListener('touchstart',clickBG29_1_);
buttonGroup29_2_.addEventListener('touchstart',clickBG29_2_);
buttonGroup29_3_.addEventListener('touchstart',clickBG29_3_);
buttonGroup29_4_.addEventListener('touchstart',clickBG29_4_);
buttonGroup29_5_.addEventListener('touchstart',clickBG29_5_);
buttonGroup29_6_.addEventListener('touchstart',clickBG29_6_);
buttonGroup29_7.addEventListener('touchstart',clickBG29_7_);
buttonGroup29_7.addEventListener('touchend',clickBG29_7);

buttonGroup30_1.addEventListener('touchstart',clickBG30_1_);
buttonGroup30_1.addEventListener('touchend',clickBG30_1);

buttonGroup31_1.addEventListener('touchstart',clickBG31_1_);
buttonGroup31_1.addEventListener('touchend',clickBG31_1);

buttonGroup31_2.addEventListener('touchstart',clickBG31_2_);
buttonGroup31_2.addEventListener('touchend',clickBG31_1);

buttonGroup32_1.addEventListener('touchstart',clickBG32_1_);
buttonGroup32_1.addEventListener('touchend',clickBG32_1);

buttonGroup33_0.addEventListener('touchend',clickBG33_0);

