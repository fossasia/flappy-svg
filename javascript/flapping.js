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
		var flapSound = new Audio("../flappy-svg/Sounds/Flappy.mp3");
		flapSound.play();
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

            if(!c){
                var d = isBehind(o_rect,flappy_rect);
                if(d){
                    updateScore();
                }
            } else {
				var gameOverSound = new Audio("../flappy-svg/Sounds/GameOver.mp3");
				gameOverSound.play();
				alert('Game Over :( Final Score: ' + Number(document.getElementById("tspan17169").innerHTML));
			}

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
    hide_layer('unicorn');
    hide_layer('flappydino');
    hide_layer('helicopter');
    hide_layer('rocket');
    hide_layer('Santa');
    hide_layer('Flappyfish');
    hide_layer('Super_rocket');
    hide_layer('botty');
    hide_layer('black_cat');
    hide_layer('ball');
    hide_layer('octodex');
    hide_layer('grandma');
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

function getCenteredrect(rect){
    centered_rect = {
        x:rect.left+rect.width/2,
        y:rect.bottom+rect.height/2,
        width:rect.width,
        height:rect.height,
    };
    return centered_rect;
}

//Parameters are rects
function isOverlap(e1, e2) {
    rect1 = getCenteredrect(e1);
    rect2 = getCenteredrect(e2);
    if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y)
        return true;
    else return false;
}

function onCollision(){
    show_layer('gameover');
    stopAllBackgrounds();
}

function restartGame(){
    location.reload();
}


function isBehind(r1,r2){
    return (r1.right<=r2.left);
}
