//SunFlowers function
function generateSun() {
    if (sunFlowerMark > 5){
        numberSunGen++;
        sunFlowerMark = 0;
    }

    if (sunFlowers.length > 0) {
        for (let i = 0; i < numberSunGen; i++) {
            let number = Math.floor(Math.random() * sunFlowers.length)
            sunFlowers[number].generateSun();
        }
    }
}

//Random Sun
function randomSun() {
    let randomX = Math.floor(Math.random() * 850 + 200);
    randomMoney.push(new Sun(randomX, 0, -1));
}

function collectSun(){
    for (let i = 0; i < money.length; i++) {
        let ratio = money[i].y/(money[i].x - 135);
        money[i].xSpeed = sunSpeed;
        money[i].ySpeed = (money[i].xSpeed)*ratio;
    }
    for (let i = 0; i < randomMoney.length; i++) {
        let ratio = randomMoney[i].y/(randomMoney[i].x - 135);
        randomMoney[i].xSpeed = sunSpeed;
        randomMoney[i].ySpeed = (randomMoney[i].xSpeed)*ratio;
    }
}