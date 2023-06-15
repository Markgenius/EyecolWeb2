var background_15 = document.querySelector(".background_image15");
var glass = document.querySelector(".glass");
var finger = document.querySelector(".finger");
var option7 = document.querySelector(".option7");
var option8 = document.querySelector(".option8");
var option9 = document.querySelector(".option9");
var option10 = document.querySelector(".option10");
var optiona1_t=document.getElementById("a1-t");
var optiona2_t=document.getElementById("a2-t");
var optiona3_t=document.getElementById("a3-t")
var correct = 0;
var select = 0;
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
var optionb1_t = document.getElementById("b1-t");
var optionb2_t = document.getElementById("b2-t");
var optionb3_t = document.getElementById("b3-t");
var optionb4_t = document.getElementById("b4-t");
var optionb5_t = document.getElementById("b5-t");
var optionb6_t = document.getElementById("b6-t");

var background_19 = document.querySelector(".background_image19");
var talk19 = document.querySelector('.talk19');
var option19_1 = document.querySelector(".option19_1");
var option19_2 = document.querySelector(".option19_2");

var background_20 = document.querySelector(".background_image20");
var magichat = document.querySelector(".magichat");
var option20 = document.querySelector(".option20");

var background_21 = document.querySelector(".background_image21");
var magichat_1 = document.querySelector(".magichat_1");
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

function clickoption7(){
    option7.setAttribute('style','visibility:hidden');
    optiona2_t.setAttribute('style','visibility:hidden');
    optiona3_t.setAttribute('style','visibility:hidden');
    optiona1_t.setAttribute('style','none');
    option8.setAttribute('style','none');
    option9.setAttribute('style','none');
    correct=0;
}
function clickoption8(){
    option8.setAttribute('style','visibility:hidden');
    optiona1_t.setAttribute('style','visibility:hidden');
    optiona3_t.setAttribute('style','visibility:hidden');
    optiona2_t.setAttribute('style','none');
    option7.setAttribute('style','none');
    option9.setAttribute('style','none');
    correct=1;
}
function clickoption9(){
    option9.setAttribute('style','visibility:hidden');
    optiona1_t.setAttribute('style','visibility:hidden');
    optiona2_t.setAttribute('style','visibility:hidden');
    optiona3_t.setAttribute('style','none');
    option7.setAttribute('style','none');
    option8.setAttribute('style','none');
    correct=0;
}
function clickoptiona1_t(){
    optiona1_t.setAttribute('style','visibility:hidden');
    option7.setAttribute('style','none');
    correct=0;
}
function clickoptiona2_t(){
    optiona2_t.setAttribute('style','visibility:hidden');
    option8.setAttribute('style','none');
    correct=0;
}
function clickoptiona3_t(){
    optiona3_t.setAttribute('style','visibility:hidden');
    option9.setAttribute('style','none');
    correct=0;
}

function clickoption18_1(){
    option18_1.setAttribute('style','visibility:hidden');
    optionb1_t.setAttribute('style','none');
    select+=1;
}
function clickoption18_2(){
    option18_2.setAttribute('style','visibility:hidden');
    optionb2_t.setAttribute('style','none');
    select+=1;
}
function clickoption18_3(){
    option18_3.setAttribute('style','visibility:hidden');
    optionb3_t.setAttribute('style','none');
    select+=1;
}
function clickoption18_4(){
    option18_4.setAttribute('style','visibility:hidden');
    optionb4_t.setAttribute('style','none');
    select+=1;
}
function clickoption18_5(){
    option18_5.setAttribute('style','visibility:hidden');
    optionb5_t.setAttribute('style','none');
    select+=1;
}
function clickoption18_6(){
    option18_6.setAttribute('style','visibility:hidden');
    optionb6_t.setAttribute('style','none');
    select+=1;
}
function clickoptionb1_t(){
    optionb1_t.setAttribute('style','visibility:hidden');
    option18_1.setAttribute('style','none');
    select-=1;
}
function clickoptionb2_t(){
    optionb2_t.setAttribute('style','visibility:hidden');
    option18_2.setAttribute('style','none');
    select-=1;
}
function clickoptionb3_t(){
    optionb3_t.setAttribute('style','visibility:hidden');
    option18_3.setAttribute('style','none');
    select-=1;
}
function clickoptionb4_t(){
    optionb4_t.setAttribute('style','visibility:hidden');
    option18_4.setAttribute('style','none');
    select-=1;
}
function clickoptionb5_t(){
    optionb5_t.setAttribute('style','visibility:hidden');
    option18_5.setAttribute('style','none');
    select-=1;
}
function clickoptionb6_t(){
    optionb6_t.setAttribute('style','visibility:hidden');
    option18_6.setAttribute('style','none');
    select-=1;
}



function clickBG26_4(){
    if(correct==1){
    background_15.setAttribute('style','visibility:hidden');
    glass.setAttribute('style','visibility:hidden');
    finger.setAttribute('style','visibility:hidden');
    option7.setAttribute('style','visibility:hidden');
    option8.setAttribute('style','visibility:hidden');
    option9.setAttribute('style','visibility:hidden');
    option10.setAttribute('style','visibility:hidden');
    optiona2_t.setAttribute('style','visibility:hidden');

    background_17.setAttribute('style','none');
    talk17.setAttribute('style','none');
    option11.setAttribute('style','none');
    option12.setAttribute('style','none');
    }
    else{
    // optiona1_t.setAttribute('style','visibility:hidden');
    // optiona2_t.setAttribute('style','visibility:hidden');
    // optiona3_t.setAttribute('style','visibility:hidden');
  
    // option7.setAttribute('style','none');
    // option8.setAttribute('style','none');
    // option9.setAttribute('style','none');
    // option10.setAttribute('style','none')
    music();
    window.location=('../html/wrongans2.html');
    }
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
    if(select !=0){
    background_18.setAttribute('style','visibility:hidden');
    talk18.setAttribute('style','visibility:hidden');
    option18_1.setAttribute('style','visibility:hidden');
    option18_2.setAttribute('style','visibility:hidden');
    option18_3.setAttribute('style','visibility:hidden');
    option18_4.setAttribute('style','visibility:hidden');
    option18_5.setAttribute('style','visibility:hidden');
    option18_6.setAttribute('style','visibility:hidden');
    option18_7.setAttribute('style','visibility:hidden');
    optionb1_t.setAttribute('style','visibility:hidden');
    optionb2_t.setAttribute('style','visibility:hidden');
    optionb3_t.setAttribute('style','visibility:hidden');
    optionb4_t.setAttribute('style','visibility:hidden');
    optionb5_t.setAttribute('style','visibility:hidden');
    optionb6_t.setAttribute('style','visibility:hidden');
    
    background_19.setAttribute('style','none');
    talk19.setAttribute('style','none');
    option19_1.setAttribute('style','none');
    option19_2.setAttribute('style','none');}

    else{
        option18_7.setAttribute('style','none');
    }

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
    magichat_1.setAttribute('style','none');
}


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


option7.addEventListener('click',clickoption7);
option8.addEventListener('click',clickoption8);
option9.addEventListener('click',clickoption9);
optiona1_t.addEventListener('click',clickoptiona1_t);
optiona2_t.addEventListener('click',clickoptiona2_t);
optiona3_t.addEventListener('click',clickoptiona3_t);


option10.addEventListener('touchstart',clickBG26_4_);
option10.addEventListener('touchend',clickBG26_4);

option11.addEventListener('touchstart',clickBG28_1_);
option11.addEventListener('touchend',clickBG28_1);

option12.addEventListener('touchstart',clickBG28_2_);
option12.addEventListener('touchend',clickBG28_1);

option18_1.addEventListener('click',clickoption18_1);
option18_2.addEventListener('click',clickoption18_2);
option18_3.addEventListener('click',clickoption18_3);
option18_4.addEventListener('click',clickoption18_4);
option18_5.addEventListener('click',clickoption18_5);
option18_6.addEventListener('click',clickoption18_6);
optionb1_t.addEventListener('click', clickoptionb1_t);
optionb2_t.addEventListener('click', clickoptionb2_t);
optionb3_t.addEventListener('click', clickoptionb3_t);
optionb4_t.addEventListener('click', clickoptionb4_t);
optionb5_t.addEventListener('click', clickoptionb5_t);
optionb6_t.addEventListener('click', clickoptionb6_t);




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
