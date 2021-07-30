let cooldownShooterMax = 6;
let currentCooldownShooter = 0;
let isCooldownShooter = false;

let cooldownSunFlowerMax = 5;
let currentCooldownSunFlower = 0;
let isCooldownSunFlower = false;

let cooldownWallMax = 9;
let currentCooldownWall = 0;
let isCooldownWall = false;

let cooldownCherryMax = 15;
let currentCooldownCherry = 0;
let isCooldownCherry = false;

function updateCooldownShooter() {
    if (currentCooldownShooter > 0) {
        currentCooldownShooter--;
        document.getElementById("shooter").innerText = currentCooldownShooter;
    } else {
        currentCooldownShooter = 0
        isCooldownShooter = false
        document.getElementById("shooter").innerText = "Available"
    }
}

function updateCooldownSunFlower() {
    if (currentCooldownSunFlower > 0) {
        document.getElementById("sunflower").innerText = currentCooldownSunFlower;
        currentCooldownSunFlower--;
    } else {
        currentCooldownSunFlower = 0
        isCooldownSunFlower = false
        document.getElementById("sunflower").innerText = "Available"
    }
}

function updateCooldownWall() {
    if (currentCooldownWall > 0) {
        document.getElementById("wall").innerText = currentCooldownWall;
        currentCooldownWall--;
    } else {
        currentCooldownWall = 0
        isCooldownWall = false
        document.getElementById("wall").innerText = "Available"
    }
}

function updateCooldownCherry() {
    if (currentCooldownCherry > 0) {
        document.getElementById("cherry").innerText = currentCooldownCherry;
        currentCooldownCherry--;
    } else {
        currentCooldownCherry = 0
        isCooldownCherry = false
        document.getElementById("cherry").innerText = "Available"
    }
}

function resetCooldown() {
    cooldownShooterMax = 5;
    currentCooldownShooter = 0;
    isCooldownShooter = false;

    cooldownSunFlowerMax = 5;
    currentCooldownSunFlower = 0;
    isCooldownSunFlower = false;

    cooldownWallMax = 10;
    currentCooldownWall = 0;
    isCooldownWall = false;

    cooldownCherryMax = 15;
    currentCooldownCherry = 0;
    isCooldownCherry = false;
}

