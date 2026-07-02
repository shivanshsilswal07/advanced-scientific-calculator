let expression = "";
let memory = 0;

function updateDisplay() {

document.getElementById("expression").innerText =
expression || "0";

}

function append(value) {

expression += value;
updateDisplay();

}

function clearDisplay() {

expression = "";
document.getElementById("result").innerText = "0";
updateDisplay();

}

function backspace() {

expression = expression.slice(0,-1);
updateDisplay();

}

function calculate() {

try {

let result = eval(expression);

document.getElementById("result").innerText = result;

document
.getElementById("history")
.innerHTML += `<li>${expression} = ${result}</li>`;

showCelebration();

} catch {

document
.getElementById("result")
.innerText = "Error";

}

}

function showCelebration() {

let box =
document.getElementById("celebration");

box.style.display = "block";

setTimeout(() => {

box.style.display = "none";

},1200);

}

function memoryAdd() {

memory += Number(
document.getElementById("result").innerText
);

}

function memorySubtract() {

memory -= Number(
document.getElementById("result").innerText
);

}

function memoryRecall() {

expression += memory;
updateDisplay();

}

function memoryClear() {

memory = 0;

}

function copyResult() {

navigator.clipboard.writeText(
document.getElementById("result").innerText
);

alert("Result Copied!");

}

function toggleTheme() {

document.body.classList.toggle("dark");

}

document.addEventListener("keydown",(e)=>{

if("0123456789+-*/.%()".includes(e.key))
append(e.key);

if(e.key==="Enter")
calculate();

if(e.key==="Backspace")
backspace();

if(e.key==="Escape")
clearDisplay();

});