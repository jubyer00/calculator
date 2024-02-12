
let string = "";
let memory = 0; // Initialize memory variable

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'm+') {
            // Add current result to memory
            memory += parseFloat(eval(string)); // Using parseFloat to handle decimal values
        } else if (e.target.innerHTML === 'm-') {
            // Subtract current result from memory
            memory -= parseFloat(eval(string)); // Using parseFloat to handle decimal values
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
