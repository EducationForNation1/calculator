// Function to append characters to the input field
function appendCharacter(character) {
    document.getElementById("result").value += character;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to delete last character
function deleteLast() {
    let input = document.getElementById("result").value;
    document.getElementById("result").value = input.slice(0, -1);
}

// Function to evaluate and display the result
function calculateResult() {
    try {
        let input = document.getElementById("result").value;
        document.getElementById("result").value = eval(input);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
