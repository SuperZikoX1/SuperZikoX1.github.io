document.addEventListener("DOMContentLoaded", function () {
    // Placeholder player data
    let player = {
        level: 1,
        health: 100,
        mana: 50,
        xp: 0
    };

    const expRequirementsPerRealm = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];

    // Reference to game elements
    const playerStatsElement = document.getElementById("playerStats");
    const cultivateButton = document.getElementById("cultivateButton");

    // Update player stats display
    function updatePlayerStats() {
        playerStatsElement.textContent = `Player Stats: Level ${player.level} | Health: ${player.health} | Mana: ${player.mana} | XP: ${player.xp}`;
    }

    // Event listener for the Cultivate button
    cultivateButton.addEventListener("click", function () {
        // Placeholder cultivation logic
        const cultivationGain = Math.floor(Math.random() * 10) + 1;
        player.mana += cultivationGain;
        player.xp += cultivationGain;

        // Update player stats display
        updatePlayerStats();

        // Check for level-up
        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            player.level++;
            player.mana = 0;
            alert("Level up! You have advanced to the next realm!");
            updatePlayerStats();

            // Check for realm advancement
            if (player.level % 10 === 0) {
                alert("Congratulations! You have advanced to a new realm!");
                // Adjust exp requirements for the new realm
                player.xp = 0;
                updatePlayerStats();
            }
        }
    });

    // Initial player stats display
    updatePlayerStats();
});
