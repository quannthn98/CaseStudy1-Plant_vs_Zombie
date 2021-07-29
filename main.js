let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");

let houseLine = 200;
let balance = 5000;
let scores = 0;

let myPlayGround = new Image();
myPlayGround.src = "img/backGround1.jpg"

let plants = [];
let sunFlowers = [];
let walls = [];
let cherries = [];

let defenders = [plants, sunFlowers, walls]

let zombies = [];
let bullets = [];
let money = [];
let randomMoney = [];

let selected;
let previousSelected;
let isPlantSelected = false;

let isRemoveSelected = false;

document.getElementById("balance").innerText = balance;

let playGround = {
    width: canvas.width,
    height: canvas.height,

    start: function () {
        this.intervalOfUpdate = setInterval(updateGame, 20); //Draw everything again after 20ms
        this.intervalOfNewZombies = setInterval(newZombies, 6000); //Create new zombies every 5s
        this.intervalOfDetectZombies = setInterval(detectZombies, 1000); //Let Plant check and attack every 1s
        this.intevalOfGenerateSun = setInterval(generateSun, 3000); //Generate sun every 3s at random SunFlowers
        this.itervalOfRandomSun = setInterval(randomSun, 10000); //Random Sun vevery 10s
        this.intervalOfZombiesAttack = setInterval(zombieAttack, 1000); //Let zombies check and attack every 0.5s
        this.intevalOfCherries = setInterval(checkCherries, 1000)//Check cherries for explode every 1s
        this.intevalOfCooldown = setInterval(reduceCooldown, 1000);//Reduce cooldown every 1s
    },

    drawBackground: function () {
        ctx.drawImage(myPlayGround, 0, 0, this.width, this.height);
    },

    clear: function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    stop: function () {
        clearInterval(this.intervalOfUpdate);
        clearInterval(this.intervalOfNewZombies);
        clearInterval(this.intervalOfDetectZombies);
        clearInterval(this.intevalOfGenerateSun);
        clearInterval(this.intervalOfZombiesAttack);
        clearInterval(this.itervalOfRandomSun);
        clearInterval(this.intevalOfCherries);
        clearInterval(this.intevalOfCooldown);
    }
}

function updateGame() {

    playGround.clear();
    playGround.drawBackground();
    updateBalance();
    updateScore()
    checkZombiesHits();

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].x += bullets[i].speed;
        bullets[i].update();
    }

    for (let i = 0; i < cherries.length; i++) {
        cherries[i].update();
        // cherries[i].checkZombiesAround(i);
    }

    for (let i = 0; i < zombies.length; i++) {
        zombies[i].x -= zombies[i].speed;
        zombies[i].update();
        zombies[i].checkIfInHouse();
    }

    for (let i = 0; i < defenders.length; i++) {
        for (let j = 0; j < defenders[i].length; j++) {
            defenders[i][j].update();
        }
    }

    for (let i = 0; i < money.length; i++) {
        money[i].update();
    }

    for (let i = 0; i < randomMoney.length; i++) {
        randomMoney[i].y += 1;
        if (randomMoney[i].y > 530) {
            randomMoney[i].y = 530;
        }
        randomMoney[i].update();
    }

}

function startGame() {
    playGround.clear();
    playGround.start();
    // playSound(startgameSound)
    startgameSound();
}

function restartGame() {
    playGround.stop();
    plants = [];
    sunFlowers = [];
    walls = [];
    defenders = [plants, sunFlowers, walls, cherries]
    for (let i = 0; i < zones.length; i++) {
        zones[i].available = true;
    }
    randomMoney = [];
    zombies = [];
    bullets = [];
    money = [];
    isPlantSelected = false;
    isRemoveSelected = false;
    balance = 5000;
    restartCooldown();
    updateGame();
}

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function updateScore() {
    document.getElementById("score").innerText = "Scores: " + scores
}


//Place Defenders
function changeSelected(id) {
    selected = id;
    if (isPlantSelected && id === previousSelected) {
        isPlantSelected = false;
        unHighlightSelected(id)
    } else if (isPlantSelected === false|| isPlantSelected === true && id !== previousSelected && previousSelected >=0) {
        isPlantSelected = true;
        isRemoveSelected = false;
        highlightSelected(id)
        if (previousSelected >= 0) {
            unHighlightSelected(previousSelected)
        }
    }
    previousSelected = id;
}

function highlightSelected(id){

        document.getElementById(id + '').style.border = "solid green";

}

function unHighlightSelected(id){

        document.getElementById(id + '').style.border = "0px"

}

//Remove Defenders
function removePlants() {
    if (isRemoveSelected) {
        isRemoveSelected = false;
    } else {
        isRemoveSelected = true;
        isPlantSelected = false;
    }
}

canvas.addEventListener('click', function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let id;
    let selectedZone;

    function getClickedZone() {
        for (let i = 0; i < zones.length; i++) {
            if (x > zones[i].x && x < zones[i].x + zones[i].width && y > zones[i].y && y < zones[i].y + zones[i].height) {
                selectedZone = zones[i];
                id = i;
                console.log(selectedZone.x + ',' + selectedZone.y + ',' + selectedZone.available)
                break;
            }
        }
    }

    getClickedZone();
    // console.log(selectedZone)
    if (isPlantSelected) {

        if (selectedZone.available === true) {
            switch (selected) {

                case 0:
                    if (balance >= 100 && !isCooldownShooter) {
                        plants.push(new Plant(selectedZone, id));
                        balance -= 100;
                        selectedZone.available = false;
                        isCooldownShooter = true;
                        currentCooldownShooter = cooldownShooterMax;
                    }
                    break;

                case 1:
                    if (balance >= 50 && !isCooldownSunFlower) {
                        sunFlowers.push(new SunFlower(selectedZone, id));
                        balance -= 50;
                        selectedZone.available = false;
                        isCooldownSunFlower = true;
                        currentCooldownSunFlower = cooldownSunFlowerMax;
                    }
                    break;

                case 2:
                    if (balance >= 50 && !isCooldownWall) {
                        walls.push(new Wall(selectedZone, id));
                        balance -= 50;
                        selectedZone.available = false;
                        isCooldownWall = true;
                        currentCooldownWall = cooldownWallMax;
                    }
                    break;

                case 3:
                    if (balance >= 150 && !isCooldownCherry) {
                        cherries.push(new CherryBomb(selectedZone, id));
                        balance -= 150;
                        selectedZone.available = false;
                        isCooldownCherry = true;
                        currentCooldownCherry = cooldownCherryMax;
                    }
                    break;
            }
            // playSound(plantSound)
            placeDefenders();
            isPlantSelected = false;
            unHighlightSelected(selected)
        }
    } else if (isRemoveSelected) {
        for (let j = 0; j < defenders.length; j++) {
            for (let k = 0; k < defenders[j].length; k++) {
                if (defenders[j][k].zoneId === id) {
                    defenders[j][k].remove(k);
                    // playSound(removeSound);
                    removeSound();
                }
                isRemoveSelected = false;
            }
        }
    }

}, false)

//Add new zombies at random Lines
function newZombies() {
    let number = Math.floor(Math.random() * 5)
    zombies.push(new Zombie(lines[number].y, 1));
    if (scores % 5 === 0 && scores!== 0) {
        number = Math.floor(Math.random() * 5)
        zombies.push(new Zombie(lines[number].y, 2))
    }
    if (scores % 11 === 0 && scores !== 0) {
        number = Math.floor(Math.random() * 5)
        zombies.push(new Zombie(lines[number].y, 3))
    }
    // playSound(newZomSound)
    newZombiewSound();
}


//Let Zombies Attack plants
function zombieAttack() {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].detectObject();
    }
}

// Find zombies and attack
function detectZombies() {
    for (let i = 0; i < plants.length; i++) {
        plants[i].detectZombies();
    }
}

// Check if Zombies het Hits by bullets
function checkZombiesHits() {
    for (let i = 0; i < zombies.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            if (zombies[i].y == bullets[j].y && bullets[j].x > zombies[i].x) {
                bullets[j].destroy(j);
                zombies[i].getShot();
                // playSound(hitZombieSound)
                hitZombieSound();
                console.log('hp of zombie ' + i + ' is: ' + zombies[i].hp)
                zombies[i].checkStatus(i);
            }
        }
    }
}

//SunFlowers function
function generateSun() {
    if (sunFlowers.length > 0) {
        let number = Math.floor(Math.random() * sunFlowers.length)
        sunFlowers[number].generateSun();
    }
}

//Random Sun
function randomSun() {
    let randomX = Math.floor(Math.random() * 850 + 200)
    randomMoney.push(new Sun(randomX, 0))
}

//Collect Money
function collectSun() {
    balance += money.length * 25;
    balance += randomMoney.length * 25;
    money.splice(0, money.length);
    randomMoney.splice(0, randomMoney.length)
}

//Check for Cherries Explotion
function checkCherries() {
    for (let i = 0; i < cherries.length; i++) {
        cherries[i].checkZombiesAround(i);
    }
}

canvas.addEventListener('click', function (e) {
    console.log('clicked' + e.offsetX + '/' + e.offsetY)
})


