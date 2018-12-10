function getElementId(idElement){
  document.getElementById(idElement);
}

window.onload = () => {
  var title = getElementId('myTitle');
  var body = getElementId('myapp');
  title.innerHTML = "Syahrul Adiguna Kurniawan";
  body.innerHTML = "Hai";
};
