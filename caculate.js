const display=document.getElementById("display")
const equal=document.getElementById("equals")
const text=document.getElementById("text")

var X=document.getElementById("X")
X.innerHTML="X"
let flag=0

function input1(input){
    display.value +=input
}

function cleardisplay(){
    display.value=""
    text.style.display="none"
}


function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
    }
