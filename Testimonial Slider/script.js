const testimonials=[
    {name:"Niranjan",
    photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwleRUfpgxI1lkv4QADeBTChb42Bdw-u9gesXuVsmvaGnk0S03x0cf4I6ER5ZuN3XJBw&usqp=CAU",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci hic eum ad blanditiis quas vel tempore labore suscipit mollitia quos, iure, non, tempora unde laboriosam! Consectetur natus aliquam minus officiis."
    },
    {name:"Amit ",
    photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxYdSS1HZql4AL1VbEg57-hKZt6zXwnW5tvBykyHIluMTQP-vnx61EQO6D7qD81iObCk&usqp=CAU",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci hic eum ad blanditiis quas vel tempore labore suscipit mollitia quos, iure, non, tempora unde laboriosam! Consectetur natus aliquam minus officiis."
    },
    {name:"Vidhu ",
        photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-XtfbBHDpmO6BdpNQzS70H61sApNY1tzB-UHh9LHP7lwqb4v1iEzqLY1mH-ZqFQm9TQ&usqp=CAU",
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci hic eum ad blanditiis quas vel tempore labore suscipit mollitia quos, iure, non, tempora unde laboriosam! Consectetur natus aliquam minus officiis."
    }
]

const imge = document.querySelector("img")
const texte = document.querySelector(".text")
const namee = document.querySelector(".username")


let i = 0

update()

function update() {
    const {name,photoUrl,text} = testimonials[i]
    imge.src = photoUrl
    texte.innerText = text
    namee.innerText = name
    i++
    if(i===testimonials.length){
        i=0;
    }
    setTimeout(() => {
        update()
    }, 10000);
}

