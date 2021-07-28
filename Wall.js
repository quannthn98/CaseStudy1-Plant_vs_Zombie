class Wall {
    x;
    y;
    width;
    height;
    hp;
    zoneId;

    constructor(x, y, zoneId) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 65;
        this.hp = 10;
        this.zoneId = zoneId;
    }

    update() {
        ctx.beginPath();
        ctx.drawImage(wall, this.x, this.y, this.width, this.height);
    }

    dead(id) {
        walls.splice(id, 1);
        zones[this.zoneId].available = true;
    }

    checkStatus(id) {
        if (this.hp == 0) {
            this.dead(id);
        }
    }
}

let wall = new Image();
wall.src = "img/wall.png";

