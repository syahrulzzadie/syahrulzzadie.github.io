function getElementId(idElement){
  document.getElementById(idElement);
}

window.onload = () => {
  var body = getElementId('myapp');
  body.innerHTML('Hai');
};
