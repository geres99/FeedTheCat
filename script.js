for(var i = 0; i < 5; i++) {
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var div = document.createElement("div")
div.className = "square square" + i
div.style.top = Math.floor(Math.random() * 250 + 1) + 10 + "px"
div.style.left = Math.floor(Math.random() * 400 + 1) + 550 + "px"
div.style.backgroundColor = "#" + randomColor
document.body.appendChild(div)
}
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("dupa12").innerHTML = coords;
  }
