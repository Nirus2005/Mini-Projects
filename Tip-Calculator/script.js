const btn = document.getElementById("Calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const tip = document.getElementById("total")

function calculate() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const totalValue = billValue *(1+ tipValue/100)
    tip.innerText = totalValue.toFixed(2)
}

btn.addEventListener("click",calculate)