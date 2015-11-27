
backgrounds = {};

function background(layerName, velocity) {
    if (backgrounds[layerName]) {
        var background = backgrounds[layerName];
        if (velocity != undefined) background.velocity = velocity;
        return background;
    }
    return new Background(layerName, velocity);
}

function Background(layerName, velocity) {
    this.layerName = layerName;
    this.layer = layerNamed(layerName);
    this.position = gameObject(this.layer);
    this.velocity = velocity;
    this.direction = Math.sign(this.velocity)
    this.width = widthOfLayer(this.layer);
    var me = this;
    this.action = new Action(function(){me.move()}, function(){me.started()});
    
    backgrounds[this.layerName] = this;
}

Background.prototype = {
    startMoving : function() {
        this.action.start();
    },
    stopMoving : function() {
        this.action.stop();
    },
    
    move : function() {
        var x = this.position.x;
        x += this.velocity;
        if (x * this.direction > this.width) {
            x -= this.direction * this.width;
        }
        this.position.x = x;
    },
    started : function() {
        this.position.x = 0;
    }
}

function startMovingBackgound(name, velocity) {
    background(name, velocity).startMoving();
}

function stopMovingBackgound(name) {
    background(name).stopMoving();
}


