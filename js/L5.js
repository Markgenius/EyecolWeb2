var background_34 = document.querySelector(".background_image34");
var talk34 = document.querySelector(".talk34");
var buttonGroup34_1 = document.querySelector(".button34_1");
var buttonGroup34_2 = document.querySelector(".button34_2");

var background_35 = document.querySelector(".background_image35");
var talk35 = document.querySelector(".talk35");
var buttonGroup35_1 = document.querySelector(".button35_1");
var buttonGroup35_2 = document.querySelector(".button35_2");

var background_36 = document.querySelector(".background_image36");
var talk36 = document.querySelector(".talk36");
var buttonGroup36_1 = document.querySelector(".button36_1");
var buttonGroup36_2 = document.querySelector(".button36_2");

var background_37 = document.querySelector(".background_image37");
var talk37 = document.querySelector(".talk37");
var buttonGroup37_1 = document.querySelector(".button37_1");
var buttonGroup37_2 = document.querySelector(".button37_2");

var background_38 = document.querySelector(".background_image38");
var buttonGroup38_1 = document.querySelector(".button38_1");
var input_38 = document.querySelector(".input38");
var input_38_value = document.querySelector(".input38").value;
var buttonGroup38_2 = document.querySelector(".button38_2");

var background_40 = document.querySelector(".background_image40");
var buttonGroup40_1 = document.querySelector(".button40_1");
var buttonGroup40_2 = document.querySelector(".button40_2");

var background_41 = document.querySelector(".background_image41");
var buttonGroup41_1 = document.querySelector(".button41_1");

var background_42 = document.querySelector(".background_image42");
var buttonGroup42_1 = document.querySelector(".button42_1");

var background_43 = document.querySelector(".background_image43");

var background_45 = document.querySelector(".background_image45");
var buttonGroup45_0 = document.querySelector(".button45_0");
var buttonGroup45_1 = document.querySelector(".button45_1");
var buttonGroup45_2 = document.querySelector(".button45_2");

var background_46 = document.querySelector(".background_image46");
var buttonGroup46_0 = document.querySelector(".button46_0");
var buttonGroup46_1 = document.querySelector(".button46_1");
var buttonGroup46_2 = document.querySelector(".button46_2");

var background_47 = document.querySelector(".background_image47");
var buttonGroup47_0 = document.querySelector(".button47_0");
var buttonGroup47_1 = document.querySelector(".button47_1");
var buttonGroup47_2 = document.querySelector(".button47_2");

var x = document.getElementById("myAudio");
var playState = 0;
x.autoplay = true;
function music(){
    if(playState ===  0) {
        x2.pause();
        x3.pause();
        x4.pause();
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
        x4.pause();
        x2.autoplay = true;
        x2.load();
        playState2 = 1;
    }
}

var x3 = document.getElementById("myAudio_laugh");
var playState3 = 0;
function music3(){
    if(playState3 ===  0) {
        x.pause();
        x2.pause();
        x4.pause();
        x3.autoplay = true;
        x3.load();
        playState3 = 1;
    }
}

var x4 = document.getElementById("treasure");
var playState4 = 0;
function music4(){
    if(playState4 ===  0) {
        x.pause();
        x2.pause();
        x3.pause();
        x4.autoplay = true;
        x4.load();
        playState4 = 1;
    }
}


function clickBG34_1(){
    background_34.setAttribute('style','visibility:hidden');
    talk34.setAttribute('style','visibility:hidden');
    buttonGroup34_1.setAttribute('style','visibility:hidden');
    buttonGroup34_2.setAttribute('style','visibility:hidden');

    background_35.setAttribute('style','none');
    talk35.setAttribute('style','none');
    buttonGroup35_1.setAttribute('style','none');
    buttonGroup35_2.setAttribute('style','none');
}
function clickBG35_1(){
    background_35.setAttribute('style','visibility:hidden');
    talk35.setAttribute('style','visibility:hidden');
    buttonGroup35_1.setAttribute('style','visibility:hidden');
    buttonGroup35_2.setAttribute('style','visibility:hidden');

    background_36.setAttribute('style','none');
    talk36.setAttribute('style','none');
    buttonGroup36_1.setAttribute('style','none');
    buttonGroup36_2.setAttribute('style','none');
}
function clickBG36_1(){
    background_36.setAttribute('style','visibility:hidden');
    talk36.setAttribute('style','visibility:hidden');
    buttonGroup36_1.setAttribute('style','visibility:hidden');
    buttonGroup36_2.setAttribute('style','visibility:hidden');

    background_37.setAttribute('style','none');
    talk37.setAttribute('style','none');
    buttonGroup37_1.setAttribute('style','none');
    buttonGroup37_2.setAttribute('style','none');
}
function clickBG37_1(){
    // background_37.setAttribute('style','visibility:hidden');
    // talk37.setAttribute('style','visibility:hidden');
    // buttonGroup37_1.setAttribute('style','visibility:hidden');
    // buttonGroup37_2.setAttribute('style','visibility:hidden');

    // background_38.setAttribute('style','none');
    // buttonGroup38_1.setAttribute('style','none');
    // input_38.setAttribute('style','none');
    // buttonGroup38_2.setAttribute('style','none');
    window.location = ('../html/L5_2.html');
}

function clickBG38_1(){
    window.location = ('../html/ar_password.html');
}
function clickBG38_2(){
    input_38_value = document.querySelector(".input38").value;
    if(input_38_value != 0){
        background_38.setAttribute('style','visibility:hidden');
        buttonGroup38_1.setAttribute('style','visibility:hidden');
        input_38.setAttribute('style','visibility:hidden');
        buttonGroup38_2.setAttribute('style','visibility:hidden');

        background_40.setAttribute('style','none');
        buttonGroup40_1.setAttribute('style','none');
        buttonGroup40_2.setAttribute('style','none');
    }
    else{
        buttonGroup38_2.setAttribute('style','none');
    }
}

function clickBG40_1(){
    background_40.setAttribute('style','visibility:hidden');
    buttonGroup40_1.setAttribute('style','visibility:hidden');
    buttonGroup40_2.setAttribute('style','visibility:hidden');

    background_41.setAttribute('style','none');
    buttonGroup41_1.setAttribute('style','none');
}

function clickBG41_1(){
    background_41.setAttribute('style','visibility:hidden');
    buttonGroup41_1.setAttribute('style','visibility:hidden');

    background_42.setAttribute('style','none');
    buttonGroup42_1.setAttribute('style','none');
}

function clickBG42_1(){
    background_42.setAttribute('style','visibility:hidden');
    buttonGroup42_1.setAttribute('style','visibility:hidden');

    background_43.setAttribute('style','none');
    setTimeout(function(){
        clickBG43_1();
        music2();
    },8400); //8400
    music4();
}

function clickBG43_1(){
    background_43.setAttribute('style','visibility:hidden');

    background_45.setAttribute('style','none');
    buttonGroup45_0.setAttribute('style','none');
    buttonGroup45_1.setAttribute('style','none');
    buttonGroup45_2.setAttribute('style','none');
}

function clickBG45_1(){
    background_45.setAttribute('style','visibility:hidden');
    buttonGroup45_0.setAttribute('style','visibility:hidden');
    buttonGroup45_1.setAttribute('style','visibility:hidden');
    buttonGroup45_2.setAttribute('style','visibility:hidden');

    background_46.setAttribute('style','none');
    buttonGroup46_0.setAttribute('style','none');
    buttonGroup46_1.setAttribute('style','none');
    buttonGroup46_2.setAttribute('style','none');
    music3();
}

function clickBG46_1(){
    background_46.setAttribute('style','visibility:hidden');
    buttonGroup46_0.setAttribute('style','visibility:hidden');
    buttonGroup46_1.setAttribute('style','visibility:hidden');
    buttonGroup46_2.setAttribute('style','visibility:hidden');

    background_47.setAttribute('style','none');
    buttonGroup47_0.setAttribute('style','none');
    buttonGroup47_1.setAttribute('style','none');
    buttonGroup47_2.setAttribute('style','none');
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
function clickBG40_1_(){
    buttonGroup40_1.setAttribute('style','opacity: 0.5');
}
function clickBG40_2_(){
    buttonGroup40_2.setAttribute('style','opacity: 0.5');
}
function clickBG41_1_(){
    buttonGroup41_1.setAttribute('style','opacity: 0.5');
}
function clickBG42_1_(){
    buttonGroup42_1.setAttribute('style','opacity: 0.5');
}
function clickBG45_1_(){
    buttonGroup45_1.setAttribute('style','opacity: 0.5');
}
function clickBG45_2_(){
    buttonGroup45_2.setAttribute('style','opacity: 0.5');
}
function clickBG46_1_(){
    buttonGroup46_1.setAttribute('style','opacity: 0.5');
}
function clickBG46_2_(){
    buttonGroup46_2.setAttribute('style','opacity: 0.5');
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
buttonGroup38_2.addEventListener('touchend',clickBG38_2);

buttonGroup40_1.addEventListener('touchstart',clickBG40_1_);
buttonGroup40_1.addEventListener('touchend',clickBG40_1);

buttonGroup40_2.addEventListener('touchstart',clickBG40_2_);
buttonGroup40_2.addEventListener('touchend',clickBG40_1);

buttonGroup41_1.addEventListener('touchstart',clickBG41_1_);
buttonGroup41_1.addEventListener('touchend',clickBG41_1);

buttonGroup42_1.addEventListener('touchstart',clickBG42_1_);
buttonGroup42_1.addEventListener('touchend',clickBG42_1);

buttonGroup45_1.addEventListener('touchstart',clickBG45_1_);
buttonGroup45_1.addEventListener('touchend',clickBG45_1);

buttonGroup45_2.addEventListener('touchstart',clickBG45_2_);
buttonGroup45_2.addEventListener('touchend',clickBG45_1);

buttonGroup46_1.addEventListener('touchstart',clickBG46_1_);
buttonGroup46_1.addEventListener('touchend',clickBG46_1);

buttonGroup46_2.addEventListener('touchstart',clickBG46_2_);
buttonGroup46_2.addEventListener('touchend',clickBG46_1);


// slider_1.oninput = function() {
//     output1.innerHTML = this.value;
// }
// slider_2.oninput = function() {
//     output2.innerHTML = this.value;
// }
