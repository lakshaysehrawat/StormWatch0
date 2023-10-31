const locationInput = document.getElementById('locationInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

const API_KEY = '220af204ce6dc93516c854f71509699d';

checkButton.addEventListener('click', () => {
    const location = locationInput.value;

    if (location === '') {
        alert('Please enter a location.');
        return;
    }

    const API_URL = `https://api.openweathermap.org/data/2.5/air_pollution?q=${location}&appid=${API_KEY}`;

    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const aqi = data.list[0].main.aqi;
            result.textContent = `Air Quality Index (AQI): ${aqi}`;
        })
        .catch(() => {
            result.textContent = 'Error fetching data. Please try again later.';
        });
});
