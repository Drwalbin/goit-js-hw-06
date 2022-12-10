const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

let inputValue = "Anonymous";

input.addEventListener("input", (e) => {
    if (e.currentTarget.value === "") { output.textContent = inputValue }
    else { output.textContent = e.currentTarget.value; }
});