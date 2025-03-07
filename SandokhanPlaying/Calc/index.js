function playSound(e) {
    const value = document.querySelector(`value[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop function from running all together
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing');
  }  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    //console.log(e.propertyName);
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound)