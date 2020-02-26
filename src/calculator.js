"use strict";

/*const calculatorOutput = document.querySelector(".calculator__output");
calculatorOutput.value = multiply(10, 5);*/

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");

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

const numberOne = Number(calculatorInputs[4].innerText);
const numberTwo = Number(calculatorInputs[6].innerText);

function handleClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);
  console.log("clicked");
}
calculatorResult.addEventListener("click", handleClick);

function remove() {
  calculatorOutput.value = "";
  console.log("clicked");
}
calculatorClear.addEventListener("click", remove);

/*
const calculatorInputs = document.querySelectorAll(".calculator__input");
calculatorInputs.forEach(function(calculatorInput) {
  calculatorInput.addEventListener("click", function() {
    calculatorOutput.value = calculatorInput.innerHTML;
  });
});
*/
