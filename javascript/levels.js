function Level(name, backgrounds, obstacles){
	this._backgrounds = backgrounds;
	this.obstacles = obstacles;
	this._obstacles = createObstacles(obstacles);
	this._name = name;
	this._score = 0;
}

Level.prototype = {

	show: function(){

		for (let i = 0; i < this._backgrounds.length; i++) {
			show_layer(this._backgrounds[i].layer);
		}

		for (let i = 0; i < this.obstacles.length; i++) {
			show_layer(this.obstacles[i].layer);
		}
	},

	hide: function(){

		for (let i = 0; i < this._backgrounds.length; i++) {
			hide_layer(this._backgrounds[i].layer);
		}

		for (let i = 0; i < this.obstacles.length; i++) {
			hide_layer(this.obstacles[i].layer);
		}

	},

	getBackgrounds: function(){
		return this._backgrounds;
	},

	getObstacles: function(){
		return this._obstacles;
	},

	getName: function(){
		return this._name;
	},

	getScore: function(){
		return this._score;
	},

	start: function(){
		//Needs to be Implemented
		this.show();
	},

	stop: function(){
		// Needs to be Implemented
		this.hide();
	},

}

var all_levels = {}, current_level;

// Specifications of any new level must be given here

var all_level_specifications = {
	"desert":{

		"obstacles":[
		{
			"layer": "cactus",
			"velocity": 10,
		}
		],

		"backgrounds":[
		{
			"layer" : "DayAndNight",
			"velocity" : -20
		},
		{
			"layer" : "background",
			"velocity" : -7
		},
		{
			"layer" : "SunAndMoon",
			"velocity" : 1
		},
		{
			"layer" : "sky",
			"velocity" : 0
		}
		]

	},

	"island":{

		"obstacles":[
		{
			"layer": "thunder",
			"velocity": -7
		}
		],

		"backgrounds":[
		{
			"layer" : "Island",
			"velocity" : -7
		}
		],

	},

	"gotham":{

		"obstacles":[
		{
			"layer":"Gotham_Obstacles",
			"velocity": -7
		}
		],

		"backgrounds":[
		{
			"layer":"Gotham",
			"velocity": -7
		}
		],
	},

	"space":{

		"obstacles":[
		{
			"layer":"space_rocket",
			"velocity": -7
		}
		],

		"backgrounds":[
		{
			"layer":"space",
			"velocity": -7
		}
		],
	},

	"Snow":{

		"obstacles":[
		{
			"layer":"Gifts",
			"velocity": -7
		}
		],

		"backgrounds":[
		{
			"layer":"Snow",
			"velocity": -7
		}
		],
	},

	"Evil":{

		"obstacles":[
		{
			"layer":"energy",
			"velocity": -7
		}
		],

		"backgrounds":[
		{
			"layer":"Evil",
			"velocity": -7
		}
		],
	},

	"Sea":{

		"obstacles":[
		{
			"layer":"fishinghook",
			"velocity": -7
		}
		],

		"backgrounds":[
		{
			"layer":"Sea",
			"velocity": -7
		}
		],
	},

};




function getAllLevels(){
	return all_levels;
}

function newLevel(name,backgroundLayers,obstaclesLayer){
	return new Level(name,backgroundLayers,obstaclesLayer);
}

function setCurrentLevel(name){
	current_level = all_levels[name];
}

function getCurrentLevel(){
	return current_level;
}

window.onload = function() {
    for (level in all_level_specifications) {
        specs = all_level_specifications[level];
        all_levels[level] = newLevel(level, specs["backgrounds"], specs["obstacles"]);
    }
}
