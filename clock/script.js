const he=document.querySelector(".hour")
const me=document.querySelector(".minute")
const se=document.querySelector(".second")

function update() {
    const curd = new Date();
    const hour = curd.getHours();
    const min = curd.getMinutes();
    const sec = curd.getSeconds();
    const hdeg = (hour/12)*360;
    he.style.transform = `rotate(${hdeg}deg)`
    const mindeg = (min/60)*360;
    me.style.transform = `rotate(${mindeg}deg)`
    const secdeg = (sec/60)*360;
    se.style.transform = `rotate(${secdeg}deg)`
    
}
setInterval(update,1000)