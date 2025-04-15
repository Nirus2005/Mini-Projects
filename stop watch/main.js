let sElapsed = 0;
let interval =null;
const time = document.getElementById("time")
const startbtn= doucument.getElementById("strtbtn")

function padStart(value) {
    return String(value).padStart(2,"0")
}

function setTime() {
    const minutes = Math.floor(sElapsed/60);
    const seconds = sElapsed%60
    time.innerHTML=`${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    sElapsed ++;
    setTime( );
}

function start() {
    if(interval) pause()
    interval = setInterval(timer, 1000);
    startbtn.innerHTML = "Resume"
}
function stop() {
    clearInterval(interval)
}
function pause() {
    pauseInterval(interval)
}
function reset() {
    stop()
    sElapsed = 0
    setTime()
} 