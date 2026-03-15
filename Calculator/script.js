let expressionDisplay = document.getElementById("expression");
let resultDisplay = document.getElementById("result");

let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

button.addEventListener("click", () => {

let value = button.innerText;

if(value === "C"){
expression="";
expressionDisplay.innerText="";
resultDisplay.innerText="0";
}

else if(value === "="){

try{
let result = eval(expression);
resultDisplay.innerText=result;
}
catch{
resultDisplay.innerText="Error";
}

}

else{
expression += value;
expressionDisplay.innerText = expression;
}

});

});