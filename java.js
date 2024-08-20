let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId = null;
let isRunning = false;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
  if (!isRunning) {
    intervalId = setInterval(updateTime, 10); // update every 10 milliseconds (not 1, as it's too fast)
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
  }
}

function stopStopwatch() {
  clearInterval(intervalId);
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  millisecondsElement.textContent = '000';
  stopStopwatch();
}

function updateTime() {
  milliseconds += 10; // increment by 10, since we're updating every 10 milliseconds
  if (milliseconds >= 1000) {
    seconds++;
    milliseconds -= 1000;
  }
  if (seconds >= 60) {
    minutes++;
    seconds -= 60;
  }
  if (minutes >= 60) {
    hours++;
    minutes -= 60;
  }
  hoursElement.textContent = pad(hours);
  minutesElement.textContent = pad(minutes);
  secondsElement.textContent = pad(seconds);
  millisecondsElement.textContent = pad(milliseconds, 3);
}

function pad(number, length = 2) {
  return (number < 10 ** (length - 1) ? '0'.repeat(length - 1) : '') + number;
}