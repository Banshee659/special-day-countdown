document.addEventListener('DOMContentLoaded', () => {
    // Set the target date and time to 26 June 2025, 6:00 AM AEST
    // Note: JavaScript Date objects handle time zones, but it's often safer
    // to specify the target time in UTC or a known offset if precision is critical.
    // For AEST (Australian Eastern Standard Time), it's UTC+10.
    // We'll create a Date object in the local timezone and then adjust if needed,
    // or simply define it as a string that Date can parse correctly.
    const targetDate = new Date("2025-06-26T06:00:00+10:00"); // YYYY-MM-DDTHH:mm:ss+HH:MM for AEST (UTC+10)

    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        daysSpan.textContent = days < 10 ? '0' + days : days;
        hoursSpan.textContent = hours < 10 ? '0' + hours : hours;
        minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<div class='message'>The moment is here!</div>";
            document.querySelector('h1').textContent = "It's Our Special Day!";
            document.querySelector('h2').textContent = "Let the celebrations begin!";
        }
    }

    // Update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to display countdown immediately
    updateCountdown();
});