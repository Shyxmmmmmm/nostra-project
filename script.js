var a = document.getElementById("one")
var b = document.getElementById("two")
var c = document.getElementById("three")
var d = document.getElementById("four")
var e = document.getElementById("five")
var f = document.querySelectorAll(".six")
var heroImg = document.getElementById("heroImg")
var left = document.getElementById("left")
var right = document.getElementById("right")

b.addEventListener('click', function () {
    a.style.display = 'none'
})

c.addEventListener("click", function () {
    d.classList.toggle("-translate-x-full")
})

e.addEventListener('click', function () {
    d.classList.add("-translate-x-full")
})

f.forEach(function (g) {

    g.addEventListener("click", function () {

        if (g.classList.contains("fa-solid")) {
            g.classList.remove("fa-solid")
            g.classList.add("fa-regular")
            g.style.color = "rgb(22,22,22)"
        }
        else {
            g.classList.add("fa-solid")
            g.classList.remove("fa-regular")
            g.style.color = "rgb(229,57,28)"
        }

    })

})




window.addEventListener("load", () => {
    document.body.classList.remove("opacity-0");
});



var images = [
    "./img/p26.jpg",
    "./img/p17.jpg",
    "./img/p27.jpg"
]

var index = 0

right.addEventListener("click", function(){

if(index < images.length - 1){
index++
}

heroImg.src = images[index]

})

left.addEventListener("click", function(){

if(index > 0){
index--
}

heroImg.src = images[index]

})