export function initTimer() {
    const days = document.querySelector(".timer__days");
    const hours = document.querySelector(".timer__hours");
    const minutes = document.querySelector(".timer__minutes");
    const seconds = document.querySelector(".timer__seconds");

    if (!days || !hours || !minutes || !seconds) return;

    const currentYear = new Date().getUTCFullYear();
    const nextYear = Date.UTC(currentYear + 1, 0, 1, 0, 0, 0); // 1 января

    function updateTimerCount() {
        const currentTime = Date.now();
        const difference = nextYear - currentTime;

        const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
        const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
        const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
        const secondsLeft = Math.floor(difference / 1000) % 60;

        days.textContent = String(daysLeft);
        hours.textContent = String(hoursLeft);
        minutes.textContent = String(minutesLeft);
        seconds.textContent = String(secondsLeft);
    }

    updateTimerCount();
    setInterval(updateTimerCount, 1000);
}
