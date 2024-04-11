let exercises = [];
let ex = 0;
let offset = 0;
let pause = false;
let fimEstudo = false;
let fimDescanso = false;
function getExercise() {
  fetch(
    "https://api.api-ninjas.com/v1/exercises?type=stretching&offset=" + offset,
    {
      method: "GET",
      headers: { "X-Api-Key": "my api" },
      
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
let oneSecond = 10;
let remainingTime //= { minutes, seconds};

function startStudyTimer() {
  pomodoro();
  getExercise();
  remainingTime = { minutes: 25, seconds: 0 };
  // document.getElementById("pauseButton").disabled = false;
  // document.getElementById("startStudyButton").disabled = true;
  // document.getElementById("startRestButton").disabled = true;

  timer = setInterval(function () {
    if(!pause)
    {
      if (remainingTime.seconds === 0 && remainingTime.minutes === 0) {
        clearInterval(timer);
        // document.getElementById("startRestButton").disabled = false;
        if(!fimEstudo){
          alert("Fim do tempo de estudo!");
          fimEstudo = true;
        }
      } else if (remainingTime.seconds === 0) {
        remainingTime.seconds = 59;
        remainingTime.minutes--;
      } else {
        remainingTime.seconds--;
        fimEstudo = false;
      }
      updateTimerDisplay();
    }

  }, oneSecond);
}

function startRestTimer() {
  alongar();
  remainingTime = { minutes: 5, seconds: 0 };
  // document.getElementById("pauseButton").disabled = false;
  // document.getElementById("startRestButton").disabled = true;
  // document.getElementById("startStudyButton").disabled = true;
  document.getElementById("done").disabled = false;

  timer = setInterval(function () {
    if(!pause)
    {
      if (remainingTime.seconds === 0 && remainingTime.minutes === 0) {
        clearInterval(timer);
        document.getElementById("startStudyButton").disabled = false;
        if(!fimDescanso){
          alert("Fim do tempo de descanso!");
          fimDescanso = true;
        }
      } else if (remainingTime.seconds === 0) {
        remainingTime.seconds = 59;
        remainingTime.minutes--;
      } else {
        remainingTime.seconds--;
        fimDescanso = false;
      }
    }
    updateTimerDisplay();
  }, oneSecond);
}

function pauseTimer() {
  //clearInterval(timer);
  pause = !pause;
  console.log(pause);
  // document.getElementById("startStudyButton").disabled = pause;
  // document.getElementById("startRestButton").disabled = pause;
  // document.getElementById("pauseButton").disabled = true;
}

function updateTimerDisplay() {
  const minutes = remainingTime.minutes;
  const seconds = remainingTime.seconds;
  const timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function pomodoro() {
  let inner = document.getElementById("inner");
  let describe = document.getElementById("descricao");
  inner.textContent = "Let´s study";
  describe.textContent = '';
}

function alongar() {
  let inner = document.getElementById("inner");
  let describe = document.getElementById("descricao");
  console.log(exercises);
  inner.textContent = `alongamento: ${exercises[ex].name}`;
  describe.textContent = `Instruções: ${exercises[ex].instructions}`;
  // describe.textContent = `Instruções: ${exercises[i].instructions}`;
}

function showExercise() {
  let inner = document.getElementById("inner");
  let describe = document.getElementById("descricao");
  inner.textContent = `alongamento: ${exercises[ex].name}`;
  describe.textContent = `Instruções: ${exercises[ex].instructions}`;
  // describe.textContent = `Instruções: ${exercises[i].instructions}`;
}


document.getElementById("done").addEventListener(
  "click",
  () => {
    showExercise();
    if (ex === 9) {
      offset += 10;
      ex = 0;
      let inner = document.getElementById("inner");
      let describe = document.getElementById("descricao");
      inner.textContent = `alongamento: ${exercises[ex].name}`;
      describe.textContent = `Instruções: ${exercises[ex].instructions}`;
    }
    ex++;
  }
);
// document.getElementById("done").disabled = true

document
  .getElementById("startStudyButton")
  .addEventListener("click", startStudyTimer);
document
  .getElementById("startRestButton")
  .addEventListener("click", startRestTimer);
document.getElementById("pauseButton").addEventListener("click", pauseTimer);
