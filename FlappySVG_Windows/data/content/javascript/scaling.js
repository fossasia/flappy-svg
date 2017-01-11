// scale the game so it always fits the screen
// This way the zoom is not activated on tablets and phones

var _playfield = null;

function playfield() {
    if (_playfield == null) {
        _playfield = new Playfield();
    }
    return _playfield;
}

function Playfield() {
    this.SVGElement = document.getElementsByTagName("svg")[0];
    this.width = this.SVGElement.getAttribute('width');
    this.height = this.SVGElement.getAttribute('height');

    // window height and width
    //    http://stackoverflow.com/questions/6850164/get-the-device-width-in-javascript
    this.window_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    this.window_height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

    var scale_width = this.window_width / this.width;
    var scale_height = this.window_height / this.height;

    // choose smallest scale
    //    http://www.w3schools.com/jsref/jsref_min.asp
    this.scale = Math.min(scale_height, scale_width);

    // set the dimensions
    this.SVGElement.setAttribute('width', this.width * this.scale);
    this.SVGElement.setAttribute('height', this.height * this.scale);}

function scaleToFullscreen() {
    playfield();
}

  