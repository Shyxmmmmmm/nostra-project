var g=document.getElementById("seven")
var form = document.querySelector("form")

var c = document.getElementById("three")
var d = document.getElementById("four")
var e = document.getElementById("five")


form.addEventListener("submit", function(event){
    event.preventDefault()
    alert("SUBMITTED")
    form.reset()
})




c.addEventListener("click", function () {
    d.classList.toggle("-translate-x-full")
})

e.addEventListener('click', function () {
    d.classList.add("-translate-x-full")
})





window.addEventListener("load", () => {
    document.body.classList.remove("opacity-0");
});