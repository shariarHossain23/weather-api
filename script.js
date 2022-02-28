const searchWeather = () => {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value.toLowerCase();
    searchInput.value = "";
    document.getElementById("spinner").style.display = "block"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=dc6dadeda7ffd879b61c4971607ab8ce`)
        .then(res => res.json())
        .then(res => getWeather(res))
}

const getWeather = data => {

    document.getElementById("spinner").style.display = "none"
    const cityName = data.name;
    const temp = data.main.temp;
    const cel  = temp -  273.15 ;
    const desc = data.weather[0].description
    document.getElementById("city").innerText = cityName;
    document.getElementById("temperuture").innerText = Math.ceil(cel) + "°C";
    document.getElementById("desc").innerText = desc
}