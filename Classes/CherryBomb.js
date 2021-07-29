class CherryBomb {
    x;
    y;
    width;
    height;
    zoneId;
    hp;
    explodeArea;
    readyExplode;

    constructor(zone, zoneId) {
        this.x = zone.x + 15;
        this.y = zone.y;
        this.zoneId = zoneId;
        this.width = 65;
        this.height = 65;
        this.hp = 2;
        this.explodeArea = new CherryBombArea(zone);
        this.readyExplode = false;
    }

    update() {
        ctx.drawImage(cherry, this.x, this.y, this.width, this.height)
    }

    remove(id) {
        cherries.splice(id, 1)
        zones[this.zoneId].available = true;
    }

    explode(id) {
        let zombieCount = 0;
        let x = this.explodeArea.x;
        let y = this.explodeArea.y;
        let width = this.explodeArea.width;
        let height = this.explodeArea.height;
        for (let i = 0; i < zombies.length; i++) {
            if (zombies[i].x >= x && zombies[i].x <= (x + width) && zombies[i].y >= y && zombies[i].y <= (y + height)) {
                zombies[i].dead(i);
                zombieCount++;
                i--;
            }

        }
        console.log(zombieCount);
        zones[this.zoneId].available = true;
        this.remove(id)
    }

    checkZombiesAround(id) {
        let x = this.explodeArea.x;
        let y = this.explodeArea.y;
        let width = this.explodeArea.width;
        let height = this.explodeArea.height;
        for (let i = 0; i < zombies.length; i++) {
            if (zombies[i].x >= x && zombies[i].x <= x + width && zombies[i].y >= y && zombies[i].y <= y + height) {
                this.readyExplode = true;
                break;
            }
        }
        if (this.readyExplode) {
            this.explode(id);
            // playSound(cherrySound);
            cherrySound();
        }

    }

}

class CherryBombArea {
    x;
    y;
    width;
    height;

    constructor(cherry) {
        this.x = cherry.x - 70;
        this.y = cherry.y - 110;
        this.width = 3 * 70;
        this.height = 3 * 90;
    }
}

let cherry = new Image();
cherry.src = "img/cherryBomb.png"