let navbar = document.querySelector('.navbar');

let scrollValue = Math.floor(window.scrollY)
window.addEventListener('scroll', () => {
    let scrollValue = Math.floor(window.scrollY)
    let impact_div = document.querySelector('.impact_div');
    if (scrollValue < 50) {
        navbar.classList.remove('navbar_background')
    }
    else if(scrollValue>1800){
        impact_div.classList.remove('rotate')
    }
    else if(scrollValue>2000){
        impact_div.classList.add('rotate')
    }
   
    
    
})



let main_img = document.querySelector(".background_image")
main_img.classList.add('main_img')







let btn_one_one = document.getElementById('btn_one_one');
let btn_two_two = document.getElementById('btn_two_two');

let page_block_div = document.querySelector('.page_block_div');
let captain_image = document.querySelector('.captain_image');

function btn_two() {
    page_block_div.style.display = 'none';
    captain_image.style.display = 'block';
    btn_two_two.style.background = 'orange';
    btn_one_one.style.background = 'white'



}
function btn_one() {
    captain_image.style.display = 'none'
    page_block_div.style.display = 'block';
    btn_two_two.style.background = 'white';
    btn_one_one.style.background = 'orange'



}













// ======================================       page4               ==============================





let page_btn_one_id = document.getElementById('page_btn_one_id');
let page_btn_two_id = document.getElementById('page_btn_two_id');
let page_four_cus = document.querySelector('.page_four_cus');
let page_four_cap = document.querySelector('.page_four_cap');


function page_four_btn_one() {
    page_btn_two_id.style.background = 'white'
    page_four_cap.style.display = 'none';
    page_btn_one_id.style.background = 'orange';

    page_four_cus.style.display = 'block'



}
function page_four_btn_two() {
    page_four_cus.style.display = 'none';
    page_btn_two_id.style.background = 'orange';
    page_btn_one_id.style.background = 'white';
    page_four_cap.style.display = 'block';


}


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
})

// ======================================       sign up button      ==============================

let sign_form =document.querySelector('.sign_form');
let oheight = window.outerHeight 

console.log(oheight)

let height = Math.floor(window.scrollY)



function signup() {
    sign_form.classList.add('black_screen');
  
    document.querySelector('body').style.overflowY = 'hidden';
    sign_form.style.display='block'

}


let sign_up_btn_x =document.getElementById('sign_up_btn_x');


sign_up_btn_x.addEventListener('click',()=>{
    sign_form.classList.remove('black_screen')
    document.querySelector('body').style.overflowY = 'visible';

})