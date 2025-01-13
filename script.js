const display = document.getElementById("display");
let operation = "";
let value = 0;
let x = "";



//button functionality

const clear = document.getElementById("clear").addEventListener("click", function()
{


    display.innerText = "";
    

})

const zero = document.getElementById("zero").addEventListener("click", function()
{
   
    
    display.innerText = display.innerText +0;
    
    

})

const one = document.getElementById("one").addEventListener("click", function()
{

    
    display.innerText = display.innerText +1;
    

})


const two = document.getElementById("two").addEventListener("click", function()
{

    display.innerText = display.innerText +2;

})

const three = document.getElementById("three").addEventListener("click", function()
{

    display.innerText = display.innerText +3;

})

const four = document.getElementById("four").addEventListener("click", function()
{

    display.innerText = display.innerText +4;

})

const five = document.getElementById("five").addEventListener("click", function()
{

    display.innerText = display.innerText +5;

})

const six = document.getElementById("six").addEventListener("click", function()
{

    display.innerText = display.innerText +6;

})

const seven = document.getElementById("seven").addEventListener("click", function()
{

    display.innerText = display.innerText +7;

})

const eight = document.getElementById("eight").addEventListener("click", function()
{

    display.innerText = display.innerText +8;

})

const nine = document.getElementById("nine").addEventListener("click", function()
{

    display.innerText = display.innerText +9;

})

//backspace functionality

const backspace = document.getElementById("backspace").addEventListener("click", function()
{

    display.innerText = display.innerText.slice(0, -1);

})

const add = document.getElementById("add").addEventListener("click", function()
{
    value = parseFloat(display.innerText);
    display.innerText = "";
    operation = "+"
    

})

const sub = document.getElementById("sub").addEventListener("click", function()
{

    value = parseFloat(display.innerText);
    display.innerText = "";
    operation = "-"
    

})

const multiply = document.getElementById("multiply").addEventListener("click", function()
{

    value = parseFloat(display.innerText);
    display.innerText = "";
    operation = "*"
    

})

const div = document.getElementById("div").addEventListener("click", function()
{

    value = parseFloat(display.innerText);
    display.innerText = "";
    operation = "/"
    

})


const dot = document.getElementById("dot").addEventListener("click", function()
{

    if (!display.innerText.includes('.')) {
        display.innerText += ".";
    }else{
        false;
    }
    
    

})


const equal = document.getElementById("equal").addEventListener("click", function() {
    let currentValue = parseFloat(display.innerText);
    let output;

    if (operation === "+") {
        output = value + currentValue;
    } else if (operation === "-") {
        output = value - currentValue;
    } else if (operation === "/") {
        if (currentValue === 0) {
            
            display.innerText = "Cannot divide by zero";
            return;
        } else {
            output = value / currentValue;
        }
    } else if (operation === "*") {
        output = value * currentValue;
    }

    
    if (output !== undefined) {
        display.innerText = output.toFixed(1);
    }
});







