const ce = document.getElementById("celsius");
const fe = document.getElementById("fahrenheit");
const ke = document.getElementById("kelvin");

function compute(event) {
    const cur = +event.target.value;
    console.log("on");
    
    if (isNaN(cur)) return; 

    switch (event.target.name) {
        case "celsius":
            ke.value = (cur + 273.15).toFixed(2); 
            fe.value = ((cur * 1.8) + 32).toFixed(2); 
            break;
        
        case "fahrenheit":
            ce.value = ((cur - 32) / 1.8).toFixed(2);
            ke.value = ((cur - 32) / 1.8 + 273.15).toFixed(2);
            break;

        case "kelvin":
            ce.value = (cur - 273.15).toFixed(2); 
            fe.value = ((cur - 273.15) * 1.8 + 32).toFixed(2);
            break;

        default:
            break;
    }
}

ce.addEventListener("input", compute);
fe.addEventListener("input", compute);
ke.addEventListener("input", compute);
