const btne= document.getElementById("btn")
const bmie= document.getElementById("bmi-result")
const wce= document.getElementById("weight-condition")


function claculateBMI() {
    const hval= document.getElementById("height").value / 100
    const wval= document.getElementById("weight").value
    const bmival = wval / (hval*hval)
    bmie.value = bmival;

    if(bmival<18.5){
        wce.innerText = "Under Weight"
    } else if(bmival >=18.5 && bmival <=24.9) {
        wce.innerText = "Normal Weight"
    }else if (bmival>=25 && bmival <=29.9){
        wce.innerText="Overweight"
    }else if(bmival >= 30){
        wce.innerText = "Obesity"
    }
}
btne.addEventListener("click", claculateBMI)