let exercises = [];
let ex = 0;
let offset = 0
function getExercise() {
  fetch(
    "https://api.api-ninjas.com/v1/exercises?type=stretching&offset=" + offset,
    {
      method: "GET",
      headers: { "X-Api-Key": "jPdhdlawZpPuFrvft5TksAfuSanhftgzqWd6smRi" },
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
 let remainingTime = { minutes: 25, seconds: 0 };

 function startStudyTimer() {
   pomodoro();
   document.getElementById("pauseButton").disabled = false;
   document.getElementById("startStudyButton").disabled = true;
   document.getElementById("startRestButton").disabled = true;

   timer = setInterval(function () {
     if (remainingTime.seconds === 0 && remainingTime.minutes === 0) {
       clearInterval(timer);
       document.getElementById("startRestButton").disabled = false;
       alert("Fim do tempo de estudo!");
     } else if (remainingTime.seconds === 0) {
       remainingTime.seconds = 59;
       remainingTime.minutes--;
     } else {
       remainingTime.seconds--;
     }
     updateTimerDisplay();
   }, oneSecond);
 }

 function startRestTimer() {
   alongar();
   remainingTime = { minutes: 5, seconds: 0 }; // Define o tempo de descanso para 5 minutos (300 segundos)
   document.getElementById("pauseButton").disabled = false;
   document.getElementById("startRestButton").disabled = true;
   document.getElementById("startStudyButton").disabled = true;

   timer = setInterval(function () {
     if (remainingTime.seconds === 0 && remainingTime.minutes === 0) {
       clearInterval(timer);
       document.getElementById("startStudyButton").disabled = false;
       alert("Fim do tempo de descanso!");
     } else if (remainingTime.seconds === 0) {
       remainingTime.seconds = 59;
       remainingTime.minutes--;
     } else {
       remainingTime.seconds--;
     }
     updateTimerDisplay();
   }, oneSecond);
 }

 function pauseTimer() {
   clearInterval(timer);
   document.getElementById("startStudyButton").disabled = false;
   document.getElementById("startRestButton").disabled = false;
   document.getElementById("pauseButton").disabled = true;
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
   inner.textContent = "Let´s study";
 }

 function alongar() {
   let inner = document.getElementById("inner");
   let describe = document.getElementById("descricao");
   inner.textContent = `alongamento: ${exercises[ex].name}`;
   describe.textContent = `Instruções: ${exercises[i].ins}`;
 }

 document
   .getElementById("startStudyButton")
   .addEventListener("click", startStudyTimer);
 document
   .getElementById("startRestButton")
   .addEventListener("click", startRestTimer);
 document.getElementById("pauseButton").addEventListener("click", pauseTimer);