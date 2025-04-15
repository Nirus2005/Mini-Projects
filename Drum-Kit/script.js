const kits =["crash",  "kick","snare", "tom"]

const contE = document.querySelector(".container")



kits.forEach(kit=>{
    const btnE = document.createElement("button");
    btnE.classList.add("btn")
    btnE.innerText = kit
    btnE.style.backgroundImage = "url(images/" + kit + ".png)"
    contE.appendChild(btnE)
    const audE = document.createElement("audio")
    audE.src = "sounds/" + kit + ".mp3"
    contE.appendChild(audE)
    btnE.addEventListener("click", ()=>{
        audE.play()
    })
    window.addEventListener("keydown",(event)=>{
        if(event.key === kit.slice(0,1)){
            audE.play()
            btnE.style.transform = "scale(0.9)"
            setTimeout(() => {
                btnE.style.transform = "scale(1)"
            }, 100);
        }
    })
})