// Execute everything that should be started.
// This script must be the last script. Otherwise not all functions may be loaded.

window.onload = function() {
    scaleToFullscreen();
    showStartScreen();
    var character = ["bird", "bat", "alien","flappydino","helicopter"];
    var back=["background","Gotham"];

    //Default Layer
    	var MAX = 1;
	rand=Math.round((Math.random() * MAX)); 
    	backgroundChange(back[rand])
	
	MAX = 5;
	rand = Math.floor((Math.random() * MAX));
    	characterChange(character[rand])
	
	
}
