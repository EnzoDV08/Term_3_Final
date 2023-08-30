const apiKey = '1dc50b8b17ea6338fc64d3e9222fb73a';
const city = 'Maldives'; 
const weatherOverlay = document.getElementById('weather-overlay');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weatherDescription = data.weather[0].description;
        weatherOverlay.textContent = `${city} - ${weatherDescription}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));


   