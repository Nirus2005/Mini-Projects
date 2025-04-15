const stars = document.querySelectorAll(".fa-star")
const emojis = document.querySelectorAll(".fa-regular")
const colors = ["red","orange","blue","green","darkgreen"]

updateRating(3);

stars.forEach((star,index)=>{
    star.addEventListener("click",()=>{
        updateRating(index)
        
    })
})

function updateRating(index) {
    stars.forEach((star,idx)=>{
        if(idx<index+1){
            star.classList.add("active");
        }else{
            star.classList.remove("active")
        }
    })
    emojis.forEach(emoji=>{
        emoji.style.transform = `translateX(-${index*50}px)`
        emoji.style.color = colors[index]
    })

}
