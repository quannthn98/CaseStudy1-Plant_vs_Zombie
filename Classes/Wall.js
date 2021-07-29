class Wall {
    x;
    y;
    width;
    height;
    hp;
    zoneId;

    constructor(zone, zoneId) {
        this.x = zone.x + 15;
        this.y = zone.y;
        this.zoneId = zoneId;
        this.width = 50;
        this.height = 65;
        this.hp = 30;

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

    remove(id){
        walls.splice(id,1);
        zones[this.zoneId].available = true;
    }
}

let wall = new Image();
wall.src = "img/wall.png";

