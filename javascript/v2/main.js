// This script contains some functions that will be used throughout the game

var backgrounds = document.getElementsByClassName("background"); // = array

function backgroundChange(background) {
    for(var i = 0; i < backgrounds.length; i++) {
        backgrounds[i].style.display = "none";
    }
    document.getElementById(background).style.display = "inherit";
}

function hide_layer(layer) {
    if(document.getElementById(layer)){
        document.getElementById(layer).style.display = "none";
    }
}

function show_layer(layer) {
    if(document.getElementById(layer)){
        document.getElementById(layer).style.display = "inherit";
    }
}
