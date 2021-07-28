class Plant {
    width;
    height;
    x;
    y;
    cost;
    level;
    hp;
    zoneId;
    shootCount;

    constructor(x, y, zoneId, level) {
        this.x = x;
        this.y = y;
        this.zoneId = zoneId;
        this.width = 50;
        this.height = 70;
        this.cost = 100;
        this.hp = 1000;
        this.level = level;
        this.shootCount = 0;
    }

    update() {
        if (this.level == 1) {
            ctx.drawImage(plant1, this.x, this.y, 50, this.height);
        } else {
            ctx.drawImage(plant2, this.x, this.y, 55, this.height);
        }
    }

    checkStatus(id) {
        if (this.hp == 0) {
            this.dead(id);
        }
    }

    dead(id) {
        plants.splice(id, 1);
        zones[this.zoneId].available = true;
    }

    shoot() {
        bullets.push(new Bullets(this.x + 20, this.y));
    }

    detectZombies() {
        let canShoot = false;
        for (let i = 0; i < zombies.length; i++) {
            if (zombies[i].y == this.y) {
                canShoot = true;
            }
        }
        console.log(canShoot)
        if (canShoot) {
            this.shoot();
        }
    }

    remove(id) {
        plants.splice(id, 1);
        zones[this.zoneId].available = true;
    }


}

let plant1 = new Image();
let plant2 = new Image();
plant1.src = "img/plant1.png"
plant2.src = "img/plant2.1.png"