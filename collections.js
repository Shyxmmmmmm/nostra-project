var a = document.getElementById("one")
var b = document.getElementById("two")
var c = document.getElementById("three")
var d = document.getElementById("four")
var e = document.getElementById("five")


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