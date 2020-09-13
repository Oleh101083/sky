/*-----------------ibg-------------------*/
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
/*-----------------ibg-------------------*/
let layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll',
function(e){
    let offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll/5)+'%';
});

let layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll',
function(e){
    let offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll/5)+'%';
    layer2.style.left = scroll/50 +'%';
});

let text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll',
function(e){
    let offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll/5)+'%';
    text.style.top = -scroll/20 +'%';
});

// Scroll reveal
window.sr = ScrollReveal();


sr.reveal('.animate-left',{
origin: 'left',
duration:2000,
distance: '20rem',
delay: 300
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration:2000,
    delay: 600
    });

sr.reveal('.animate-top',{
        origin: 'top',
        duration:2000,
        distance: '10rem',
        delay: 600
        });

sr.reveal('.animate-bottom',{
        origin: 'bottom',
        duration:2000,
        distance: '10rem',
        delay: 600
        });
/*-----slider-------*/
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      slidesWrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;


const activeSlide = n => {
for(slide of slides){
    slide.classList.remove('active');
}
slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
    }

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    }
const nextSlide  = () => {
 if(index ==slides.length - 1){
     index = 0;
     prepareCurrentSlide(index);
 } else {
     index++;
     prepareCurrentSlide(index);
 }
}
const prevSlide  = () => {
    if(index == 0){
       index = slides.length - 1;
       prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
   }

dots.forEach((item,indexDot)=>{
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})   

const interval = setInterval(nextSlide, 2500);
function startSlid(){
   return interval;
}
function stopSlid(){
    clearInterval(interval);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// clearInterval(interval)

/*---------------GUMBURGER-MENU-----------------*/
let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
 function menutoggle(){
     if(MenuItems.style.maxHeight == "0px")
     {
        MenuItems.style.maxHeight = "500px";
     }else{
        MenuItems.style.maxHeight = "0px";
     }
 }



