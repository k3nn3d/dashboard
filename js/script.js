const sidemenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggle');

menuBtn.addEventListener('click',()=>{
    sidemenu.style.display = 'block'
});
closeBtn.addEventListener('click',()=>{
    sidemenu.style.display = 'none'
});
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});