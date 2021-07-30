let plant1 = new Image();
plant1.src = "img/plant1.png"

class Plant {
    width;
    height;
    x;
    y;
    cost;
    hp;
    zoneId;
    shootCount;

    constructor(zone, zoneId) {
        this.x = zone.x + 15;
        this.y = zone.y;
        this.zoneId = zoneId;
        this.width = 50;
        this.height = 69;
        this.cost = 100;
        this.hp = 10;
        this.shootCount = 0;
    }

    update() {
        ctx.drawImage(plant1, this.x, this.y, this.width, this.height);
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
        firePea.play();
    }

    detectZombies() {
        for (let i = 0; i < zombies.length; i++) {
            if (zombies[i].y == this.y) {
                this.shoot();
                break;
            }
        }
    }

    remove(id) {
        plants.splice(id, 1);
        zones[this.zoneId].available = true;
    }

}

