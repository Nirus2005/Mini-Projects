const btn = document.getElementById("roll")
const dice = document.getElementById("dice")
const history = document.getElementById("history")

let historyList = []

function rollDice() {
    const rollResult = Math.floor(Math.random()*6)+1
    const face = getDiceFace(rollResult)
    dice.innerHTML= face
    historyList.push(rollResult)
    updateRollHistory();
}

function updateRollHistory() {
    history.innerHTML = ""
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i +1}: <span>${getDiceFace(historyList[i])}</span>`;
        history.appendChild(listItem)
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

btn.addEventListener("click",()=>{
    rollDice()
    dice.classList.add("rollanime")
    setTimeout(() => {
        dice.classList.remove("rollanime")
    }, 1000);
})