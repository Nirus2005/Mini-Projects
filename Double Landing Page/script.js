const cont1 = document.querySelector(".container");
const left1 = document.querySelector(".left");
const right1 = document.querySelector(".right");

left1.addEventListener("mouseenter", ()=>{
    cont1.classList.add("active-left");
})
left1.addEventListener("mouseleave", ()=>{
    cont1.classList.remove("active-left");
})

right1.addEventListener("mouseenter", ()=>{
    cont1.classList.add("active-right");
})
right1.addEventListener("mouseleave", ()=>{
    cont1.classList.remove("active-right");
})