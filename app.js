const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('#normal-navbar')
const menuMain = document.querySelector('main')

menu.addEventListener('click', function(){
    menu.classList.toggle('active1');
    menuLinks.classList.toggle('active2');
    menuMain.classList.toggle('active3');
});

const contacts = document.querySelector('#mobile-contacts')
const contactsLinks = document.querySelector('#normal-contacts')

contacts.addEventListener('click', function(){
    contacts.classList.toggle('active4');
    contactsLinks.classList.toggle('active5');
});
