document.addEventListener("DOMContentLoaded", function() {
    const body = document.getElementsByTagName("body")[0]

    function setColor(name){
        body.style.backgroundColor = name   
    }

    function randomColor() {
    const R = Math.random()* 255
    const G = Math.random()* 255
        const B = Math.random()* 255
        const color1 = `rgb(${R}, ${G},${B})`
        setColor(color1 )
    }

    function rgbForm() {
        const red = document.getElementById('rform').value;
        const green = document.getElementById('gform').value;
        const blue = document.getElementById('bform').value;
        const color2 = `rgb(${red}, ${green},${blue})`
        setColor(color2 )
    }
    document.getElementById('red').addEventListener('click', () => setColor('red'));
    document.getElementById('green').addEventListener('click', () => setColor('green'));
    document.getElementById('blue').addEventListener('click', () => setColor('blue'));
    document.getElementById('random').addEventListener('click', randomColor);
    document.getElementById('submit').addEventListener('click', rgbForm);
})