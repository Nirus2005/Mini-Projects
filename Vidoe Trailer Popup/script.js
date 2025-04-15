const btn = document.querySelector(".btn")
const close = document.querySelector(".close")
const trailerContainer = document.querySelector(".trailer-container")
const vid = document.querySelector("video")
btn.addEventListener("click",()=>{
    trailerContainer.classList.remove("active")
})
close.addEventListener("click",()=>{
    trailerContainer.classList.add("active")
    vid.pause()
    vid.currentTime = 0
})