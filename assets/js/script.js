// Code to transit to the quiz
let startButton = document.getElementById("user-sign");
let gameArea = document.querySelector(".game-area");
let quizSection = document.querySelector(".quiz-section");

startButton.addEventListener("click", function () {
    let usernameInput = document.getElementById("username").value;
    if (usernameInput.trim() !== "") {
        // Hide the initial game area
        gameArea.style.display = "none";

        // Show the quiz section
        quizSection.style.display = "block";

    } else {
        alert("Please enter your name before starting the game.");
    }
});