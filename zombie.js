class Zombie {
    x;
    y;
    width;
    height;
    hp;
    speed;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 75;
        this.hp = 10
        this.speed = 1
    }

    update() {
        ctx.beginPath();
        ctx.drawImage(zombie, this.x, this.y, this.width, this.height)
    }

    getShot() {
        this.hp--;
    }

    // dead() {
    //     this.x = -100;
    //     this.y = -100;
    // }

    dead(id){
        zombies.splice(id,1)
    }

    checkStatus(id) {
        if (this.hp == 0) {
            this.dead(id);
        }
    }

    attack(object){
        object.hp--;
    }

    // detectObject(){
    //     for (let i = 0; i < walls.length; i++) {
    //         if(this.x > walls[i].x && this. x < walls[i].x + walls[i].width && this.y == walls[i].y && walls[i].hp > 1) {
    //             this.speed = 0;
    //             this.attack(walls[i])
    //             walls[i].checkStatus();
    //
    //         } else if (walls[i].hp == 1) {
    //         for (let j = 0; j < zombies.length; j++) {
    //             if (zombies[j].y == walls[i].y) {
    //                 zombies[j].speed = 1;
    //             }
    //         }
    //         this.attack(walls[i]);
    //         walls[i].checkStatus();
    //
    //     }
    //     }
    //
    // }
    detectObject(){
        for (let i = 0; i < defenders.length; i++) {
            for (let j = 0; j < defenders[i].length; j++) {
                if (this.x > defenders[i][j].x && this. x < defenders[i][j].x + defenders[i][j].width && this.y == defenders[i][j].y && defenders[i][j].hp > 1 ){
                    this.speed = 0;
                    this.attack(defenders[i][j])
                    defenders[i][j].checkStatus();

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


}

let zombie = new Image();
zombie.src = "img/zombie.png"
