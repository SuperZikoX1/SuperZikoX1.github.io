document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching event listeners

    // Reference to the button
    const startGameButton = document.getElementById("startGameButton");

    // Event listener for the button click
    startGameButton.addEventListener("click", function () {
        // Redirect to the game page
        window.location.href = "game.html";
    });
});
