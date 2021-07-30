function startGame() {
    if (!isGameStarted) {

        let hienthi =
            // "<button onclick=\"playGround.stop()\"> Stop</button>\n" +
            // "<button onclick=\"restartGame()\">Restart</button>" +
            "<table style=\"border-collapse: separate; border: 0px solid darkgrey; height: 150px\">\n" +
            "    <tr>\n" +
            "        <td onclick=\"collectSun()\"> <img src=\"img/balance.png\" alt=\"balance\"></td>\n" +
            "        <td id=\"0\" onclick=\"changeSelected(0)\"> <img src=\"img/plantCard.png\" alt=\"plant\"></td>\n" +
            "        <td id=\"1\" onclick=\"changeSelected(1)\"> <img src=\"img/SunCard.png\" alt=\"sun\"></td>\n" +
            "        <td id=\"2\" onclick=\"changeSelected(2)\"> <img src=\"img/wallCard.png\" alt=\"cherry\"></td>\n" +
            "        <td id=\"3\" onclick=\"changeSelected(3)\"> <img src=\"img/cherryCard.png\" alt=\"plant\"></td>\n" +
            "        <td id=\"removeplant\" onclick=\"removePlants()\" ><img src=\"img/remove.png\" alt=\"remove\"></td>\n" +
            "    </tr>\n" +
            "    <tr style=\"text-align: center\">\n" +
            "        <td id=\"balance\" style=\" font-family: Arial; font-weight: bold\"></td>\n" +
            "        <td id=\"shooter\" ></td>\n" +
            "        <td id=\"sunflower\" ></td>\n" +
            "        <td id=\"wall\" ></td>\n" +
            "        <td id=\"cherry\" ></td>\n" +
            "        <td ></td>\n" +
            "<!--        <td style=\"background-image:url(img/balance.png);background-repeat:no-repeat;background-size:250px 180px;   width: 250px; height: 180px;\">Hi</td>-->\n" +
            "    </tr>\n" +
            "</table>" +
            "<p id=\"score\"> Scores: 0</p>" +

            "<canvas id=\"canvas\" width=\"1450\" height=\"650\"></canvas>"

        document.getElementById('hienthi').innerHTML = hienthi;

        canvas = document.getElementById("canvas");
        ctx = canvas.getContext('2d');

        document.getElementById("balance").innerText = balance;

        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

        canvas.addEventListener('click', clickEvent, false)

        playGround.start();
        startgameSound.play();
        isGameStarted = true;
    }
}

function restartGame() {
    playGround.stop();
    plants = [];
    sunFlowers = [];
    walls = [];
    cherries = [];
    defenders = [plants, sunFlowers, walls]
    for (let i = 0; i < zones.length; i++) {
        zones[i].available = true;
    }
    randomMoney = [];
    zombies = [];
    bullets = [];
    money = [];
    isPlantSelected = false;
    isRemoveSelected = false;
    balance = 100;
    resetCooldown();
    updateGame();
}

function drawMenu() {
    ctx1.drawImage(menu, 0, 0, canvas1.width, canvas1.height);
}