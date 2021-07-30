class line {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 750;
        this.height = 110;
    }

    update() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height)
    }
}

let lines = [];

function creatLines() {
    let y = 90
    for (let i = 0; i < 5; i++) {
        lines.push(new line(265, y));
        y += 110;
    }
}

creatLines();





