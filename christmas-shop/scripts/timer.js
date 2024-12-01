const days = document.querySelector('.timer__days');
const hours = document.querySelector('.timer__hours');
const minutes = document.querySelector('.timer__minutes');
const seconds = document.querySelector('.timer__seconds');


const currentYear = new Date().getUTCFullYear();
const nextYear = new Date(Date.UTC(currentYear + 1, 0, 1, 0, 0, 0)); // Январь -  0

function updateTimerCount() {
    const currentTime = new Date();
    const currentUTCTime = new Date(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(),
                                     currentTime.getUTCHours(), currentTime.getUTCMinutes(), currentTime.getUTCSeconds());
    
    const difference = nextYear - currentUTCTime;

    const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
    const secondsLeft = Math.floor(difference / 1000) % 60;
    
    // console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;
}

updateTimerCount();

setInterval(updateTimerCount, 1000);
