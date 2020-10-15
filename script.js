var initialX
var initialY
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("dupa12").innerHTML = coords;
  }
for(var i = 0; i < 5; i++) {
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var div = document.createElement("div")
div.className = "square square" + i
div.style.top = Math.floor(Math.random() * 250 + 1) + 10 + "px"
div.style.left = Math.floor(Math.random() * 400 + 1) + 550 + "px"
div.style.backgroundColor = "#" + randomColor
document.body.appendChild(div)
}
let MouseClicked = false
for(let i = 0; i < 5; i++) {
    let v = i
document.querySelector(".square" + v).addEventListener("mousedown", function (e) {
    addEventListener("mousemove", dupa = function (e) {
    let div1 = document.querySelector(".square" + v)
    div1.style.top = e.clientY - 15 + "px"
    div1.style.left = e.clientX - 15 + "px"
    })
}
)
document.querySelector(".square" + v).addEventListener("mouseup", function (e) {
    removeEventListener("mousemove", dupa)
}
)
}
console.log(MouseClicked)