class Zone {
    x;
    y;
    width;
    height;
    available;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 85;
        this.height = 100;
        this.available = true;
    }

    update() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height)
    }

}

let zones = [];

let x = 265;
for (let i = 0; i < 9; i++) {
    let y = 90
    for (let j = 0; j < 5; j++) {
        zones.push(new Zone(x, y));
        y += 110;
    }
    x += 83
}

