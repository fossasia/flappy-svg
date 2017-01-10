
backgrounds = {};
var obstacles;

function background(layerName, velocity) {
    if (backgrounds[layerName]) {
        var background = backgrounds[layerName];
        if (velocity != undefined) background.velocity = velocity;
        return background;
    }
    return new Background(layerName, velocity);
}

function sign(number) {
    // Math.sign is not present in Internet Explorer.
    // We define this here so it works everywhere.
    if (number < 0) {
        return -1;
    } else if (number > 0) {
        return  1;
    } else if (number == 0) {
        return  0;
    }
    return null;
}

function Background(layerName, velocity) {
    this.layerName = layerName;
    this.layer = layerNamed(layerName);
    this.position = gameObject(this.layer);
    this.velocity = velocity;
    this.direction = sign(this.velocity)
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
    },
    show : function() {
        this.position.show();
    },
    hide : function() {
        this.position.hide();
    },
    isVisible : function() {
        return this.position.isVisible();
    }
}

function startMovingBackgound(name, velocity) {
    var bg = background(name, velocity);
    if (bg.isVisible()) {
        bg.startMoving();
    }
}

function stopMovingBackgound(name) {
    background(name).stopMoving();
}

function stopAllBackgrounds(){
    for(var characters in backgrounds) {
    	stopMovingBackgound(characters);
    }
    flappy.stopFlapping();
}

function backgroundChange(layer){
	desertHide()
	islandHide()
	gothamHide()
  spaceHide()
	snowHide()
  seaHide()
	evilHide()
  binaryHide();
	if (layer =='background'){
		desertShow()
	}

	if (layer =='Island'){
		islandShow()
	}

	if (layer =='Gotham'){
		gothamShow()
	}

    if (layer =='space'){
        spaceShow()
    }
	if (layer =='Snow'){
    snowShow()
	}
  if (layer =='Sea'){
      seaShow()
  }
  if (layer == "binarybg") {
      binaryShow()
  }
	if (layer =='Evil'){
		evilShow();
	}
}

function desertShow(){
    show_layer('cactus');
    show_layer('DayAndNight');
    show_layer('background');
    show_layer('SunAndMoon');
    show_layer('sky');

    createObstacles("cactus");
}

function desertHide(){
        hide_layer('cactus');
        hide_layer('DayAndNight');
        hide_layer('background');
        hide_layer('SunAndMoon');
        hide_layer('sky');
}

function islandShow(){
        show_layer('Island');
        show_layer('thunder');

        createObstacles("thunder");
}

function islandHide(){
        hide_layer('Island');
        hide_layer('thunder');
}

function gothamShow(){
        show_layer('Gotham');
        show_layer('Gotham_obstacles');

        createObstacles("Gotham_obstacles");
}

function gothamHide(){
        hide_layer('Gotham');
        hide_layer('Gotham_obstacles');
}

function spaceShow(){
        show_layer('space');
        show_layer('space_rocket');

        createObstacles("space_rocket");
}

function spaceHide(){
        hide_layer('space');
        hide_layer('space_rocket');
}

function binaryShow(){
        show_layer('binarybg');
        show_layer('space_rocket');

        createObstacles("space_rocket");
}
function binaryHide(){
        hide_layer('binarybg');
        hide_layer('space_rocket');
}


function snowShow(){
        show_layer('Snow');
        show_layer('Gifts');

        createObstacles("Gifts");
}

function snowHide(){
        hide_layer('Snow');
        hide_layer('Gifts');
}

function seaShow(){
        show_layer('Sea');
        show_layer('fishinghook');

        createObstacles("fishinghook");
}

function seaHide(){
        hide_layer('Sea');
        hide_layer('fishinghook');
}
function evilShow(){
        show_layer('Evil');
        show_layer('energy');

        createObstacles("energy");
}

function evilHide(){
        hide_layer('Evil');
        hide_layer('energy');
}
