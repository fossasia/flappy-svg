var obstacles;

function Obstacle(svg_object) {
    this.svg = svg_object;
}

Obstacle.prototype = {
    get getBox() {
        return this.svg.getBoundingClientRect();
    }
}

//Obstacles need to be a SVG Group.
function createObstacles(layer) {
    obstacles = [];
    var list = layerNamed(layer).getElementsByTagName("g");

    for (var i = 0; i < list.length; i++) {
        if (list[i].getAttribute('inkscape:label') == null) {
            var new_obstacle = new Obstacle(list[i]);
            obstacles.push(new_obstacle);
        }
    }

    obstacles.sort(function (a, b) {
        return a.getBox.left - b.getBox.left;
    });
}