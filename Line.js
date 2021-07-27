class line {
    x;
    y;
    width;
    height;

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 900;
        this.height = 100;
    }

    update(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height)
    }
}


let line1 = new line(200, 80);
let line2 = new line(200, 180);
let line3 = new line(200, 280);
let line4 = new line(200, 380);
let line5 = new line(200, 480);
let lines = [line1, line2, line3, line4, line5]




