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



// =====================================================overview image======================================================


let Overviews=document.getElementById('Overviews');
let Customers=document.getElementById('Customers');
let Captains=document.getElementById('Captains');

let Overviews_div=document.querySelector('.Overviews_div');
let cus_div=document.querySelector('.cus_div');
let cap_div= document.querySelector('.cap_div');

Overviews.addEventListener('click',()=>{
    Overviews_div.style.display='block'
    cus_div.classList.remove('block_class');
    cap_div.classList.remove('block_class');


})

Customers.addEventListener('click',()=>{
    cus_div.classList.add('block_class');
    Overviews_div.style.display='none'
    cap_div.classList.remove('block_class');

    

})

Captains.addEventListener('click',()=>{
    cap_div.classList.add('block_class');
    Overviews_div.style.display='none'
    cus_div.classList.remove('block_class');


})



