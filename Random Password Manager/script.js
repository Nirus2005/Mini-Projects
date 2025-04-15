const btn = document.querySelector(".btn")
const input = document.getElementById("input")
const icon = document.querySelector(".fa-copy")
const alertbox = document.querySelector(".alert-container")
btn.addEventListener("click",()=>{
    create()
})

icon.addEventListener("click",()=>{
    copy()
    if (input.value){
        alertbox.classList.remove("active")
    }
    setTimeout(() => {
        alertbox.classList.add("active")
    }, 1000);
})

function create() {
    const chars = "0123456789qwertyuiopasdfghjklzxcvbnm~!@#$%^&*()-=_+[]\;/<>?:{}}|QWERTYUIOPASDFGHJKLZXCVBNM"
    const length=14
    let password = ""
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        password+=chars.substring(randomNum,randomNum+1)

    }
    input.value = password
    alertbox.innerText = password + " copied!"
}

function copy() {
    input.select()
    input.setSelectionRange(0,9999)
    navigator.clipboard.writeText(input.value)
}