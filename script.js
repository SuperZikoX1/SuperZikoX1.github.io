// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Reference to the "Start the Game" button
    const startGameButton = document.getElementById("startGameButton");

    // Event listener for the button click
    startGameButton.addEventListener("click", function () {
        // Redirect to the game page
        window.location.href = "gamePage.html";
    });
});
