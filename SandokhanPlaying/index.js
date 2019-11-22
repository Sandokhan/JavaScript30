document.querySelectorAll('[data-key]').forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.getAttribute('data-key'))
    })
})


function takeValues(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add('playing');
}
const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', takeValues);