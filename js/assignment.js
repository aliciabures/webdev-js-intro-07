"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

/* 
    Create a function called returnTheRemainder that returns the remainder of the division of two numbers. This function should take in two arguments and return a value.
    Create a function called checkIfEven. This function should return true or false based on the input.
    Create a function called getTheFourthElement. This function should take in the existing array, lostNumbers, and return the fourth element of the array.
    Create the remaining functionality to render your answers.
*/

function returnTheRemainder(a, b) {
    return a % b;
}
let nums = returnTheRemainder(5, 4);
console.log(nums);


function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("true");
    } 
    else {
        console.log("false");
    }
    
}
checkIfEven(47);

function getTheFourthElement(lostNumbers) {
    return lostNumbers[3]
}

function render() {
    // Call the created functions
returnTheRemainder();
checkIfEven();
getTheFourthElement();
}

submissionBtn.addEventListener("click", function () {
    render();
});
