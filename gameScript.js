// gameScript.js

document.addEventListener("DOMContentLoaded", function () {
    let player = {
        name: "Player1",
        level: 1,
        health: 100,
        mana: 50,
        xp: 0,
        age: 15, // New property for age
        lifespan: 80,
        lifespanIncreaseOnBreakthrough: 10
    };

    const expRequirementsPerRealm = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];

    const playerStatsElement = document.getElementById("playerStats");
    const cultivateButton = document.getElementById("cultivateButton");
    const trainButton = document.getElementById("trainButton");
    const questButton = document.getElementById("questButton");

    function updatePlayerStats() {
        playerStatsElement.textContent = `Player Stats: ${player.name} | Level ${player.level} | Health: ${player.health} | Mana: ${player.mana} | XP: ${player.xp} | Age: ${player.age}`;
    }

    function levelUp() {
        player.level++;
        player.mana = 0;
        alert("Level up! You have advanced to the next realm!");
        updatePlayerStats();

        if (player.level % 10 === 0) {
            alert("Congratulations! You have advanced to a new realm!");
            player.xp = 0;
            player.lifespan += player.lifespanIncreaseOnBreakthrough;
            updatePlayerStats();
        }
    }

    function checkLifespan() {
        if (player.age >= player.lifespan) {
            alert("You die of old age.");
            resetGame(); // Optional: You can reset the game or take other actions upon death.
        }
    }

    function resetGame() {
        // Implement game reset logic if needed
        alert("Game over. You can reset the game here.");
        // For now, simply reload the page
        location.reload();
    }

    cultivateButton.addEventListener("click", function () {
        const cultivationGain = Math.floor(Math.random() * 10) + 1;
        player.mana += cultivationGain;
        player.xp += cultivationGain;
        player.age++; // Increment age on cultivation
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }

        checkLifespan();
    });

    trainButton.addEventListener("click", function () {
        const trainingGain = Math.floor(Math.random() * 15) + 5;
        player.xp += trainingGain;
        player.age++; // Increment age on training
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }

        checkLifespan();
    });

    questButton.addEventListener("click", function () {
        alert("You embark on a quest!");
        const questXP = Math.floor(Math.random() * 20) + 10;
        player.xp += questXP;
        player.age++; // Increment age on quest
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }

        checkLifespan();
    });

    // Initial player stats display
    updatePlayerStats();
});
