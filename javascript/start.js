// Execute everything that should be started.
// This script must be the last script. Otherwise not all functions may be loaded.

var characters;
var backgrounds;

window.onload = function() {
    scaleToFullscreen();
    showStartScreen();

<<<<<<< HEAD
    var characters = ["bird", "bat", "alien","flappydino","helicopter", "rocket","Santa", "Super_rocket", "Flappyfish", "Ball", "Blocky",  "unicorn", "botty"];
    var backgrounds=["background","Gotham","space","Snow", "Sea", "Island", "binarybg"];
=======
    characters = ["bird", "bat", "alien","flappydino","helicopter", "rocket","Santa", "Super_rocket", "Flappyfish",  "unicorn", "botty", "black_cat","ball","octodex", "grandma","dog"];
    backgrounds=["background","Gotham","space","Snow", "Sea", "Island", "binarybg","Evil"];
>>>>>>> f42a18f... Fixes #253 Adds Keyboard Control and updates the how-to-play svg

    rand=Math.floor((Math.random() * (backgrounds.length)));
    backgroundChange(backgrounds[rand])

    rand = Math.floor((Math.random() * (characters.length)));
    characterChange(characters[rand])

}
i=0;
j=0;
window.onkeydown = function(event){
    switch(event.keyCode){
        case 32:
            var layer=characters[i];
            console.log(characters[i]);
            characterChange(layer);
            i=(i+1)%(characters.length);
            break;
        case 66:
            var layer=backgrounds[j];
            console.log(backgrounds[j]);
            backgroundChange(layer);
            j=(j+1)%(backgrounds.length);
            break;
        case 13:
            startGame();
            break;
        case 82:
            restartGame();
            break;
        default:
            console.log("enterred");
            break;
    }
    return false;
}
