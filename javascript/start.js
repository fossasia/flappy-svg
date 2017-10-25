// Execute everything that should be started.
// This script must be the last script. Otherwise not all functions may be loaded.


current_character_index = 0;
current_background_index = 0;
var characters = [ "bird", "bat", "alien", "flappydino", "helicopter", "rocket", "Santa",
               "Super_rocket", "Flappyfish", "unicorn", "botty", "black_cat", "ball",
               "octodex", "grandma", "dog" ];
var backgrounds = [ "background", "Gotham", "space", "Snow", "Sea", "Island", "binarybg", "Evil" ];

function next_character(){
    var layer = characters[current_character_index];
    console.log(characters[current_character_index]);
    characterChange(layer);
    current_character_index = (current_character_index + 1) % (characters.length);
}

function next_background(){
    var layer=backgrounds[current_background_index];
    console.log(backgrounds[current_background_index]);
    backgroundChange(layer);
    current_background_index = (current_background_index+1) % (backgrounds.length);
}

window.onload = function() {
    scaleToFullscreen();
    showStartScreen();

    rand = Math.floor((Math.random() * (backgrounds.length)));
    backgroundChange(backgrounds[rand])
    current_background_index = (rand + 1) % (backgrounds.length);

    rand = Math.floor((Math.random() * (characters.length)));
    characterChange(characters[rand]);
    current_character_index = (rand + 1) % (backgrounds.length);

    for(var i = 0; i < characters.length; i++){
        var character = characters[i];
        layerNamed(character).onclick = function(){ next_character(); };
    }
}

window.onkeydown = function(event){
    switch(event.keyCode){
        case 32:
            next_character();
            break;
        case 66:
            next_background();
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