const temperatureField = document.querySelector(".weather1")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const weatherField = document.querySelector(".weather3 span")

const searchField = document.querySelector(".searching")
const form = document.querySelector("form")

let target = "Karachi"

const fetchURL = async (target) => {
try {
    const url = `https://api.weatherapi.com/v1/current.json?key=1308b91947c74be0aeb172124240607&q=${target}`
    
    const response = await fetch(url)
    const data = await response.json()
    const { current:{temp_c, condition : {text, icon}},
            location:{name, localtime} } = data

    console.log(data)
    updateDOM(temp_c, name, localtime, icon, text, text)
}
catch (error){
    alert("Location not Found")
}
}
fetchURL(target)
function updateDOM (temp, city, localtime, emoji, weathercondition) {
    temperatureField.innerText = `${temp}°`
    const exactTime = localtime.split(" ")[1]
    const exactDate = localtime.split(" ")[0]
    cityField.innerText = city
    dateField.innerText = `${exactTime} - ${exactDate}`
    emojiField.src = emoji
    weatherField.innerText = weathercondition
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    target = searchField.value
    fetchURL(target)

})

