// initializes button count as 0
let count = 0;

// function for when button is clicked
function buttonClicked() {
    // select the element
    count++;
    newText = "Number of times button clicked: ".concat(count)
    let buttonDiv = document.getElementById("button-id");

    buttonDiv.innerHTML = newText;
}