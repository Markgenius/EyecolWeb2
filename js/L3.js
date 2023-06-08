var background_12 = document.querySelector(".background_image12");
var talk12 = document.querySelector('.talk12');
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");

var background_13 = document.querySelector(".background_image13");
var talk13 = document.querySelector('.talk13');
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");

var background_14 = document.querySelector(".background_image14");
var talk14 = document.querySelector('.talk14');
var option5 = document.querySelector(".option5");
var option6 = document.querySelector(".option6");

var background_15 = document.querySelector(".background_image15");
var glass = document.querySelector(".glass");
var option7 = document.querySelector(".option7");
var option8 = document.querySelector(".option8");
var option9 = document.querySelector(".option9");
var option10 = document.querySelector(".option10");

var background_17 = document.querySelector(".background_image17");
var talk17 = document.querySelector('.talk17');
var option11 = document.querySelector(".option11");
var option12 = document.querySelector(".option12");

var background_18 = document.querySelector(".background_image18");
var talk18 = document.querySelector('.talk18');
var option18_1 = document.querySelector(".option18_1");
var option18_2 = document.querySelector(".option18_2");
var option18_3 = document.querySelector(".option18_3");
var option18_4 = document.querySelector(".option18_4");
var option18_5 = document.querySelector(".option18_5");
var option18_6 = document.querySelector(".option18_6");
var option18_7 = document.querySelector(".option18_7");

var background_19 = document.querySelector(".background_image19");
var talk19 = document.querySelector('.talk19');
var option19_1 = document.querySelector(".option19_1");
var option19_2 = document.querySelector(".option19_2");

var background_20 = document.querySelector(".background_image20");
var magichat = document.querySelector(".magichat");
var option20 = document.querySelector(".option20");

var background_21 = document.querySelector(".background_image21");
var start = document.querySelector(".start");
var magichat_1 = document.querySelector(".magichat_1");
var unknown = document.querySelector(".unknown_1");
var cloth = document.querySelector(".cloth");
var end = document.querySelector(".end");
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
    background_12.setAttribute('style','visibility:hidden');
    talk12.setAttribute('style','visibility:hidden');
    option1.setAttribute('style','visibility:hidden');
    option2.setAttribute('style','visibility:hidden');

    background_13.setAttribute('style','none');
    talk13.setAttribute('style','none');
    option3.setAttribute('style','none');
    option4.setAttribute('style','none');
}

function clickBG23_1(){
    background_13.setAttribute('style','visibility:hidden');
    talk13.setAttribute('style','visibility:hidden');
    option3.setAttribute('style','visibility:hidden');
    option4.setAttribute('style','visibility:hidden');

    background_14.setAttribute('style','none');
    talk14.setAttribute('style','none');
    option5.setAttribute('style','none');
    option6.setAttribute('style','none');
}

function clickBG24_1(){
    background_14.setAttribute('style','visibility:hidden');
    talk14.setAttribute('style','visibility:hidden');
    option5.setAttribute('style','visibility:hidden');
    option6.setAttribute('style','visibility:hidden');

    background_15.setAttribute('style','none');
    glass.setAttribute('style','none');
    option7.setAttribute('style','none');
    option8.setAttribute('style','none');
    option9.setAttribute('style','none');
    option10.setAttribute('style','none');
}

// function clickBG25_1(){
//     background_25.setAttribute('style','visibility:hidden');
//     buttonGroup25_1.setAttribute('style','visibility:hidden');
//     buttonGroup25_2.setAttribute('style','visibility:hidden');

//     background_26.setAttribute('style','none');
//     buttonGroup26_0.setAttribute('style','none');
//     buttonGroup26_1.setAttribute('style','none');
//     buttonGroup26_2.setAttribute('style','none');
//     buttonGroup26_3.setAttribute('style','none');
//     buttonGroup26_4.setAttribute('style','none');
// }

function clickBG26_4(){
    background_15.setAttribute('style','visibility:hidden');
    glass.setAttribute('style','visibility:hidden');
    option7.setAttribute('style','visibility:hidden');
    option8.setAttribute('style','visibility:hidden');
    option9.setAttribute('style','visibility:hidden');
    option10.setAttribute('style','visibility:hidden');

    background_17.setAttribute('style','none');
    talk17.setAttribute('style','none');
    option11.setAttribute('style','none');
    option12.setAttribute('style','none');
}

function clickBG28_1(){
    background_17.setAttribute('style','visibility:hidden');
    talk17.setAttribute('style','visibility:hidden');
    option11.setAttribute('style','visibility:hidden');
    option12.setAttribute('style','visibility:hidden');

    background_18.setAttribute('style','none');
    talk18.setAttribute('style','none');
    option18_1.setAttribute('style','none');
    option18_2.setAttribute('style','none');
    option18_3.setAttribute('style','none');
    option18_4.setAttribute('style','none');
    option18_5.setAttribute('style','none');
    option18_6.setAttribute('style','none');
    option18_7.setAttribute('style','none');
}

function clickBG29_7(){
    background_18.setAttribute('style','visibility:hidden');
    talk18.setAttribute('style','visibility:hidden');
    option18_1.setAttribute('style','visibility:hidden');
    option18_2.setAttribute('style','visibility:hidden');
    option18_3.setAttribute('style','visibility:hidden');
    option18_4.setAttribute('style','visibility:hidden');
    option18_5.setAttribute('style','visibility:hidden');
    option18_6.setAttribute('style','visibility:hidden');
    option18_7.setAttribute('style','visibility:hidden');

    background_19.setAttribute('style','none');
    talk19.setAttribute('style','none');
    option19_1.setAttribute('style','none');
    option19_2.setAttribute('style','none');
}

function clickBG30_1(){
    background_19.setAttribute('style','visibility:hidden');
    talk19.setAttribute('style','visibility:hidden');
    option19_1.setAttribute('style','visibility:hidden');
    option19_2.setAttribute('style','visibility:hidden');

    background_20.setAttribute('style','none');
    option20.setAttribute('style','none');
    magichat.setAttribute('style','none');
}

function clickBG32_1(){
    background_20.setAttribute('style','visibility:hidden');
    option20.setAttribute('style','visibility:hidden');
    magichat.setAttribute('style','visibility:hidden');

    background_21.setAttribute('style','none');
    start.setAttribute('style','none');
    cloth.setAttribute('style','none');
    unknown.setAttribute('style','none');
    magichat_1.setAttribute('style','none');
    end.setAttribute('style','none');
}

function clickBG22_1_(){
    option1.setAttribute('style','opacity: 0.5');
}
function clickBG22_2_(){
    option2.setAttribute('style','opacity: 0.5');
}
function clickBG23_1_(){
   option3.setAttribute('style','opacity: 0.5');
}
function clickBG23_2_(){
    option4.setAttribute('style','opacity: 0.5');
}
function clickBG24_1_(){
    option5.setAttribute('style','opacity: 0.5');
}
function clickBG24_2_(){
    option6.setAttribute('style','opacity: 0.5');
}
// function clickBG25_1_(){
//     buttonGroup25_1.setAttribute('style','opacity: 0.5');
// }
// function clickBG25_2_(){
//     buttonGroup25_2.setAttribute('style','opacity: 0.5');
// }
function clickBG26_4_(){
    option10.setAttribute('style','opacity: 0.5');
}
function clickBG28_1_(){
    option11.setAttribute('style','opacity: 0.5');
}
function clickBG28_2_(){
    option12.setAttribute('style','opacity: 0.5');
}
function clickBG29_7_(){
    option18_7.setAttribute('style','opacity: 0.5');
}
function clickBG30_1_(){
    option19_1.setAttribute('style','opacity: 0.5');
}
function clickBG31_1_(){
    option19_2.setAttribute('style','opacity: 0.5');
}
// function clickBG31_2_(){
//     buttonGroup31_2.setAttribute('style','opacity: 0.5');
// }
function clickBG32_1_(){
    option20.setAttribute('style','opacity: 0.5');
}


option1.addEventListener('touchstart',clickBG22_1_);
option1.addEventListener('touchend',clickBG22_1);

option2.addEventListener('touchstart',clickBG22_2_);
option2.addEventListener('touchend',clickBG22_1);

option3.addEventListener('touchstart',clickBG23_1_);
option3.addEventListener('touchend',clickBG23_1);

option4.addEventListener('touchstart',clickBG23_2_);
option4.addEventListener('touchend',clickBG23_1);

option5.addEventListener('touchstart',clickBG24_1_);
option5.addEventListener('touchend',clickBG24_1);

option6.addEventListener('touchstart',clickBG24_2_);
option6.addEventListener('touchend',clickBG24_1);

// buttonGroup25_1.addEventListener('touchstart',clickBG25_1_);
// buttonGroup25_1.addEventListener('touchend',clickBG25_1);

// buttonGroup25_2.addEventListener('touchstart',clickBG25_2_);
// buttonGroup25_2.addEventListener('touchend',clickBG25_1);

option10.addEventListener('touchstart',clickBG26_4_);
option10.addEventListener('touchend',clickBG26_4);

option11.addEventListener('touchstart',clickBG28_1_);
option11.addEventListener('touchend',clickBG28_1);

option12.addEventListener('touchstart',clickBG28_2_);
option12.addEventListener('touchend',clickBG28_1);

option18_7.addEventListener('touchstart',clickBG29_7_);
option18_7.addEventListener('touchend',clickBG29_7);

option19_1.addEventListener('touchstart',clickBG30_1_);
option19_1.addEventListener('touchend',clickBG30_1);

option19_2.addEventListener('touchstart',clickBG31_1_);
option19_2.addEventListener('touchend',clickBG30_1);


option20.addEventListener('touchstart',clickBG32_1_);
option20.addEventListener('touchend',clickBG32_1);


// slider_1.oninput = function() {
//     output1.innerHTML = this.value;
// }
// slider_2.oninput = function() {
//     output2.innerHTML = this.value;
// }
