let nav_icon = document.getElementById('nav_icon');
let nav_ul = document.getElementById('nav_ul');
let nav = document.getElementById('nav');

console.log(nav_icon);
nav_icon.addEventListener('click', () => {
    nav_ul.classList.toggle('show');
})