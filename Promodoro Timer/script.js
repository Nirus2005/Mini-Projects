const startE = document.getElementById("start");
const stopE = document.getElementById("stop");
const resetE = document.getElementById("reset");
const timerE = document.getElementById("timer");

let interval;
let timeLeft = 1500; 

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerE.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500; 
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;  
    updateTimer();
}

startE.addEventListener("click", startTimer);
stopE.addEventListener("click", stopTimer); 
resetE.addEventListener("click", resetTimer); 