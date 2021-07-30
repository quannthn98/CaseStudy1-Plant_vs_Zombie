function increaseGameLevel() {
    if (scoreMark > 4) {
        scoreMark = 0;
        spawnZombie -= 600;
        if (spawnZombie < 2000) {
            spawnZombie = 2000;
        }
    }
    if (spawnSun > 8000) {
        spawnSun = 8000;
    }
}

function updateBullets() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].x += bullets[i].speed;
        bullets[i].update();
    }
}

function updateCherries() {
    for (let i = 0; i < cherries.length; i++) {
        cherries[i].update();
    }
}

function updateZombies() {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].x -= zombies[i].speed;
        zombies[i].update();
        zombies[i].checkIfInHouse();
    }
}

function updateDefenders() {
    for (let i = 0; i < defenders.length; i++) {
        for (let j = 0; j < defenders[i].length; j++) {
            defenders[i][j].update();
        }
    }
}

function updateGeneratedSun() {
    for (let i = 0; i < money.length; i++) {
        money[i].x -= money[i].xSpeed;
        money[i].y -= money[i].ySpeed
        money[i].update();
        if (money[i].y < 0) {
            money.splice(i, 1);
            balance += 25
        }
    }
}

function updateRandomSun() {
    for (let i = 0; i < randomMoney.length; i++) {
        randomMoney[i].x -= randomMoney[i].xSpeed;
        randomMoney[i].y -= randomMoney[i].ySpeed;
        if (randomMoney[i].y < 0) {
            randomMoney.splice(i, 1);
            balance += 25;
        }
        if (randomMoney[i].y > 622) {
            randomMoney[i].y = 622;
        }
        randomMoney[i].update();
    }
}