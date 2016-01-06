// some functions that are useful

function searchTheDOM(parent, callable) {
    if (callable(parent)) {
        return parent;
    }
    var children = parent.childNodes;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var searchResult = searchTheDOM(child, callable);
        if (searchResult !== null) {
            return searchResult;
        }
    }
    return null;
}

cachedLayers = {};

function layerNamed(name) {
    name = name.toLowerCase();
    if (cachedLayers[name]) return cachedLayers[name];
    layer = searchTheDOM(document, function(layer) {
        if (!layer.getAttribute) return;
        if (layer.getAttribute('inkscape:groupmode') != 'layer') return;
        var label = layer.getAttribute('inkscape:label');
        if (!label) return;
        if (label.toLowerCase() != name) return;
        return layer;
    });
    if (layer == null) {
        alert('Error: getLayerNamed: Can not find a layer named "' + name + '". You should debug!');
    }
    cachedLayers[name] = layer;
    return layer;
}

function widthOfLayer(layer) {
    // find an element named "width" or "#width" or with id "width" an get its width
    var result = searchTheDOM(layer, function(element) {
        if (element.id == 'width') return element;
        if (!element.getAttribute) return;
        var label = element.getAttribute('inkscape:label');
        if (label == 'width' || label == '#width') return element;
        return;
    });
    if (!result) return;
    try {
        var bbox = result.getBBox();
    } catch (error) {
        if (error.name == "NS_ERROR_FAILURE") {
            // This error occurs of we try to get the width of a javascript element that is hidden.
            // Firefox 43.0.1
            return;
        }
        throw error;
    }
    return bbox.width;
}
function show_layer(layer){
    layerNamed(layer).style.display = 'inline';
}
function hide_layer(layer){
    layerNamed(layer).style.display = 'none';
}