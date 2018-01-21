
var menuLo = document.getElementById('js-menuLo');
var bgLo = document.getElementById('js-bg-lo');
var menuTech = document.getElementById('js-menuTech');
var bgTech = document.getElementById('js-bg-tech');
var menu = document.getElementById('js-menu');
var leftSide = document.getElementById('js-left');
var rightSide = document.getElementById('js-right');
var loText=document.getElementById('js-lo-text');
var techText = document.getElementById('js-tech-text');


leftSide.addEventListener("mouseover", function(e) {
    bgLo.style.width = "60%";
    bgLo.style.transition = "all 0.2s ease-in"; 
    bgLo.style.zIndex = "11";  
    menuLo.style.height = "55vh"; 
    menuLo.style.width = "64.3%";
    menuLo.style.transition = "all 0.2s ease-in 0.2s"; 
    bgTech.style.filter =  "grayscale(200%)";
    loText.style.display = "block";
    loText.style.opacity = "1";
    loText.style.transition = "all 0.5s ease-in";

}); 

leftSide.addEventListener("mouseleave", function(e) {
    bgLo.style.width = "50%";
    bgLo.style.transition = "all 0.5s ease-in";  
    bgLo.style.zIndex = "10";  
    menuLo.style.height = "100px"; 
    menuLo.style.width = "50%";
    menuLo.style.transition = "all 0.5s ease-in"; 
    bgTech.style.filter =  "grayscale(0%)";
    loText.style.display = "none";
    loText.style.opacity = "0";
    loText.style.transition = "all 0.5s ease-in";
});

rightSide.addEventListener("mouseover", function(e) {
    bgTech.style.width = "60%";
    bgTech.style.transition = "all 0.2s ease-in"; 
    bgTech.style.zIndex = "11";  
    menuTech.style.height = "55vh"; 
    menuTech.style.width = "64.3%";
    menuTech.style.transition = "all 0.2s ease-in 0.2s"; 
    bgLo.style.filter =  "grayscale(200%)";
    techText.style.display = "block";
    techText.style.opacity = "1";
    techText.style.transition = "all 0.5s ease-in";
});

rightSide.addEventListener("mouseleave", function(e) {
    bgTech.style.width = "50%";
    bgTech.style.transition = "all 0.5s ease-in";  
    bgTech.style.zIndex = "10";  
    menuTech.style.height = "100px"; 
    menuTech.style.width = "50%";
    menuTech.style.transition = "all 0.5s ease-in"; 
    bgLo.style.filter =  "grayscale(0%)";
    techText.style.display = "none";
    techText.style.opacity = "0";
    techText.style.transition = "all 0.5s ease-in";
});