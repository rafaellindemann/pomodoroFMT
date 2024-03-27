let timer;
let minutesWork = 25;
let secondsWork = 0;
let minutesRest = 5;
let secondsRest = 0;
let minutes = minutesWork;
let seconds = secondsWork;
let state = 'work' // | 'rest'
let oneSecond = 10; // 1000
function pomodoro(){
     var image = document.getElementById('image');
     let text = document.getElementById('txt')
     text.textContent="Lets study"
    if (image.src.match("assets/initial.png")) {
      image.src = "assets/study.jpg";
      image.alt = "Imagem 2";
    }
}
async function alongar(){
  var image = document.getElementById("image");
  let text = document.getElementById("txt");
  text.textContent = "let's stretch and rest";
  if (image.src.match("assets/study.jpg")) {
    image.src = "assets/alongamentos.jpg";
    image.alt = "Imagem 3";}
  }
function startTimer() {
  pomodoro();
    if(state === 'work'){
        minutes = minutesWork;
        seconds = secondsWork;
   }else if(state === 'rest'){
    alongar();
        minutes = minutesRest;
        seconds = secondsRest;
    }
  timer = setInterval(updateTimer, oneSecond);
}
function startTimerRest() {
  alongar();
  if (state === "work") {
    minutes = minutesWork;
    seconds = secondsWork;
  } else if (state === "rest") {
    minutes = minutesRest;
    seconds = secondsRest;
  }
  timer = setInterval(updateTimer, oneSecond); // ***acelerando o tempo para facilitar testes
}
function pauseTimer() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function updateTimer() {
  const minutos = document.getElementById('minutes')
  const segundos = document.getElementById('seconds')
  if (seconds === 0) {
    if (minutes === 0) {
        clearInterval(timer);
        if(state === 'work'){
            alert('End of the WORK!');
            state = 'rest'
            document.getElementById('startWork').setAttribute('disabled', true)
            document.getElementById('startRest').removeAttribute('disabled');
            document.getElementById('startRest').focus()
        }else if(state === 'rest'){
            alert('End of the REST!');
            state = 'work'
            document.getElementById('startWork').removeAttribute('disabled');
            document.getElementById('startWork').focus()
            document.getElementById('startRest').setAttribute('disabled', true)
        }
        return;
    }
    minutes--;
    seconds = 60;
  } else {
    seconds--;
  }

//   timerDisplay.innerText = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
  minutos.innerText = `${minutes.toString().padStart(2, '0')}`;
  segundos.innerText = `${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
  clearInterval(timer);
  if(state === 'work'){
      minutes = minutesWork;
      seconds = secondsWork;
    }else if(state === 'rest'){
      minutes = minutesRest;
      seconds = secondsRest;
  }
  document.getElementById('minutes').innerText = `${minutes.toString().padStart(2, '0')}`;
  document.getElementById('seconds').innerText = `${seconds.toString().padStart(2, '0')}`;
}

//add function
function  pause(){
   cronometro.pause();
};

document.getElementById("startWork").addEventListener("click", startTimer);
document.getElementById('startRest').addEventListener('click', startTimerRest);
pauseButton.addEventListener("click", pauseTimer);
// document.getElementById('reset').addEventListener('click', resetTimer);


document.addEventListener('DOMContentLoaded', function() {
    // Sua função aqui
    document.getElementById('minutes').innerText = `${minutesWork.toString().padStart(2, '0')}`;
    document.getElementById('seconds').innerText = `${secondsWork.toString().padStart(2, '0')}`;
    document.getElementById('startWork').removeAttribute('disabled');
    document.getElementById('startRest').setAttribute('disabled', true)
});