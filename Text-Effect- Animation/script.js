const cont= document.querySelector(".container")
const choices = ["Web-Developer","Data-Scientist","Student","Astrophile","Melomaniac"]

let i =0

let j = 0

update()
function update() {
    j++
    cont.innerHTML=`<h1>I am ${choices[i].slice(0,1)==='A'?"an":"a"} ${choices[i].slice(0,j)}</h1>`

    if (j===choices[i].length){
        i++
        j=0
    }
    if(i===choices.length){
        i=0}
    setTimeout(update, 300);
}
