// Execute everything that should be started.
// This script must be the last script. Otherwise not all functions may be loaded.

window.onload = function() {
    scaleToFullscreen();
    showStartScreen();



    //Default Layer
    var MAX = 2;
	var rand = Math.floor((Math.random() * MAX) + 1);
	if (rand == 1) {
    		backgroundChange('background')
	}
	if (rand == 2) {
    		backgroundChange('Gotham')
	}

	var MAX = 5;
	var rand = Math.floor((Math.random() * MAX) + 1);
	if (rand == 1) {
    		characterChange('bird')
	}
	if (rand == 2) {
    		characterChange('bat')
	}
	
	if (rand == 3) {
    		characterChange('alien')
	}
	if (rand == 4) {
    		characterChange('flappydino')
	}
	if (rand == 5) {
    		characterChange('helicopter')
	}
	
}
