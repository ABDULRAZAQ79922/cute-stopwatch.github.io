let cuteStartTime;
let cuteUpdatedTime;
let cuteDifference;
let cuteInterval;
let cuteRunning = false;

const cuteTimeDisplay = document.getElementById('cuteTime');
const cuteStartStopButton = document.getElementById('cuteStartStopButton');
const cuteResetButton = document.getElementById('cuteResetButton');

cuteStartStopButton.addEventListener('click', function() {
    if (!cuteRunning) {
        cuteStartTime = new Date().getTime();
        cuteInterval = setInterval(cuteUpdateTime, 10);
        cuteStartStopButton.textContent = 'Stop';
        cuteRunning = true;
    } else {
        clearInterval(cuteInterval);
        cuteRunning = false;
        cuteStartStopButton.textContent = 'Start';
    }
});

cuteResetButton.addEventListener('click', function() {
    clearInterval(cuteInterval);
    cuteRunning = false;
    cuteStartStopButton.textContent = 'Start';
    cuteTimeDisplay.textContent = '00:00:00:000';
});

function cuteUpdateTime() {
    cuteUpdatedTime = new Date().getTime();
    cuteDifference = cuteUpdatedTime - cuteStartTime;

    let cuteHours = Math.floor(cuteDifference / (1000 * 60 * 60));
    let cuteMinutes = Math.floor((cuteDifference % (1000 * 60 * 60)) / (1000 * 60));
    let cuteSeconds = Math.floor((cuteDifference % (1000 * 60)) / 1000);
    let cuteMilliseconds = Math.floor((cuteDifference % 1000));

    cuteHours = (cuteHours < 10) ? '0' + cuteHours : cuteHours;
    cuteMinutes = (cuteMinutes < 10) ? '0' + cuteMinutes : cuteMinutes;
    cuteSeconds = (cuteSeconds < 10) ? '0' + cuteSeconds : cuteSeconds;
    cuteMilliseconds = (cuteMilliseconds < 100) ? '0' + (cuteMilliseconds < 10 ? '0' + cuteMilliseconds : cuteMilliseconds) : cuteMilliseconds;

    cuteTimeDisplay.textContent = `${cuteHours}:${cuteMinutes}:${cuteSeconds}:${cuteMilliseconds}`;
}
