// gameScript.js

document.addEventListener("DOMContentLoaded", function () {
    let player = {
        name: "Player1",
        level: 1,
        health: 100,
        mana: 50,
        xp: 0,
        age: 0,
        lifespan: 80,
        lifespanIncreaseOnBreakthrough: 10,
        realm: 0, // New property for realm
        realmTiers: 10, // Number of tiers in each realm
        realms: [
            "Mortal Realm",
            "Qi Gathering Realm",
            "Qi Condensation Realm",
            "Foundation Establishment Realm",
            "Golden Core Formation Realm",
            "Nascent Soul Realm",
            "Spirit Severing Realm",
            "Dao Seeking Realm",
            "Immortal Ascension Realm",
            "Ancient Realm",
            "Quasi Paragon Realm",
            "Dao Lord"
        ]
    };

    const expRequirementsPerRealm = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];

    const playerStatsElement = document.getElementById("playerStats");
    const cultivateButton = document.getElementById("cultivateButton");
    const trainButton = document.getElementById("trainButton");
    const questButton = document.getElementById("questButton");

    function updatePlayerStats() {
        playerStatsElement.textContent = `Player Stats: ${player.name} | Level ${player.level} | Realm: ${player.realms[player.realm]} - Tier ${player.level % player.realmTiers + 1} | Health: ${player.health} | Mana: ${player.mana} | XP: ${player.xp} | Age: ${player.age}`;
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
            player.realm++;
            updatePlayerStats();
        }
    }

    function checkLifespan() {
        if (player.age >= player.lifespan) {
            alert("You die of old age.");
            resetGame();
        }
    }

    function resetGame() {
        alert("Game over. You can reset the game here.");
        location.reload();
    }

    cultivateButton.addEventListener("click", function () {
        const cultivationGain = Math.floor(Math.random() * 10) + 1;
        player.mana += cultivationGain;
        player.xp += cultivationGain;
        player.age++;
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }

        checkLifespan();
    });

    trainButton.addEventListener("click", function () {
        const trainingGain = Math.floor(Math.random() * 15) + 5;
        player.xp += trainingGain;
        player.age++;
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
        player.age++;
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }

        checkLifespan();
    });

    updatePlayerStats();
});
