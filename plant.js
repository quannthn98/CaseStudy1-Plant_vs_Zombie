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
        this.width = 50;
        this.height = 75;
        this.cost = 100;
        this.hp = 10;
        this.zoneId = zoneId;
    };

    update() {
        ctx.beginPath();
        ctx.drawImage(plant, this.x, this.y, this.width, this.height);

    };

    checkStatus(id) {
        if (this.hp == 0) {
            this.dead(id);
        }
    };

    dead(id) {
        plants.splice(id,1);
        zones[this.zoneId].available = true;
    };

    shoot() {
        bullets.push(new Bullets(this.x, this.y));
    };

    detectZombies() {
        for (let i = 0; i < zombies.length; i++) {
            if (zombies[i].y == this.y) {
                this.shoot();
            }
        }
    };


}

let plant = new Image();
plant.src = "img/plant1.png"