let menu = document.querySelector('aside');
let nav = document.querySelector('nav');

function mover(){
    nav.classList.toggle('moverCentro');
}

menu.onclick = mover;