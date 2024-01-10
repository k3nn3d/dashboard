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

/*****************
 Modal script
 * ***********/
const open_modal_buttons = document.querySelectorAll('.openModal');
const close_modal_buttons = document.querySelectorAll('.closeModal');

open_modal_buttons.forEach(open_modal => {
    open_modal.addEventListener('click',()=>{
        const modalId = open_modal.getAttribute('data-target');
        const modal_container = document.querySelector(modalId);
        modal_container.classList.add('show')
    });
});

close_modal_buttons.forEach(close_modal=>{
    close_modal.addEventListener('click',()=>{
        const modalId = close_modal.getAttribute('data-target');
        const modal_container = document.querySelector(modalId);
        modal_container.classList.remove('show')
    }); 
}); 

window.onclick = function(event) {
    if (event.target.classList.contains('modal-container')) {
        event.target.classList.remove('show');
    }
}    

