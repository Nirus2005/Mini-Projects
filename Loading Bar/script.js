const counter = document.querySelector(".counter")
const bar = document.querySelector(".loading-front")

let i = 0
update()

function update() {
    counter.innerText = i + "%"
    bar.style.width = i + "%"
    i++
    if(i<101){
        setTimeout(update, 90);
    }
}