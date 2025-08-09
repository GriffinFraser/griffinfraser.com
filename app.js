const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('#normal-navbar')

menu.addEventListener('click', function(){
    menu.classList.toggle('active1');
    menuLinks.classList.toggle('active2');
});