const apikey = "ec5b58a0f5b045d1b7e123216250601"
const cityname = document.getElementById("cityinput")
const search = document.getElementById("search")
const weather = document.getElementById("weather")
const temp = document.getElementById("temp")
const image = document.getElementById("wimg")
const fetchdata = async() =>{
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityname.value}&aqi=yes`)
    let response = await data.json()
    weather.innerText = `${response.current.condition.text}`
    if(response.current.condition.text=="Partly cloudy" || response.current.condition.text=="cloudy"){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuyj9KaQPjFFzJ-HCiHKjTLk-HX3d6rOxUg&s"
    }
    else if(response.current.condition.text=="Overcast"){
        image.src = "https://cdn-icons-png.flaticon.com/256/5546/5546134.png"
    }
    else if(response.current.condition.text=="Mist"){
        image.src = "https://static.thenounproject.com/png/3244281-200.png"
    }
    else if(response.current.condition.text=="Clear"){
        image.src = "https://cdn-icons-png.flaticon.com/256/3222/3222807.png"
    }
    else{
        image.src = "https://img.icons8.com/color/96/000000/sun.png"
    }
    temp.innerText = `${response.current.temp_c}°C`
}
search.addEventListener("click",()=>{
    fetchdata()
})