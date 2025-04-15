const cont = document.querySelector(".container");

for(let i=0;i<30 ; i++){
    const color=document.createElement("div");
    color.classList.add("color");
    cont.appendChild(color);    
}

const allColor=document.querySelectorAll(".color")

function random() {
    const chars = "0987654321ABCDEF"
    const colorCodeLength = 6;
    let colorCode=""
    for (let i = 0 ; i < colorCodeLength; i++) {
        const randomnum= Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomnum,randomnum+1);
    }
    return colorCode
}
function generate() {
    allColor.forEach((color1) => {
        const newColorCode= random()
        color1.style.backgroundColor = "#" + newColorCode
        color1.innerText="#" + newColorCode
    });
}
generate()