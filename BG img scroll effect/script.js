const img = document.getElementById("img")

window.addEventListener("scroll",()=>{
    update();
})

function update() {
    img.style.opacity = 1- window.scrollY / 900
    img.style.backgroundSize = 160 - window.scrollY/12 + "%"
}