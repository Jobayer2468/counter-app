const countDisplay = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

let count = 0;

decreaseBtn.addEventListener('click', function() {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateDisplay();
});

increaseBtn.addEventListener('click', function() {
    count++;
    updateDisplay();
});

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count <0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = '#333';
    }
}

updateDisplay();