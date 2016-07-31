function Level(backgroundLayers, obstaclesLayer,name){
	this._backgrounds=backgroundLayers;
	this.obstacleLayer = obstaclesLayer;
	this._obstacles=createObstacles(obstaclesLayer);
	this._name = name;
	this._score = 0;
}

Level.prototype = {

	show: function(){
		show_layer(this.obstaclesLayer);
		for (layer in this.backgrounds){
			show_layer(layer);
		}
	},

	hide: function(){
		hide_layer(this.obstaclesLayer);
		for (layer in this.backgrounds){
			hide_layer(layer);
		}
	},

	getBackgrounds(): function(){
		return this._backgrounds;
	},

	getObstacles: function(){
		return this._obstacles;
	},

	getName(): function(){
		return this._name;
	},

	getScore(): function{
		return this_score;
	},

	start(): function(){
		//Needs to be Implemented
	},

	stop(): function(){
		// Needs to be Implemented
	},

}
