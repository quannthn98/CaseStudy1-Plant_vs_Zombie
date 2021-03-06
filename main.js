let canvas1 = document.getElementById("canvas1")
let ctx1 = canvas1.getContext('2d')

let canvas;
let ctx;

let isGameStarted = false;
let isGamePaused = false;
let isRestartClicked = false;
let isGameEnded = false;

let houseLine = 200;
let balance = 100;
let scores = 0;

let spawnZombie = 8000;
let scoreMark = 0;
let isHugeWave = false;

let spawnSun = 3000;
let sunSpeed = 11
let numberSunGen = 1;
let sunFlowerMark = 0;

let myPlayGround = new Image();
myPlayGround.src = "img/backGround1.jpg"

let pauseButton = new Image();
pauseButton.src = "img/pause.png"

let resumeButton = new Image();
resumeButton.src = "img/resume.png"

let confirmReset = new Image();
confirmReset.src = "img/confirmReset.png"

let gameOverScene = new Image();
gameOverScene.src = "img/gameover.png"

let menu = new Image();
menu.src = "img/menu.png"

let plants = [];
let sunFlowers = [];
let walls = [];
let cherries = [];
let bullets = [];

let defenders = [plants, sunFlowers, walls]

let zombies = [];

let money = [];
let randomMoney = [];

let selected;
let previousSelected;
let isPlantSelected = false;
let isRemoveSelected = false;

canvas1.addEventListener('click', startGame, false);//Click on secondary canvas to start game

let playGround = {

    width: 1450,
    height: 650,

    start: function () {
        this.intervalOfUpdate = setInterval(updateGame, 20); //Draw everything again after 20ms
        this.intervalOfNewZombies = setInterval(newZombies, spawnZombie); //Create new zombies every 5s
        this.intervalOfDetectZombies = setInterval(detectZombies, 1000); //Let Plant check and attack every 1s
        this.intevalOfGenerateSun = setInterval(generateSun, spawnSun); //Generate sun every 3s at random SunFlowers
        this.itervalOfRandomSun = setInterval(randomSun, 8000); //Random Sun vevery 10s
        this.intervalOfZombiesAttack = setInterval(zombieAttack, 1000); //Let zombies check and attack every 0.5s
        this.intevalOfCherries = setInterval(checkCherries, 1000)//Check cherries for explode every 1s
        this.intevalOfCooldown = setInterval(reduceCooldown, 1000);//Reduce cooldown every 1s
        this.intervalOfHugewave = setInterval(checkHugeWave, 2000) ;
    },

    drawBackground: function () {
        ctx.drawImage(myPlayGround, 0, 0, this.width, this.height);
        ctx.drawImage(pauseButton, 1050, 0, 250, 180)
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
        clearInterval(this.intervalOfHugewave);
        isGameStarted = false;
    }
}

//Update game - Update current status of every objects on playGround.
function updateGame() {

    playGround.clear();
    playGround.drawBackground();

    updateBalance();
    updateScore();

    checkZombiesHits();
    increaseGameLevel();
    updateBullets();
    updateCherries();
    updateDefenders();
    updateZombies();
    updateGeneratedSun();
    updateRandomSun();
}

//Decrease Cooldown
function reduceCooldown() {
    updateCooldownShooter();
    updateCooldownSunFlower();
    updateCooldownWall();
    updateCooldownCherry();
}

//Update current balance
function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

//Update current scores
function updateScore() {
    document.getElementById("score").innerText = "Scores: " + scores;
}

//Place Defenders
function changeSelected(id) {
    selected = id;
    if (isPlantSelected && id === previousSelected) {

        isPlantSelected = false;
        unHighlightSelected(id)

    } else if (isPlantSelected === false || isPlantSelected === true && id !== previousSelected) {

        isPlantSelected = true;
        isRemoveSelected = false;
        highlightSelected(id);

        if (previousSelected >= 0) {
            unHighlightSelected(previousSelected);
        }
    }
    previousSelected = id;
}

//Highlight Selected plants
function highlightSelected(id) {
    document.getElementById(id + '').style.border = "dashed #356397E8";
}

//UnHighlight Selected plants
function unHighlightSelected(id) {
    document.getElementById(id + '').style.border = "0px";
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




