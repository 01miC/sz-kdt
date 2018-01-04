
var menuLo = document.getElementById('js-menuLo');
var bgLo = document.getElementById('js-bg-lo');
var menuTech = document.getElementById('js-menuTech');
var bgTech = document.getElementById('js-bg-tech');
var menu = document.getElementById('js-menu');
var leftSide = document.getElementById('js-left');
var rightSide = document.getElementById('js-right');

leftSide.addEventListener("mouseover", function(e) {
    bgLo.style.width = "60%";
    bgLo.style.transition = "all 0.5s ease-in"; 
    bgLo.style.zIndex = "11";  
    menuLo.style.height = "55vh"; 
    menuLo.style.width = "64.3%";
    menuLo.style.transition = "all 0.5s ease-in"; 
    bgTech.style.filter =  "grayscale(200%)";
}); 

leftSide.addEventListener("mouseleave", function(e) {
    bgLo.style.width = "50%";
    bgLo.style.transition = "all 0.5s ease-in";  
    bgLo.style.zIndex = "10";  
    menuLo.style.height = "100px"; 
    menuLo.style.width = "50%";
    menuLo.style.transition = "all 0.5s ease-in"; 
    bgTech.style.filter =  "grayscale(0%)";
});

rightSide.addEventListener("mouseover", function(e) {
    bgTech.style.width = "60%";
    bgTech.style.transition = "all 0.5s ease-in"; 
    bgTech.style.zIndex = "11";  
    menuTech.style.height = "55vh"; 
    menuTech.style.width = "64.3%";
    menuTech.style.transition = "all 0.5s ease-in"; 
    bgLo.style.filter =  "grayscale(200%)";
});

rightSide.addEventListener("mouseleave", function(e) {
    bgTech.style.width = "50%";
    bgTech.style.transition = "all 0.5s ease-in";  
    bgTech.style.zIndex = "10";  
    menuTech.style.height = "100px"; 
    menuTech.style.width = "50%";
    menuTech.style.transition = "all 0.5s ease-in"; 
    bgLo.style.filter =  "grayscale(0%)";
});
/*
menuLo.addEventListener("mousemove", function(e) {
    bgLo.style.width = "60%";
    bgLo.style.transition = "width 0.5s ease-in";   
    menuLo.style.height = "55vh"; 
    menuLo.style.width = "64.3%";
    menuLo.style.transition = "height 0.5s ease-in, width 0.5s ease-in"; 
});
/*
menuLo.addEventListener("mouseleave", function(e) {
    bgLo.style.width = "50%";
    bgLo.style.transition = "width 0.5s ease-in";   
    menuLo.style.height = "100px"; 
    menuLo.style.width = "50%";
    menuLo.style.transition = "height 0.5s ease-in, width 0.5s ease-in"; 
});*/
