class Plant {
    width;
    height;
    x;
    y;
    cost;
    hp;
    zoneId;

    constructor(x, y, zoneId) {
        this.x = x;
        this.y = y;
        this.zoneId = zoneId;
        this.width = 50;
        this.height = 65;
        this.cost = 100;
        this.hp = 10;

    }

    update() {

        ctx.drawImage(plant, this.x, this.y, this.width, this.height);
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
        bullets.push(new Bullets(this.x+20, this.y));
    }

    detectZombies() {
        let canShoot = false;
        for (let i = 0; i < zombies.length; i++) {
            if (zombies[i].y == this.y) {
                canShoot = true;
            }
        }
        if (canShoot){
            this.shoot();
        }
    }

    remove(id){
        plants.splice(id,1);
        zones[this.zoneId].available = true;
    }


}

let plant = new Image();
plant.src = "img/plant1.png"