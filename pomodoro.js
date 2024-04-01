let exercises = [];
let ex = 0;
let offset = 0
function getExercise() {
  fetch(
    "https://api.api-ninjas.com/v1/exercises?type=stretching&offset=" + offset,
    {
      method: "GET",
      headers: { "X-Api-Key": "My api" },
      contentType: "application/json",
    }
  )
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
      exercises = dados;
    })
    .catch((error) => console.log(error));
}
let timer;
let oneSecond = 100;
let studyTime = 25; 
let restTime = 5;

function startStudyTimer() {
  pomodoro();
  document.getElementById("pauseButton").disabled = false;
      let minutes = remainingTime.minutes || studyTime;
      let seconds = remainingTime.seconds || 0;
  document.getElementById("startStudyButton").disabled = true;
  document.getElementById("pauseButton").disabled = false;

 timer = setInterval(function () {
   if (seconds === 0 && minutes === 0) {
     clearInterval(timer);
     document.getElementById("startRestButton").disabled = false;
     alert("Fim do tempo de estudo!");
   } else if (seconds === 0) {
     seconds = 59;
     minutes--;
   } else {
     seconds--;
   }
   updateTimerDisplay(minutes, seconds);
 }, oneSecond);
}

function startRestTimer() {
  alongar()
  document.getElementById("pauseButton").disabled = false;
  let minutes = remainingTime.minutes || restTime;
  let seconds = remainingTime.seconds || 0;
  document.getElementById("startRestButton").disabled = true;
  document.getElementById("pauseButton").disabled = false;
  updateTimerDisplay(minutes, seconds);

  timer = setInterval(function () {
    if (seconds === 0 && minutes === 0) {
      clearInterval(timer);
      document.getElementById("startStudyButton").disabled = false;
      alert("Fim do tempo de descanso!");
    } else if (seconds === 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }
    updateTimerDisplay(minutes, seconds);
  }, oneSecond);
}


function pauseTimer() {
  clearInterval(timer);
  document.getElementById("startStudyButton").disabled = false;
  document.getElementById("startRestButton").disabled = false;
  document.getElementById("pauseButton").disabled = true;
  remainingTime = {
    minutes: parseInt(document.getElementById("minutes").textContent),
    seconds: parseInt(document.getElementById("seconds").textContent),
  };
}

function updateTimerDisplay(minutes, seconds) {
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

document
  .getElementById("startStudyButton")
  .addEventListener("click", startStudyTimer);
document.getElementById("startRestButton").disabled = true
.addEventListener(
  "click",
  startRestTimer
);

document.getElementById("pauseButton").disabled = true.
addEventListener(
  "click",
  pauseTimer
);

function pomodoro() {
  let inner = document.getElementById("inner");
  inner.textContent = "Let´s study";
}
function alongar() {
  let inner = document.getElementById("inner");
  let describe = document.getElementById("descricao");
  inner.textContent = `alongamento: ${exercises[ex].name}`;
  describe.textContent = `como fazer: ${exercises[ex].intructions}`;
}

document.getElementById("done").disabled = true
.addEventListener("click", () =>{
alongar()
if (ex === 9){
  offset +=10
  ex = 0
  getExercise()
}
ex++});
