function timer () {
  function criarHorasComSegundos(segundos) {
    const data = new Date(segundos);
    return data.toLocaleTimeString('en-GB', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 2,
      timeZone: 'GMT'
    });
  }

  const timer = document.querySelector('.containerTimer .timer');
  const playPause = document.querySelector('#playPause');
  const zerar = document.querySelector('#reset')
  const progressBar = document.querySelector('.containerTimer')
  let segundos = 0;
  let progresso = 0;
  let contador;

  function iniciarTimer (tempo = 1000){
      contador = setInterval(() => {
      segundos++;
      progresso = progresso + 0.1;
      if (segundos !== tempo) {
        progressBar.style.backgroundImage = `conic-gradient(var(--second-color) 0% ${progresso}%, var(--dark-primary-color) 0% 100%)`
      } else if (segundos == tempo) {
        progresso = 0;
        tempo += 1000;
      }
      timer.innerHTML = criarHorasComSegundos(segundos);
    }, 1);
  }

  document.addEventListener('click', (e) => {
    let elemento = e.target

    if (elemento == playPause) {
      if (timer.classList.contains('pause')){
        clearInterval(contador);
        iniciarTimer();
        timer.classList.remove('pause');
        timer.classList.remove('red');
        playPause.src = 'assets/img/btn-pause.svg'
      } else if (timer.classList.contains('timer') && !timer.classList.contains('pause')){
        clearInterval(contador);
        timer.classList.add('pause')
        timer.classList.add('red');
        playPause.src = 'assets/img/btn-play.svg'
      }
    }

    if (elemento == zerar) {
      clearInterval(contador);
      timer.innerHTML = '00:00:00.00'
      timer.classList.add('pause')
      timer.classList.remove('red')
      segundos = 0;
      progresso = 0;
      playPause.src = 'assets/img/btn-play.svg'
      progressBar.style.backgroundImage = `conic-gradient(var(--second-color) 0% 0%, var(--dark-primary-color) 0% 100%)`
    }

  })
}

timer();