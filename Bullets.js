let bullet = new Image();
bullet.src = "img/bullet1.png"

class Bullets {
    width;
    height;
    x;
    y;
    speed;

    constructor(x, y) {
        this.width = 35;
        this.height = 35;
        this.x = x;
        this.y = y;
        this.speed = 6;
    }

    update() {
        ctx.beginPath();
        ctx.drawImage(bullet, this.x, this.y, this.width, this.height)
    }

    destroy(id) {
        bullets.splice(id, 1)
        for (let i = 0; i < zones.length; i++) {

        }
    }

}