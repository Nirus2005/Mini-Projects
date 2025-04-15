const textareaE=document.getElementById("text")
const totalE=document.getElementById("total-counter")
const remainingE=document.getElementById("remaining-counter")

textareaE.addEventListener("keyup",()=>{
    update()
})
update()
function update() {
    totalE.innerText=textareaE.value.length
    remainingE.innerText=textareaE.getAttribute("maxlength")- totalE.innerText
}