var background_43 = document.querySelector(".background_image43");
var option_43 = document.querySelector(".option_43");

var background_45 = document.querySelector(".background_image45");
var talk45 = document.querySelector('.talk45');
var option45_1 = document.querySelector(".option45_1");
var option45_2 = document.querySelector(".option45_2");

var background_46 = document.querySelector(".background_image46");
var talk46 = document.querySelector('.talk46');
var option46_1 = document.querySelector(".option46_1");
var option46_2 = document.querySelector(".option46_2");

var background_47 = document.querySelector(".background_image47");
var talk47 = document.querySelector('.talk47');
var option47_1 = document.querySelector(".option47_1");
var option47_2 = document.querySelector(".option47_2");


function clickop_43(){
    background_43.setAttribute('style','visibility:hidden;');
    option_43.setAttribute('style','visibility:hidden;');

    background_45.setAttribute('style','none');
    talk45.setAttribute('style','none');
    option45_1.setAttribute('style','none');
    option45_2.setAttribute('style','none');
}

function clickop_45(){
    background_45.setAttribute('style','visibility:hidden;');
    talk45.setAttribute('style','visibility:hidden;');
    option45_1.setAttribute('style','visibility:hidden;');
    option45_2.setAttribute('style','visibility:hidden;');

    background_46.setAttribute('style','none');
    talk46.setAttribute('style','none');
    option46_1.setAttribute('style','none');
    option46_2.setAttribute('style','none');
}

function clickop_46(){
    background_46.setAttribute('style','visibility:hidden;');
    talk46.setAttribute('style','visibility:hidden;');
    option46_1.setAttribute('style','visibility:hidden;');
    option46_2.setAttribute('style','visibility:hidden;');

    background_47.setAttribute('style','none');
    talk47.setAttribute('style','none');
    option47_1.setAttribute('style','none');
    option47_2.setAttribute('style','none');
}


option_43.addEventListener('click',clickop_43);
option45_1.addEventListener('click',clickop_45);
option45_2.addEventListener('click',clickop_45);
option46_1.addEventListener('click',clickop_46);
option46_2.addEventListener('click',clickop_46);