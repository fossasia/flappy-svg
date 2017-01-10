
function gameObject(SVGElement) {
    return new GameObject(SVGElement);
}

function GameObject(SVGElement) {
    this.SVGElement = SVGElement;
    this.initialTransformation = this.SVGElement.getAttribute('transform');
    this.xy = [0,0];
    this._cache = {};
    this.screen = new Screen(this);
}

GameObject.prototype = {
    initialTransformation : null,

    get x(){
        return this._x;
    },
    set x(x){
        this._x = x;
        this.updatePosition();
    },
    get y(){
        return this._y;
    },
    set y(y){
        this._y = y;
        this.updatePosition();
    },
    get xy(){
        return [this._x, this._y];
    },
    set xy(xy){
        this._y = xy[1];
        this._x = xy[0];
        this.updatePosition();
    },
    updatePosition : function() {
        var transformation = '';
        if (this.initialTransformation != null) {
            transformation += this.initialTransformation + ','
        }
        transformation += 'translate(' + Math.floor(this.x) + ', ' + Math.floor(this.y) + ')';
        this.SVGElement.setAttribute('transform', transformation);
        this._cache = {};
    },
    move : function(dx, dy) {
        if (dx == undefined && dy == undefined) {
            updatePosition();
        } else if (dy == undefined) {
            this.x += dx;
        } else if (dx == undefined) {
            this.y += dy;
        } else {
            this.xy = [this.x + dx, this.y + dy];
        }
    },
    show : function() {
        this.SVGElement.style.display = 'inline';
    },
    hide : function() {
        this.SVGElement.style.display = 'none';
    },
    isVisible : function() {
        return this.SVGElement.style.display != 'none';
    },
    cache : function(name, callable) {
        var value = this._cache[name];
        if (value != undefined) return value;
        this._cache[name] = value = callable();
        return value;
    },
    get bbox() {
        var me = this;
        return this.cache('bbox', function(){return me.SVGElement.getBBox()});
    },
    get width() {
        return this.bbox.width;
    },
    get height() {
        return this.bbox.height;
    }
};

function Screen(gameObject) {
    this.gameObject = gameObject;
}

Screen.prototype = {
    get _x() {
        return this.gameObject.x;
    },
    set _x(x) {
        this.gameObject.x = x;
    },
    get _y() {
        return this.gameObject.y;
    },
    set _y(y) {
        this.gameObject.y= y;
    },
    get _bbox() {
        return this.gameObject.bbox;
    },
    
    get width() {
        return this._bbox.width;
    },
    get height() {
        return this._bbox.height;
    },
    
    // position of the grafic
    get x() {
        return this._bbox.x + this.gameObject.x;
    },
    set x(x) {
        this._x = x - this._bbox.x;
    },
    get y() {
        return this._bbox.y + this.gameObject.y;
    },
    set y(y) {
        this._y = y - this._bbox.y;
    },
    
    // edges of the grafic
    get left() {
        return this.x;
    },
    set left(left) {
        this.x = left;
    },
    get top() {
        return this.y;
    },
    set top(top) {
        this.y = top;
    },
    get right() {
        return this.x + this.width;
    },
    set right(right) {
        this.x = right - this.width;
    },
    get bottom() {
        return this.y + this.height;
    },
    set bottom(bottom) {
        this.y = bottom - this.height;
    }
}




