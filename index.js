
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
navbar.classList.toggle('active');
});




// Carousel Js
const left = document.querySelector('.left-button')
const right = document.querySelector('.right-button')
const slider = document.querySelector('.child-image')
const slideImage = document.querySelectorAll('.slide-image')
const bottom = document.querySelector('.bottom-buttons')

let imageOnSlide = 1;
const len = slideImage.length; 


for(let i=0;i<len;i++){
    const div = document.createElement('div')
    div.className = "button"
    bottom.appendChild(div)
}
const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor= "darkgreen"

const resetBg = () =>{
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"
    })
}
var winSize = window.innerWidth;
if(winSize<= 550){
    buttons.forEach((button,i) => {
        button.addEventListener("click", ()=>{
            resetBg()
            slider.style.transform = `translateX(-${i*318}px)`;
            imageOnSlide = i+1;
            button.style.backgroundColor = "darkgreen"
        })
    })
    
    
    const nextSlide = () => {
        slider.style.transform = `translateX(-${imageOnSlide * 318}px)`;
        imageOnSlide++;
    }
    const getFirstSlide = () =>{
         slider.style.transform = `translateX(0px)`
         imageOnSlide = 1;
    }
    const prevSlide = () => {
        slider.style.transform = `translateX(-${(imageOnSlide - 2) * 318}px)`
        imageOnSlide--;
    }
    const getLastSlide = () => {
        slider.style.transform = `translateX(-${(len-1) * 318}px)`
        imageOnSlide = len;
    }
    right.addEventListener("click", ()=>{
      imageOnSlide < len ? nextSlide() : getFirstSlide();
      resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
    
    left.addEventListener("click", () => {
       imageOnSlide > 1 ? prevSlide() : getLastSlide();   
       resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
}
else if(winSize<=900){
    buttons.forEach((button,i) => {
        button.addEventListener("click", ()=>{
            resetBg()
            slider.style.transform = `translateX(-${i*500}px)`;
            imageOnSlide = i+1;
            button.style.backgroundColor = "darkgreen"
        })
    })
    
    
    const nextSlide = () => {
        slider.style.transform = `translateX(-${imageOnSlide * 500}px)`;
        imageOnSlide++;
    }
    const getFirstSlide = () =>{
         slider.style.transform = `translateX(0px)`
         imageOnSlide = 1;
    }
    const prevSlide = () => {
        slider.style.transform = `translateX(-${(imageOnSlide - 2) * 500}px)`
        imageOnSlide--;
    }
    const getLastSlide = () => {
        slider.style.transform = `translateX(-${(len-1) * 500}px)`
        imageOnSlide = len;
    }
    right.addEventListener("click", ()=>{
      imageOnSlide < len ? nextSlide() : getFirstSlide();
      resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
    
    left.addEventListener("click", () => {
       imageOnSlide > 1 ? prevSlide() : getLastSlide();   
       resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
}
else if(winSize<=1140){
    buttons.forEach((button,i) => {
        button.addEventListener("click", ()=>{
            resetBg()
            slider.style.transform = `translateX(-${i*800}px)`;
            imageOnSlide = i+1;
            button.style.backgroundColor = "darkgreen"
        })
    })
    
    
    const nextSlide = () => {
        slider.style.transform = `translateX(-${imageOnSlide * 800}px)`;
        imageOnSlide++;
    }
    const getFirstSlide = () =>{
         slider.style.transform = `translateX(0px)`
         imageOnSlide = 1;
    }
    const prevSlide = () => {
        slider.style.transform = `translateX(-${(imageOnSlide - 2) * 800}px)`
        imageOnSlide--;
    }
    const getLastSlide = () => {
        slider.style.transform = `translateX(-${(len-1) * 800}px)`
        imageOnSlide = len;
    }
    right.addEventListener("click", ()=>{
      imageOnSlide < len ? nextSlide() : getFirstSlide();
      resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
    
    left.addEventListener("click", () => {
       imageOnSlide > 1 ? prevSlide() : getLastSlide();   
       resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
}
else{
    buttons.forEach((button,i) => {
        button.addEventListener("click", ()=>{
            resetBg()
            slider.style.transform = `translateX(-${i*1000}px)`;
            imageOnSlide = i+1;
            button.style.backgroundColor = "darkgreen"
        })
    })
    
    
    const nextSlide = () => {
        slider.style.transform = `translateX(-${imageOnSlide * 1000}px)`;
        imageOnSlide++;
    }
    const getFirstSlide = () =>{
         slider.style.transform = `translateX(0px)`
         imageOnSlide = 1;
    }
    const prevSlide = () => {
        slider.style.transform = `translateX(-${(imageOnSlide - 2) * 1000}px)`
        imageOnSlide--;
    }
    const getLastSlide = () => {
        slider.style.transform = `translateX(-${(len-1) * 1000}px)`
        imageOnSlide = len;
    }
    right.addEventListener("click", ()=>{
      imageOnSlide < len ? nextSlide() : getFirstSlide();
      resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
    
    left.addEventListener("click", () => {
       imageOnSlide > 1 ? prevSlide() : getLastSlide();   
       resetBg()
      buttons[imageOnSlide -1].style.backgroundColor = "darkgreen";
    })
}
