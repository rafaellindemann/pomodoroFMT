let exercises = ["arroz", "feijão", 'batata'];
function getExercise() {
  fetch("https://api.api-ninjas.com/v1/exercises?type=stretching", {
    method: "GET",
    headers: { "X-Api-Key": "my api" },
    contentType: "application/json",
  })
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
      exercises = dados;
    })
    .catch((error) => console.log(error));
}
let timer;
let minutesWork = 25;
let secondsWork = 0;
let minutesRest = 5;
let secondsRest = 0;
let minutes = minutesWork;
let seconds = secondsWork;
let state = "work"; // | 'rest'
let oneSecond = 10; // 1000

function pomodoro() {
  let inner = document.getElementById("inner");
  inner.textContent = "Let´s study";
}

function alongar() {
  let i = 0;
  let inner = document.getElementById("inner");
inner.textContent = `o alongamento é ${exercises[i]}`;
function doneExercise() {
  i++;
  inner.textContent = `o alongamento é ${exercises[i]}`;
}
}

function startTimer() {
  pomodoro();
  if (state === "work") {
    minutes = minutesWork;
    seconds = secondsWork;
  } else if (state === "rest") {
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
  const minutos = document.getElementById("minutes");
  const segundos = document.getElementById("seconds");
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      if (state === "work") {
        alert("End of the WORK!");
        state = "rest";
        document.getElementById("startWork").setAttribute("disabled", true);
        document.getElementById("startRest").removeAttribute("disabled");
        document.getElementById("startRest").focus();
      } else if (state === "rest") {
        alert("End of the REST!");
        state = "work";
        document.getElementById("startWork").removeAttribute("disabled");
        document.getElementById("startWork").focus();
        document.getElementById("startRest").setAttribute("disabled", true);
      }
      return;
    }
    minutes--;
    seconds = 60;
  } else {
    seconds--;
  }

  //   timerDisplay.innerText = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
  minutos.innerText = `${minutes.toString().padStart(2, "0")}`;
  segundos.innerText = `${seconds.toString().padStart(2, "0")}`;
}

function resetTimer() {
  clearInterval(timer);
  if (state === "work") {
    minutes = minutesWork;
    seconds = secondsWork;
  } else if (state === "rest") {
    minutes = minutesRest;
    seconds = secondsRest;
  }
  document.getElementById("minutes").innerText = `${minutes
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("seconds").innerText = `${seconds
    .toString()
    .padStart(2, "0")}`;
}

function pause() {
  cronometro.pause();
}
document.getElementById("startWork").addEventListener("click", startTimer);
document.getElementById("startRest").disabled = true.addEventListener(
  "click",startTimerRest);
document.getElementById("pauseButton").disabled = true.addEventListener(
  "click",pauseTimer);
  document.getElementById("done").disabled = true.addEventListener(
    "click",doneExercise);


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("minutes").innerText = `${minutesWork
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("seconds").innerText = `${secondsWork
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("startWork").removeAttribute("disabled");
  document.getElementById("startRest").setAttribute("disabled", true);
});
