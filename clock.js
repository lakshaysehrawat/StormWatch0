function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
    const minuteDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondDeg = (360 / 60) * seconds;

    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial update
