import { calculate } from "./math.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
//Durch "All" werden alle Inputs angesprochen.
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

//calculatorOutput.value = "Ready to calculate!";

// const numberOne = Number(calculatorInputs[4].innerText);
// const numberTwo = Number(calculatorInputs[6].innerText);

let numberOne = 0;
let numberTwo = 0;
let typeOperator = "";

//Result
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = calculate(numberOne, numberTwo, typeOperator);
  console.log("handleResultClick");
}
calculatorResult.addEventListener("click", handleResultClick);

//Clear
function remove() {
  calculatorOutput.value = "";
  console.log("clickedRemove");
}
calculatorClear.addEventListener("click", remove);

/*function addInputEventListener(calculatorInput) {
  console.log("addInputEventListener", calculatorInput.innerText);
}
calculatorInputs.forEach(addInputEventListener);*/

//Nummber Input
function addInputEventListener(calculatorInput) {
  function handleInput() {
    // calculatorOutput.value = calculatorOutput.value + calculatorInput.innerText;
    //+= Nummern können hintereinander geschrieben werden
    calculatorOutput.value += calculatorInput.innerText;
    console.log("handleInput");
  }

  calculatorInput.addEventListener("click", handleInput);
}
calculatorInputs.forEach(addInputEventListener);

//Operators Input
function addOperatorEventListener(calculatorOperator) {
  function handleOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    typeOperator = calculatorOperator.innerText;
    remove();
    console.log("handleOperatorClick");
  }
  calculatorOperator.addEventListener("click", handleOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
