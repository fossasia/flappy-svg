// show the start screen

function showStartScreen() {
    layerNamed('startscreen').style.display = 'inline'; // none = hide layer
    layerNamed('hull').style.display = 'inline'; // none = hide layer
}

// start the game

function startGame() {
    // this must be configured one mousedown event in the start screen
    layerNamed('startscreen').style.display = 'none'; // none = hide layer
    layerNamed('score_board').style.display = 'inline';
    startFlapping('bird');
    startMovingBackgound('background', -7);
    startMovingBackgound('cactus', -7);
    startMovingBackgound('DayAndNight', -20);
    startMovingBackgound('SunAndMoon', 1);
    startMovingBackgound('Island', -7);
    startMovingBackgound('thunder', -7);
    startMovingBackgound('Gotham', -7);
    startMovingBackgound('Gotham_obstacles', -7);
    startMovingBackgound('space', -7);
    startMovingBackgound('space_rocket', -7);
    startMovingBackgound('Snow', -7);
    startMovingBackgound('Gifts', -7);
    startMovingBackgound('Sea', -7);
    startMovingBackgound('fishinghook', -7);
    startMovingBackgound('binarybg', -7);
    startMovingBackgound('Evil', -7);
    startMovingBackgound('energy', -7);
    scaleToFullscreen();


}
