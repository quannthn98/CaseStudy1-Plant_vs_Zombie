let sunFlower = new Image();
sunFlower.src = "img/sunflower.png";
let sun = new Image();
sun.src = "img/sun.png"

class SunFlower {
    x;
    y;
    width;
    height;
    sun;
    hp;
    zoneId;

    constructor(zone, zoneId) {
        this.x = zone.x + 15;
        this.y = zone.y;
        this.zoneId = zoneId;
        this.width = 50;
        this.height = 65;
        this.sun = 25
        this.hp = 5

    }

    update() {
        ctx.beginPath();
        ctx.drawImage(sunFlower, this.x, this.y, this.width, this.height)
    }

    generateSun() {
        money.push(new Sun(this.x, this.y,0))
        ctx.beginPath();
        ctx.drawImage(sun, this.x + 20, this.y + 35, 60, 60)
    }

    dead(id) {
        sunFlowers.splice(id, 1);
        zones[this.zoneId].available = true;
        sunFlowerMark--;
    }

    checkStatus(id) {
        if (this.hp == 0) {
            this.dead(id);
        }
    }

    remove(id) {
        sunFlowers.splice(id, 1);
        zones[this.zoneId].available = true;
        sunFlowerMark--;
    }

}

class Sun {
    x;
    y;
    width;
    height;
    xSpeed;
    ySpeed;
    constructor(x, y, ySpeed) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
        this.xSpeed = 0;
        this.ySpeed = ySpeed;
    }

    update(id) {
        if (this.y > 622) {
            this.y = 622;
        }
        ctx.beginPath();
        ctx.drawImage(sun, this.x + 20, this.y + 35, 60, 60)
    }

}

