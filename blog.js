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



// ======================================       pagination      ==============================


let btn_1_id=document.getElementById('btn_1_id');

let btn_2_id=document.getElementById('btn_2_id');

let blog_page_one =document.querySelector('.blog_page_one');

let blog_page_two =document.querySelector('.blog_page_two');





function btn1(){
    btn_2_id.style.background='white';
    blog_page_two.classList.remove('block_class');
    blog_page_one.classList.remove('remove_class');
    btn_1_id.style.background='orange';





}


function btn2(){
    btn_2_id.style.background='orange';
    blog_page_two.classList.add('block_class');
    blog_page_one.classList.add('remove_class');
    btn_1_id.style.background='white'
}


