"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
calculatorOutput.value = multiply(10, 5);

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

// addition =

/*
const calculatorInputs = document.querySelectorAll(".calculator__input");
calculatorInputs.forEach(function(calculatorInput) {
  calculatorInput.addEventListener("click", function() {
    calculatorOutput.value = calculatorInput.innerHTML;
  });
});
*/
