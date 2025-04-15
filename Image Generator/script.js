const btn = document.querySelector(".btn")
const container = document.querySelector(".image-container")

btn.addEventListener("click",()=>{
    newimgs(10)
})
function newimgs(n) {
    for(let i = 0;i<n; i++){
        const newimg= document.createElement("img")
        newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        container.appendChild(newimg)
        }
    }