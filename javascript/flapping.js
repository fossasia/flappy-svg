function Flappy(layerName) {
    this.layerName = layerName;
    this.layer = layerNamed(layerName);
    this.position = gameObject(this.layer);
    this._isCollided = false;
    var me = this;
    this.action = new Action(function(){me.fly()}, function(){me.started()});
    document.onmousedown = function () { me.flap() };
}

Flappy.prototype = {
    velocity : 0,
    gravity : 1.8,
    flapVelocity : -20,

    startFlapping : function() {
        this.action.start();
        this.position.show();
    },
    stopFlapping : function() {
        this.action.stop();
    },

    fly : function() {
        this.velocity += this.gravity;
        this.position.y = this.position.y + this.velocity;
        if (this.position.screen.bottom > playfield().height) {
            this.position.screen.bottom = playfield().height;
        }
        if (this.position.screen.top < 0) {
            this.position.screen.top = 0;
        }

        this.checkCollision();
    },
    started : function() {
        this.position.y = 0;
        this.velocity = 0;
    },
    flap : function() {
        this.velocity = this.flapVelocity;
    },
    show : function() {
        this.position.show();
    },
    hide : function() {
        this.position.hide();
    },

    checkCollision : function() {
        var flappy_rect = this.layer.getBoundingClientRect();
        for (i = 0; i < 3; i++) {
            if (i >= obstacles.length)
                return;
            var o_rect = obstacles[i].getBox;

            var c = isOverlap(flappy_rect, o_rect);

            if (c || o_rect.right < flappy_rect.left)
                obstacles.push(obstacles.shift());

            this.isCollided = c;
        }
    },

    set isCollided(value){
        if (this._isCollided != value)
            this._isCollided = value;

        //On collision code here.
        if (this._isCollided)
       	    onCollision();
    },

    get isCollided(){
        return this._isCollided;
    }
}

var flappy = null;

function characterChange(layer) {
    hide_layer('bird');
    hide_layer('bat');
    hide_layer('alien');
    hide_layer('flappydino');
    hide_layer('helicopter');
    flappy = new Flappy(layer);
    flappy.show();
}

function stopCharacterChange(){
window.characterChange=function(){
	return false;
}
}

function startFlapping(layer) {
    if (!flappy) {
        flappy = new Flappy(layer);
    }
    flappy.startFlapping();
}

function stopFlappingBackgound(name) {
    if (flappy) {
        flappy.stopFlapping();
    }
}

//Parameters are rects
function isOverlap(e1, e2) {
    return (e1.top <= e2.bottom && e2.top <= e1.bottom && e1.right >= e2.left && e1.left <= e2.right);
}

function onCollision(){
    show_layer('gameover');
    stopAllBackgrounds();
}

function restartGame(){
    location.reload();
}
