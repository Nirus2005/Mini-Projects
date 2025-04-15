const container = document.querySelector(".container")

window.addEventListener("mousemove",(event)=>{
    container.innerHTML = `<div class="event">${event.clientX}
            <h4>Mouse X Position (px)</h4>
        </div>
        <div class="event">${event.clientY}
            <h4>Mouse Y Position (px)</h4>
        </div>`
})