console.log("Hello Weather App");

async function fetchCityData( city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const response = await fetch(url);
   // console.log(response);
    const data = await response.json();
    latitude = data.results[0].latitude;
    longitude = data.results[0].longitude;
    //console.log(data);
    return { latitude, longitude };
}
async function fetchWeatherData( latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
   // console.log(data);
    //console.log(data.elevation);
    //console.log(data.current_weather);
    //console.log(data.current_weather.temperature);
    return data.current_weather;
}
// fetchWeatherData( 25.666815, -100.28233);
async function handleFetchClick(){
    console.log("Boton fetch clickeado");
    const city = document.getElementById("city-input").value;
    let longitude = 0;
    let latitude = 0;
  const currentTemperature = document.getElementById("temp-display");
  const currentLatitude = document.getElementById("latitude-display");
    const currentLongitude = document.getElementById("longitude-display");
    let  cityData = await fetchCityData( city);
    latitude = cityData.latitude;
    longitude = cityData.longitude;
    const currentWeather = await fetchWeatherData(latitude, longitude);
    currentTemperature.textContent = currentWeather.temperature;
    currentLatitude.textContent = latitude;
    currentLongitude.textContent = longitude;

   //
    console.log(currentWeather.temperature);
    this.disabled = true;



}