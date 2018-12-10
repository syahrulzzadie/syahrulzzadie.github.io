////////////////////////////////////
// Created By : Syahrul Adiguna K //
////////////////////////////////////
function getElement(id) {
	return document.getElementById(id);
}
function createElement(element) {
	return document.createElement(element);
}
var app = getElement('app');
function onLoad() {
	var div = createElement('div');
	app.appendChild(div);
}
