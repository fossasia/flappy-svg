// Execute everything that should be started.
// This script must be the last script. Otherwise not all functions may be loaded.



window.onload = function() {
    scaleToFullscreen();
    showStartScreen();
    
    var characters = ["bird", "bat", "alien","flappydino", "helicopter", "rocket", "Super_rocket", "Ball", "blocky"];
    var backgrounds=["background","Gotham","space"];
    
    rand=Math.floor((Math.random() * (backgrounds.length))); 
    backgroundChange(backgrounds[rand])
    
    rand = Math.floor((Math.random() * (characters.length)));
    characterChange(characters[rand])
	
}

