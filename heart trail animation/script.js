const bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove",(event)=>{
    const x = event.offsetX
    const y = event.offsetY
    const spanE1=document.createElement("span")
    spanE1.style.left = x+"px"
    spanE1.style.top = y+"px"
    const size = Math.random()*100
    spanE1.style.width = size+"px"
    spanE1.style.height = size+"px"
    bodyE1.appendChild(spanE1)
    setTimeout(() => {
        spanE1.remove();
    }, 1000);
})