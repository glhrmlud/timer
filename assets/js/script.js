function timer () {
  function criarHorasComSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  const timer = document.querySelector('.containerTimer .timer');
  const botoes = document.querySelectorAll('.buttonTimer');
  const [iniciar, pausar, zerar] = botoes;
  let segundos = 0;
  let contador;

  function iniciarTimer (){
      contador = setInterval(() => {
      segundos++;
      timer.innerHTML = criarHorasComSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', (e) => {
    let elemento = e.target

    if (elemento == iniciar) {
      clearInterval(contador)
      iniciarTimer();
      timer.classList.remove('red')
    }

    if (elemento == pausar) {
      if (timer.classList.contains('pause')){
        clearInterval(contador);
        iniciarTimer();
        timer.classList.remove('pause');
        timer.classList.remove('red');
      } else if (timer.classList.contains('timer') && !timer.classList.contains('pause')){
        clearInterval(contador);
        timer.classList.add('pause')
        timer.classList.add('red');
      }
    }

    if (elemento == zerar) {
      clearInterval(contador);
      timer.innerHTML = '00:00:00'
      timer.classList.remove('red')
      segundos = 0;
    }

  })
}

timer();