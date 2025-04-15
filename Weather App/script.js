const key = "5be0810b45dc9e074a04a7897f13e935"
const data = document.getElementById("weather-data")
const city = document.getElementById("city-input")
const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityval = city.value
    weather(cityval)
})

async function weather(cityval) {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${key}&units=metric`)
        if (!response.ok){
            throw new Error("Network was not ok");
        }
        const info = await response.json()
        
        const temperature = Math.round(info.main.temp)
        const description =info.weather[0].description
        const icon =info.weather[0].icon
        const details=[
            `Feels like: ${Math.round(info.main.feels_like)}°C`,
            `Humidity: ${info.main.humidity}%`,
            `Wind speed: ${info.wind.speed} m/s`
        ]

        data.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">`
        data.querySelector(".temperature").textContent = `${temperature}°C`
        data.querySelector(".description").textContent = description
        data.querySelector(".details").innerHTML = details.map((detail)=>`<div>${detail}</div>`).join("")

    } catch (error) {
        data.querySelector(".icon").innerHTML=""
        data.querySelector(".temperature").textContent = ""
        data.querySelector(".description").textContent = "An error occured, please try again..."
        data.querySelector(".details").innerHTML = ""
    }
}