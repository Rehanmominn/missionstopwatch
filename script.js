// script.js
let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const mSec = milliseconds % 1000;
    const sec = seconds % 60;
    const min = minutes % 60;

    display.textContent = 
        `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(Math.floor(mSec / 10)).padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(() => {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
