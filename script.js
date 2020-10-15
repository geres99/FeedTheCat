let ZjedzonePrzysmaki = 0
for(var i = 0; i < 5; i++) {
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var div = document.createElement("div")
div.className = "square square" + i
div.style.top = Math.floor(Math.random() * 250 + 1) + 10 + "px"
div.style.left = Math.floor(Math.random() * 400 + 1) + 550 + "px"
div.style.backgroundColor = "#" + randomColor
document.body.appendChild(div)
}
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
    let o = i
document.querySelector(".square" + o).addEventListener("mouseup", function (e) {
    let div2 = document.querySelector(".square" + o)
    removeEventListener("mousemove", dupa)
    if(e.clientX > 150 && e.clientX < 300 && e.clientY > 50 && e.clientY < 200) {
    div2.style.top = 10000 + "px"
    ZjedzonePrzysmaki ++
    document.getElementById("dupa13").innerHTML = "Zjedzone Chrupki:" + ZjedzonePrzysmaki
    }

}
)

    ZrobDostawe = function() {
        for(let p = 0; p < 5; p++) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        let div3 = document.querySelector(".square" + p)
        div3.style.top = Math.floor(Math.random() * 250 + 1) + 10 + "px"
        div3.style.left = Math.floor(Math.random() * 400 + 1) + 550 + "px"
        div3.style.backgroundColor = "#" + randomColor
        }
    }
}