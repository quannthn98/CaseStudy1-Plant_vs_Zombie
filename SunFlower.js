class SunFlower {
    x;
    y;
    width;
    height;
    sun;
    hp;
    zoneId;
    constructor(x, y, zoneId) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 75;
        this.sun = 25
        this.hp = 5
        this.zoneId = zoneId;
    }

    update() {
        ctx.beginPath();
        ctx.drawImage(sunFlower, this.x, this.y, this.width, this.height)
    }

    generateSun() {
        money.push(new Sun(this.x, this.y))
        ctx.beginPath();
        ctx.drawImage(sun, this.x + 20, this.y + 35, 60, 60)
    }

    dead(id) {
        sunFlowers.splice(id,1);
        zones[this.zoneId].available = true;
    }

    checkStatus(id) {
        if (this.hp == 0) {
            this.dead(id);
        }
    }




}

class Sun {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
    }

    update() {
        ctx.beginPath();
        ctx.drawImage(sun, this.x + 20, this.y + 35, 60, 60)
    }


}

let sunFlower = new Image();
sunFlower.src = "img/sunflower.png";
let sun = new Image();
sun.src = "img/sun.png"