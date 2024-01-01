// gameScript.js

document.addEventListener("DOMContentLoaded", function () {
    // Player data
    let player = {
        name: "Player1",
        level: 1,
        health: 100,
        mana: 50,
        xp: 0
    };

    const expRequirementsPerRealm = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];

    // Reference to game elements
    const playerStatsElement = document.getElementById("playerStats");
    const cultivateButton = document.getElementById("cultivateButton");
    const trainButton = document.getElementById("trainButton");
    const questButton = document.getElementById("questButton");

    // Function to update player stats display
    function updatePlayerStats() {
        playerStatsElement.textContent = `Player Stats: ${player.name} | Level ${player.level} | Health: ${player.health} | Mana: ${player.mana} | XP: ${player.xp}`;
    }

    // Function to handle level up and realm advancement
    function levelUp() {
        player.level++;
        player.mana = 0;
        alert("Level up! You have advanced to the next realm!");
        updatePlayerStats();

        // Check for realm advancement
        if (player.level % 10 === 0) {
            alert("Congratulations! You have advanced to a new realm!");
            player.xp = 0;
            updatePlayerStats();
        }
    }

    // Event listener for the Cultivate button
    cultivateButton.addEventListener("click", function () {
        const cultivationGain = Math.floor(Math.random() * 10) + 1;
        player.mana += cultivationGain;
        player.xp += cultivationGain;
        updatePlayerStats();

        // Check for level-up
        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }
    });

    // Event listener for the Train button
    trainButton.addEventListener("click", function () {
        const trainingGain = Math.floor(Math.random() * 15) + 5;
        player.xp += trainingGain;
        updatePlayerStats();

        // Check for level-up
        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }
    });

    // Event listener for the Quest button
    questButton.addEventListener("click", function () {
        alert("You embark on a quest!");
        const questXP = Math.floor(Math.random() * 20) + 10;
        player.xp += questXP;
        updatePlayerStats();

        // Check for level-up
        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }
    });

    // Initial player stats display
    updatePlayerStats();
});
