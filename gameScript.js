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
        spiritRoot: getRandomSpiritRoot(), // Assign a spirit root immediately
        spiritRootButtonEnabled: false, // Disable the spirit root button initially
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
    const spiritRootButton = document.getElementById("spiritRootButton");
    const restartButton = document.getElementById("restartButton");

    function updatePlayerStats() {
        playerStatsElement.textContent = `Player Stats: ${player.name} | Level ${player.level} | Realm: ${player.realms[player.realm]} - Tier ${player.level % player.realmTiers + 1} | Health: ${player.health} | Mana: ${player.mana} | XP: ${player.xp} | Age: ${player.age} | Mentality: ${player.mentality} | Spirit Root: ${player.spiritRoot}`;
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
        player.mentality -= 5;
        if (player.actionsCount % 12 === 0) {
            player.age++;
            alert("A year has passed due to your actions.");
        }

        obtainSpiritRoot();

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

    function obtainSpiritRoot() {
        if (player.spiritRootButtonEnabled) {
            const randomChance = Math.random();
            if (randomChance < 0.8) {
                player.spiritRoot = "False Spiritual Root";
                player.mana += 5;
            } else if (randomChance < 0.99) {
                player.spiritRoot = "True Spiritual Root";
                player.mana += 10;
            } else {
                player.spiritRoot = "Heavenly Spiritual Root";
                player.mana += 20;
            }
            alert(`You obtained a ${player.spiritRoot}!`);
            player.spiritRootButtonEnabled = false;
            updatePlayerStats(); // Update player stats after obtaining a spirit root
        }
    }

    function resetGame() {
        alert("Game over. You can reset the game here.");
        player.spiritRootButtonEnabled = true;
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

    spiritRootButton.addEventListener("click", function () {
        obtainSpiritRoot();
        updatePlayerStats();
    });

    restartButton.addEventListener("click", function () {
        restartGame();
    });

    function getRandomSpiritRoot() {
        const randomChance = Math.random();
        if (randomChance < 0.8) {
            return "False Spiritual Root";
        } else if (randomChance < 0.99) {
            return "True Spiritual Root";
        } else {
            return "Heavenly Spiritual Root";
        }
    }

    function restartGame() {
        alert("Game over. You can reset the game here.");
        player.spiritRootButtonEnabled = true;
        player.spiritRoot = getRandomSpiritRoot(); // Assign a new spirit root on restart
        player = {
            name: "Player1",
            level: 1,
            health: 100,
            mana: 50,
            xp: 0,
            age: 0,
            actionsCount: 0,
            mentality: 100,
            spiritRootButtonEnabled: false,
            spiritRoot: getRandomSpiritRoot(),
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

        updatePlayerStats();
    }

    updatePlayerStats();
});
