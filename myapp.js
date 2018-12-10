function getElementId(idElement){
  return document.getElementById(idElement);
}

window.onload = () => {
  var title = getElementId('myTitle');
  var body = getElementId('myApp');
  title.innerHTML = "Syahrul Adiguna Kurniawan";
  body.innerHTML = "Hai";
};

