
backgrounds = {};

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

function backgroundChange(layer){
	desertHide()
	gothamHide()
	
	if (layer =='background'){
		desertShow()}
	
	if (layer =='Gotham'){
		gothamShow()}
}

function desertShow(){
		layerNamed('cactus').style.display = 'inline'
		layerNamed('DayAndNight').style.display = 'inline'
		layerNamed('background').style.display = 'inline'
		layerNamed('SunAndMoon').style.display = 'inline'
		layerNamed('sky').style.display = 'inline';
}

function desertHide(){
		layerNamed('cactus').style.display = 'none'
		layerNamed('DayAndNight').style.display = 'none'
		layerNamed('background').style.display = 'none'
		layerNamed('SunAndMoon').style.display = 'none'
		layerNamed('sky').style.display = 'none';
}

function gothamShow(){
		layerNamed('Gotham').style.display = 'inline'
		layerNamed('Gotham_obstacles').style.display = 'inline'
}
		
function gothamHide(){
		layerNamed('Gotham').style.display = 'none'
		layerNamed('Gotham_obstacles').style.display = 'none'
}




