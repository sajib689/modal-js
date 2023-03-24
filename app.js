const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');

function btnClick () {
    modal.style.display = 'block';
}
function crossClick () { 
    modal.style.display = 'none';
}
btn.addEventListener('click', btnClick);
modal.addEventListener('click', crossClick);