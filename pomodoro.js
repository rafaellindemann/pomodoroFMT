function pomodoro(){
     var image = document.getElementById('image');
    if (image.src.match("assets/initial.png")) {
      image.src = "assets/study.jpg";
      image.alt = "Imagem 2";
    } else {
      image.src = "imagem1.jpg";
      image.alt = "Imagem 1";
    }
    setTimeout(function() {
     alongar();
    },10000);
}
async function alongar(){
    setTimeout(function() {
  var image = document.getElementById("image");
  if (image.src.match("assets/study.jpg")) {
    image.src = "assets/alongamentos.jpg";
    image.alt = "Imagem 3";}
  }, 3000);}

 function pomodoro(){
     var image = document.getElementById('image');
    if (image.src.match("assets/initial.png")) {
      image.src = "assets/study.jpg";
      image.alt = "Imagem 2";
    } else {
      image.src = "imagem1.jpg";
      image.alt = "Imagem 1";
    }
    setTimeout(function() {
     alongar();
    },10000);
}
async function alongar(){
    setTimeout(function() {
  var image = document.getElementById("image");
  if (image.src.match("assets/study.jpg")) {
    image.src = "assets/alongamentos.jpg";
    image.alt = "Imagem 3";}
  }, 1000);}

  //Parte time Rafael//
let timer;

let minutesWork = 1;
let secondsWork = 22;
let minutesRest = 1;
let secondsRest = 9;
let minutes = minutesWork;
let seconds = secondsWork;
let state = 'work' // | 'rest'
let oneSecond = 50; // 1000

function startTimer() {
  pomodoro();
    if(state === 'work'){
        minutes = minutesWork;
        seconds = secondsWork;
    }else if(state === 'rest'){
        minutes = minutesRest;
        seconds = secondsRest;
    }
  timer = setInterval(updateTimer, oneSecond); // ***acelerando o tempo para facilitar testes
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

function updateTimer() {
//   const timerDisplay = document.getElementById('timer');
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
    seconds = 59;
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

document
  .getElementById("startWork").addEventListener("click", startTimer);
document.getElementById('startRest').addEventListener('click', startTimerRest);
// document.getElementById('reset').addEventListener('click', resetTimer);


document.addEventListener('DOMContentLoaded', function() {
    // Sua função aqui
    document.getElementById('minutes').innerText = `${minutesWork.toString().padStart(2, '0')}`;
    document.getElementById('seconds').innerText = `${secondsWork.toString().padStart(2, '0')}`;
    document.getElementById('startWork').removeAttribute('disabled');
    document.getElementById('startRest').setAttribute('disabled', true)
});