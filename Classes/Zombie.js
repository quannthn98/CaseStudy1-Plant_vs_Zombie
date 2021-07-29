class Zombie {
    x;
    y;
    width;
    height;
    hp;
    maxSpeed;
    speed;
    img;
    constructor(y, level) {
        this.x = 1100;
        this.y = y;
        this.width = 58;
        this.height = 80;
        switch(level){
            case 1:
                this.maxSpeed = 1
                this.img = zombie;
                this.hp = 8
                break;
            case 2:
                this.maxSpeed = 1.15;
                this.img = zombie2;
                this.hp = 15;
                break;
            case 3:
                this.maxSpeed = 1.4;
                this.img = zombie3;
                this.hp = 25;
                break;
        }
        this.speed = this.maxSpeed


    }

    update() {
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    getShot() {
        this.hp -= 1;
    }

    dead(id) {
        zombies.splice(id, 1);
        scores++;
    }

    checkStatus(id) {
        if (this.hp == 0) {
            this.dead(id);
        }
    }

    attack(object) {
        object.hp-=1;
        console.log('object hp: '+ object.hp)
        // playSound(eatSound)
        zombieEatSound();
    }

    detectObject() {
        for (let i = 0; i < defenders.length; i++) {
            for (let j = 0; j < defenders[i].length; j++) {
                if (this.x > defenders[i][j].x && this.x < defenders[i][j].x + defenders[i][j].width && this.y == defenders[i][j].y && defenders[i][j].hp > 1) {
                    this.speed = 0;
                    this.attack(defenders[i][j])
                    defenders[i][j].checkStatus(j);

                } else if (defenders[i][j].hp == 1) {
                    for (let k = 0; k < zombies.length; k++) {
                        if (zombies[k].y == defenders[i][j].y) {
                            zombies[k].speed = 1;
                        }
                    }
                    this.attack(defenders[i][j])
                    defenders[i][j].checkStatus(j);
                }
            }
        }
    }

    checkIfInHouse(){
        if (this.x < houseLine){
            if (!alert('Your brain are gone. Game over')) {
                playGround.stop();
               // playSound(endgameSound)
                endgameSound();
            }

        }
    }

}

let zombie = new Image();
let zombie2 = new Image();
let zombie3 = new Image();
let zombie4 = new Image();
zombie.src = "img/zom.png"
zombie2.src = "img/zom1.png"
zombie3.src = "img/zom2.png"
zombie4.src = "img/zom3.png"
