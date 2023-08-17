const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let counter = 0;

function updateCounter() {
  counterElement.textContent = counter;
}

incrementButton.addEventListener('click', () => {
  counter = increment(counter);
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  counter = decrement(counter);
  updateCounter();
});

updateCounter();
