function Obstacle(svg_object) {
    this.svg = svg_object;
    var me = this;
    this.action = new Action(function () { me.update() });
    this.isCollided = false;
    this.action.start();
}

Obstacle.prototype = {
    update: function () {
        if (!flappy)
           return;

        if (isColliding(this.svg, flappy.layer)) {
            if (!this.isCollided) {
                console.log("hit");
                this.isCollided = true;
            }
        }
        else if (this.isCollided) {
            this.isCollided = false;
        }
    }
}

function isColliding (e1, e2) {
    var rect = e1.getBoundingClientRect();
    var other_rect = e2.getBoundingClientRect();

    var height = other_rect.height;

    //Collider smaller than real image(better gameplay)
    var width = other_rect.width * 0.75;

    return (rect.top <= other_rect.bottom && other_rect.top <= rect.bottom && rect.right >= other_rect.left && rect.left <= other_rect.right);
}
