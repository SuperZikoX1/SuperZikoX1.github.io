// gameScript.js

document.addEventListener("DOMContentLoaded", function () {
    let player = {
        name: "Player1",
        level: 1,
        health: 100,
        mana: 50,
        xp: 0,
        age: 0,
        actionsCount: 0,
        mentality: 100,
        lifespan: 80,
        lifespanIncreaseOnBreakthrough: 10,
        realm: 0,
        realmTiers: 10,
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
    const restButton = document.getElementById("restButton");

    function updatePlayerStats() {
        playerStatsElement.textContent = `Player Stats: ${player.name} | Level ${player.level} | Realm: ${player.realms[player.realm]} - Tier ${player.level % player.realmTiers + 1} | Health: ${player.health} | Mana: ${player.mana} | XP: ${player.xp} | Age: ${player.age} | Mentality: ${player.mentality}`;
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

    function handleAction() {
        player.actionsCount++;
        player.mentality -= 5; // Decrease mentality after each action
        if (player.actionsCount % 12 === 0) {
            player.age++;
            alert("A year has passed due to your actions.");
        }
        checkLifespan();
        updatePlayerStats();
    }

    function rest() {
        player.mentality += 10;
        if (player.mentality > 100) {
            player.mentality = 100;
        }

        if (player.mentality <= 0) {
            alert("You went into Qi Deviation. You die.");
            resetGame();
        } else if (player.mentality <= 20) {
            alert("You are in an Unstable state.");
        } else if (player.mentality <= 50) {
            alert("You are in a Stable state.");
        } else if (player.mentality <= 70) {
            alert("You are in a Calm state.");
        } else {
            alert("You are in a Peace of Mind state.");
        }

        updatePlayerStats();
    }

    function resetGame() {
        alert("Game over. You can reset the game here.");
        location.reload();
    }

    cultivateButton.addEventListener("click", function () {
        const cultivationGain = Math.floor(Math.random() * 10) + 1;
        player.mana += cultivationGain;
        player.xp += cultivationGain;
        handleAction();
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }
    });

    trainButton.addEventListener("click", function () {
        const trainingGain = Math.floor(Math.random() * 15) + 5;
        player.xp += trainingGain;
        handleAction();
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }
    });

    questButton.addEventListener("click", function () {
        alert("You embark on a quest!");
        const questXP = Math.floor(Math.random() * 20) + 10;
        player.xp += questXP;
        handleAction();
        updatePlayerStats();

        if (player.xp >= expRequirementsPerRealm[player.level - 1]) {
            levelUp();
        }
    });

    restButton.addEventListener("click", function () {
        rest();
    });

    updatePlayerStats();
});
