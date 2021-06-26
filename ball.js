
class ball {
    constructor(x, y, width, height) {
        var opt = {
            isStatic: false,
            restution: 0.3,
            friction: 0.5,
            density: 1.4
        }
        this.body = Bodies.rectangle(x, y, width, height, opt);
        this.height = height;
        this.width = width;
        this.image = loadImage("paper1.jpg");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("pink");
        image(this.image, 0, 0,this.width,this.height);
    }


}

