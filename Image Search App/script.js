const key="tnJBHxHp3WKY3-5t_AUlc2tfdMivD0VQXnRksHq8Yi0"
const form = document.querySelector("form")
const searchInput = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const  showMoreButton= document.getElementById("show-more-button")

let inputData = ""
let page = 1

async function search() {
    inputData = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`
    const response = await fetch(url)
    const data = await response.json()
    if (page === 1){
        searchResults.innerHTML = ""
    }
    const results = data.results

    results.map((result)=>{
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        imageWrapper.style.opacity=0;
        imageWrapper.style.transform="scale(0.95)";
        imageWrapper.style.transition = "opacity 1s ease,transform 1s ease"
        searchResults.appendChild(imageWrapper)
        setTimeout(() => {
            imageWrapper.style.opacity = 1
            imageWrapper.style.transform = "scale(1)"
        }, 10);

    })
    page=page+1

    if(page> 1 ){
        showMoreButton.style.display = "block";
    }
}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    search()  
})

showMoreButton.addEventListener("click",()=>{
    search()
})
