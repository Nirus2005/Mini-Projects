const txt = document.getElementById("input")

function revStr(str) {
    return str.split("").reverse().join("")
}


function check() {
    const value= txt.value
    const rev= revStr(value)
    if (value=== rev){
        alert("P A L I N D R O M E")
    }else{
        alert( "HAHAHA...NOT TODAY")
    }
    txt.value=""
}

document.getElementById ("btn").addEventListener('click',check)
window.addEventListener('keydown',e=>{
    if (e.key === 'Enter'){
        check()
    }
})
