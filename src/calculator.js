"use strict";

/*const calculatorOutput = document.querySelector(".calculator__output");
calculatorOutput.value = multiply(10, 5);*/

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

function addition(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

// let numberOne = Number(calculatorInputs[4].innerText);
// let numberTwo = Number(calculatorInputs[6].innerText);

let numberOne = 0;
let numberTwo = 0;

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);

  calculatorOutput.value = addition(numberOne, numberTwo);
  console.log(
    "handleResultClick",
    numberOne,
    numberTwo,
    calculatorOutput.value
  );
}
calculatorResult.addEventListener("click", handleResultClick);

function remove() {
  calculatorOutput.value = "";
  console.log("clicked");
}
calculatorClear.addEventListener("click", remove);

/*function addInputEventListener(calculatorInput) {
  console.log("addInputEventListener", calculatorInput.innerText);
}
calculatorInputs.forEach(addInputEventListener);*/

function addInputEventListener(calculatorInput) {
  function handleInput() {
    // calculatorOutput.value = calculatorOutput.value + calculatorInput.innerText;
    calculatorOutput.value += calculatorInput.innerText;
    console.log("handleInput", numberOne, numberTwo, calculatorOutput.value);
  }

  calculatorInput.addEventListener("click", handleInput);
}
calculatorInputs.forEach(addInputEventListener);
function addOperatorEventListener(calculatorOperators) {
  function handleOperatorClick() {
    remove();
    console.log(
      "handleOperatorClick",
      numberOne,
      numberTwo,
      calculatorOutput.value
    );
  }

  calculatorOperators.addEventListener("click", handleOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
