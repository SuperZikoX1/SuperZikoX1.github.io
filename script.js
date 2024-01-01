document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching event listeners

    // Reference to the button
    const startGameButton = document.getElementById("startGameButton");

    // Event listener for the button click
    startGameButton.addEventListener("click", function () {
        // Add any logic here to start the game
        alert("The game is starting!"); // Replace this with your actual game starting logic
    });
});
