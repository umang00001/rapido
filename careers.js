let navbar = document.querySelector('.navbar');

let scrollValue = Math.floor(window.scrollY)
window.addEventListener('scroll', () => {
    let scrollValue = Math.floor(window.scrollY)
    if (scrollValue < 50) {
        navbar.classList.remove('navbar_background')
    }
    else {
        navbar.classList.add('navbar_background')
    }

})



// ======================================       download button      ==============================


let download = document.querySelector('.download')
let cross_icon = document.querySelector('.cross_icon');



function dwd() {
    download.classList.add('black_screen')
    document.querySelector('body').style.overflowY = 'hidden';
    download.style.display='block'
}


cross_icon.addEventListener('click', () => {
    download.classList.remove('black_screen')
    document.querySelector('body').style.overflowY = 'visible';
    download.style.display='none'

})





// ======================================      swiper     ==============================



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });















