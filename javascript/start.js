// Execute everything that should be started.
// This script must be the last script. Otherwise not all functions may be loaded.

window.onload = function() {
    scaleToFullscreen();
    showStartScreen();
    
    var characters = ["bird", "bat", "alien","flappydino","helicopter"];
    var backgrounds=["background","Gotham"];
    
    rand=Math.floor((Math.random() * (backgrounds.length))); 
    backgroundChange(backgrounds[rand])
    
    rand = Math.floor((Math.random() * (characters.length)));
    characterChange(characters[rand])
	
}

