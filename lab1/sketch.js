class Monster {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        text("😹", this.x, this.y);
    }

    move() {
        this.x = random(0, width);
        this.y = random(0, height);
    }
}

let m1 = new Monster(100, 100);
let m2 = new Monster(50, 300);

function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    background(200);
    fill(150, 0, 150);
    ellipse(mouseX, mouseY, 50, 50);

    m1.draw();
    m2.draw();

    if (mouseIsPressed) {
        m1.move();
        m2.move();
    }
}
