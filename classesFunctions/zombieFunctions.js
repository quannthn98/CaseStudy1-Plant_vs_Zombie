//Add new zombies at random Lines
function newZombies() {
    let number = Math.floor(Math.random() * 5)
    zombies.push(new Zombie(lines[number].y, 1));

    if (scores % 5 === 0 && scores !== 0) {
        number = Math.floor(Math.random() * 5);
        zombies.push(new Zombie(lines[number].y, 2));
    }

    if (scores % 11 === 0 && scores !== 0) {
        number = Math.floor(Math.random() * 5);
        zombies.push(new Zombie(lines[number].y, 3));
    }

    if (scores % 2 === 0 && scores !== 0) {
        hugeWave.play()
        for (let i = 0; i < 15; i++) {
            number = Math.floor(Math.random() * 5);
            let level = Math.floor(Math.random() * 3 + 1);
            zombies.push(new Zombie(lines[number].y, level));
        }
    }
    newZomSound.play();
}

//Let Zombies Attack plants
function zombieAttack() {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].detectObject();
    }
}

// Check if Zombies het Hits by bullets
function checkZombiesHits() {
    for (let i = 0; i < zombies.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            if (zombies[i].y == bullets[j].y && bullets[j].x > zombies[i].x) {
                bullets[j].destroy(j);
                zombies[i].getShot();
                hitZombieSound.play();
                console.log('hp of zombie ' + i + ' is: ' + zombies[i].hp)
                zombies[i].checkStatus(i);
            }
        }
    }
}