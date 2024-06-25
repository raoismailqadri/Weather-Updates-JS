const apiKey = 'e533a71aa3b1096eee2e821ba69652f8'; // Your OpenWeatherMap API key

const fetchWeather = () => {
  const city = document.getElementById('location-input').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
        document.getElementById('city').textContent = data.name;
        document.getElementById('sun_rise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('feel_like').textContent = data.main.feels_like;
        document.getElementById('humidity').textContent = data.main.humidity + '%';
        document.getElementById('clouds').textContent = data.clouds.all + '%';
        document.getElementById('rain').textContent = data.rain ? data.rain['1h'] + 'mm' : '0mm';
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      alert('Unable to find location. Please write the correct Name.');
    });
};