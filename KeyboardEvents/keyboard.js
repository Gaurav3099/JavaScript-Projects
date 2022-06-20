function removeTransaition(e) {
    if(e.propertyName != 'transform') return;
    e.target.classList.remove('playing')
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // ` converts to string
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio)
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransaition))
window.addEventListener('keydown', playSound)