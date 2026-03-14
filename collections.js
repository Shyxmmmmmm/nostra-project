var a = document.getElementById("one")
var b = document.getElementById("two")
var c = document.getElementById("three")
var d = document.getElementById("four")
var e = document.getElementById("five")
var f=document.querySelectorAll(".six")
var g=document.querySelectorAll(".seven")





b.addEventListener("click",function(){
    a.style.display='none'
})

c.addEventListener("click",function(){
    d.classList.toggle("-translate-x-full")
})

e.addEventListener("click",function(){
    d.classList.add("-translate-x-full")
})

f.forEach(function(box){
    box.addEventListener("change",function(){
        var checked=[]

        f.forEach(function(box){
            if (box.checked){
                checked.push(box.value)
            }
        })

        g.forEach(function(box){
            var a1=box.dataset.occasion
            var a2=box.dataset.color
            var a3=box.dataset.arrivals

            if(
                checked.length===0 ||
                checked.includes(a1) ||
                checked.includes(a2) ||
                checked.includes(a3)
            ){
                box.style.display='block'
            }
            else{
                box.style.display='none'
            }
        })

    })
})
