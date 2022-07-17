const buttonDecrement = document.querySelector('div#counter>button[data-action="decrement"]');
const buttonIncrement = document.querySelector('div#counter>button[data-action="increment"]');
const counter = document.querySelector('div#counter>span#value');

let counterValue = 0;

buttonDecrement.addEventListener("click", () => counter.textContent = counterValue -= 1);
buttonIncrement.addEventListener("click", () => counter.textContent = counterValue += 1);