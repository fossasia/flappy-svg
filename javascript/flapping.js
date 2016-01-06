

function Flappy(layerName) {
    this.layerName = layerName;
    this.layer = layerNamed(layerName);
    this.position = gameObject(this.layer);
    var me = this;
    this.action = new Action(function(){me.fly()}, function(){me.started()});
    document.onmousedown = function(){me.flap()};
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
    }
}

var flappy = null;



function characterChange(layer) {
    if(flappy){
        flappy.hide();
    }
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


