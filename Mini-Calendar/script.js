const month = document.querySelector(".month")
const day = document.querySelector(".day")
const daynum = document.querySelector(".daynum")
const year = document.querySelector(".year")

const date = new Date();
month.innerText = date.toLocaleString("en",{
    month:"long"
})
day.innerText = date.toLocaleString("en",{
    weekday:"long"
})
daynum.innerText = date.getDate()
year.innerText = date.getFullYear();