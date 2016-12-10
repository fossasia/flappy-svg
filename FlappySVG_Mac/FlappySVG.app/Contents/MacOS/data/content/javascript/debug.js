// debug help

function getDebugElement() {
    return document.getElementById('debugString');
}

function setDebugString(string) {
    getDebugElement().textContent = string;
}