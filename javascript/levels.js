function Level(home, backgroundLayers, obstaclesLayer){
	this._backgrounds = backgroundLayers;
	this.obstacleLayer = obstaclesLayer;
	this._obstacles = createObstacles(obstaclesLayer);
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

var all_levels,current_level;

function getAllLevels(){
	return all_levels;
}

function newLevel(name,backgroundLayers,obstaclesLayer){
	return new Level(name,backgroundLayers,obstaclesLayer);
}

function AlllevelObjects(){
	// Need to be properly Modified
	levels = ["level1","level2"];
	
	backgrounds = {
		"level1":[],
		"level2":[]
	};
	
	obstacles = {
		"level1":"obstacle for level1",
		"level2":"obstacle for level2",
	};

	for(level in levels){
		all_levels[level] = newLevel(level,backgrounds[level],obstacles[level]);
	}
}

function setCurrentLevel(name){
	current_level = all_levels[name];
}

function getCurrentLevel(){
	return current_level;
}
