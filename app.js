const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');

function btnClick (e) {
    e.preventDefault();
    modal.style.display = 'block';
}
function crossClick () { 
    
    modal.style.display = 'none';
}
btn.addEventListener('click', btnClick);
modal.addEventListener('click', crossClick);