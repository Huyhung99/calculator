// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.screen');
// add eventListener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display

            display.textContent = eval(display.innerHTML);
        }
    } else if (clickedButtonValue === 'C') {
        // clear everything on display
        display.textContent = '';
    } else {
        // otherwise concatenate it to the display
        display.textContent += clickedButtonValue;
        display.value += clickedButtonValue;
    }
}