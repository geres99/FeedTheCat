var div = document.createElement("div")
div.className = "square"
document.body.appendChild(div)
var square1 = document.querySelector(".square")
for(var i = 0; i < 5; i++) {
square1.style.top = 50*i + "px"
}
