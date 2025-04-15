const btn= document.getElementById("btn")
const emo= document.getElementById("emo")

const emoji = []

async function getemo() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=4923b85d1cff1fc27bd624b0c2a12d55937c9456")
    
    data = await response.json()

    for(let i=0; i<1500;i++){
        emoji.push({
            emojiname: data[i].character,
            emojicode: data[i].unicodeName,
        })
    }
}

getemo()

btn.addEventListener("click",()=>{
    const randomNumber = Math.floor(Math.random()*emoji.length)
    btn.innerText = emoji[randomNumber].emojiname
    emo.innerText = emoji[randomNumber].emojicode.slice(5)
})