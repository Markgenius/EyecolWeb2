var background_34 = document.querySelector(".background_image34");
var buttonGroup34_1 = document.querySelector(".button34_1");
var buttonGroup34_2 = document.querySelector(".button34_2");

var background_35 = document.querySelector(".background_image35");
var buttonGroup35_1 = document.querySelector(".button35_1");
var buttonGroup35_2 = document.querySelector(".button35_2");

var background_36 = document.querySelector(".background_image36");
var buttonGroup36_1 = document.querySelector(".button36_1");
var buttonGroup36_2 = document.querySelector(".button36_2");

var background_37 = document.querySelector(".background_image37");
var buttonGroup37_1 = document.querySelector(".button37_1");
var buttonGroup37_2 = document.querySelector(".button37_2");

var background_38 = document.querySelector(".background_image38");
var buttonGroup38_1 = document.querySelector(".button38_1");
var input_38 = document.querySelector(".input38");
var buttonGroup38_2 = document.querySelector(".button38_2");

var background_40 = document.querySelector(".background_image40");
var buttonGroup40_1 = document.querySelector(".button40_1");
var buttonGroup40_2 = document.querySelector(".button40_2");

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

function clickBG34_1(){
    background_34.setAttribute('style','visibility:hidden');
    buttonGroup34_1.setAttribute('style','visibility:hidden');
    buttonGroup34_2.setAttribute('style','visibility:hidden');

    background_35.setAttribute('style','none');
    buttonGroup35_1.setAttribute('style','none');
    buttonGroup35_2.setAttribute('style','none');
}
function clickBG35_1(){
    background_35.setAttribute('style','visibility:hidden');
    buttonGroup35_1.setAttribute('style','visibility:hidden');
    buttonGroup35_2.setAttribute('style','visibility:hidden');

    background_36.setAttribute('style','none');
    buttonGroup36_1.setAttribute('style','none');
    buttonGroup36_2.setAttribute('style','none');
}
function clickBG36_1(){
    background_36.setAttribute('style','visibility:hidden');
    buttonGroup36_1.setAttribute('style','visibility:hidden');
    buttonGroup36_2.setAttribute('style','visibility:hidden');

    background_37.setAttribute('style','none');
    buttonGroup37_1.setAttribute('style','none');
    buttonGroup37_2.setAttribute('style','none');
}
function clickBG37_1(){
    background_37.setAttribute('style','visibility:hidden');
    buttonGroup37_1.setAttribute('style','visibility:hidden');
    buttonGroup37_2.setAttribute('style','visibility:hidden');

    background_38.setAttribute('style','none');
    buttonGroup38_1.setAttribute('style','none');
    input_38.setAttribute('style','none');
    buttonGroup38_2.setAttribute('style','none');
}
function clickBG38_1(){
    background_38.setAttribute('style','visibility:hidden');
    buttonGroup38_1.setAttribute('style','visibility:hidden');
    input_38.setAttribute('style','visibility:hidden');
    buttonGroup38_2.setAttribute('style','visibility:hidden');

    background_40.setAttribute('style','none');
    buttonGroup40_1.setAttribute('style','none');
    buttonGroup40_2.setAttribute('style','none');
}


function clickBG34_1_(){
    buttonGroup34_1.setAttribute('style','opacity: 0.5');
}
function clickBG34_2_(){
    buttonGroup34_2.setAttribute('style','opacity: 0.5');
}
function clickBG35_1_(){
    buttonGroup35_1.setAttribute('style','opacity: 0.5');
}
function clickBG35_2_(){
    buttonGroup35_2.setAttribute('style','opacity: 0.5');
}
function clickBG36_1_(){
    buttonGroup36_1.setAttribute('style','opacity: 0.5');
}
function clickBG36_2_(){
    buttonGroup36_2.setAttribute('style','opacity: 0.5');
}
function clickBG37_1_(){
    buttonGroup37_1.setAttribute('style','opacity: 0.5');
}
function clickBG37_2_(){
    buttonGroup37_2.setAttribute('style','opacity: 0.5');
}
function clickBG38_1_(){
    buttonGroup38_1.setAttribute('style','opacity: 0.5');
}
function clickBG38_2_(){
    buttonGroup38_2.setAttribute('style','opacity: 0.5');
}

buttonGroup34_1.addEventListener('touchstart',clickBG34_1_);
buttonGroup34_1.addEventListener('touchend',clickBG34_1);

buttonGroup34_2.addEventListener('touchstart',clickBG34_2_);
buttonGroup34_2.addEventListener('touchend',clickBG34_1);

buttonGroup35_1.addEventListener('touchstart',clickBG35_1_);
buttonGroup35_1.addEventListener('touchend',clickBG35_1);

buttonGroup35_2.addEventListener('touchstart',clickBG35_2_);
buttonGroup35_2.addEventListener('touchend',clickBG35_1);

buttonGroup36_1.addEventListener('touchstart',clickBG36_1_);
buttonGroup36_1.addEventListener('touchend',clickBG36_1);

buttonGroup36_2.addEventListener('touchstart',clickBG36_2_);
buttonGroup36_2.addEventListener('touchend',clickBG36_1);

buttonGroup37_1.addEventListener('touchstart',clickBG37_1_);
buttonGroup37_1.addEventListener('touchend',clickBG37_1);

buttonGroup37_2.addEventListener('touchstart',clickBG37_2_);
buttonGroup37_2.addEventListener('touchend',clickBG37_1);

buttonGroup38_1.addEventListener('touchstart',clickBG38_1_);
buttonGroup38_1.addEventListener('touchend',clickBG38_1);

buttonGroup38_2.addEventListener('touchstart',clickBG38_2_);
buttonGroup38_2.addEventListener('touchend',clickBG38_1);

// slider_1.oninput = function() {
//     output1.innerHTML = this.value;
// }
// slider_2.oninput = function() {
//     output2.innerHTML = this.value;
// }
