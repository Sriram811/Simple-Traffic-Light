var box1= document.getElementById("num1")
var box2= document.getElementById("num2")
var result= document.getElementById("result")


function resultfunctionadd()
    {
     var box1value= Number(box1.value)
     var box2value= Number(box2.value)

     var total = box1value+box2value

     result.textContent=total
    }

    function resultfunctionsub()
    {
     var box1value= Number(box1.value)
     var box2value= Number(box2.value)

     var total = box1value-box2value

     result.textContent=total
    }

    function resultfunctionmulti()
    {
     var box1value= Number(box1.value)
     var box2value= Number(box2.value)

     var total = box1value*box2value

     result.textContent=total
    }

    function resultfunctiondiv()
    {
     var box1value= Number(box1.value)
     var box2value= Number(box2.value)

     var total = box1value/box2value

     result.textContent=total
    }


function resultfunctiononee() {
    var box11value = box1.value
    box1.value = onevalue.value
}



/*function resultfunctiononee() {
    var box12value = box2.value
    box2.value = box12value + '1'
}
function resultfunctiontwoo() {
    var box12value = box2.value
    box2.value = box12value + '2'
}
function resultfunctionthree() {
    var box12value = box2.value
    box2.value = box12value + '3'
}
function resultfunctionfour() {
    var box12value = box2.value
    box2.value = box12value + '4'
}
function resultfunctionfive() {
    var box12value = box2.value
    box2.value = box12value + '5'
}
function resultfunctionsix() {
    var box12value = box2.value
    box2.value = box12value + '6'
}
function resultfunctionseven() {
    var box12value = box2.value
    box2.value = box12value + '7'
}
function resultfunctioneight() {
    var box12value = box2.value
    box2.value = box12value + '8'
}
function resultfunctionnine() {
    var box12value = box2.value
    box2.value = box12value + '9'
}
function resultfunctionzero() {
    var box12value = box2.value
    box2.value = box12value + '0'
}
*/