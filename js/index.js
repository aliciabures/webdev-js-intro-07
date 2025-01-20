// Prevent us from attempting to use variables
// that are not declared
"use strict"

/*Create some functions return a value and log that value to the console.
Create some functions that take in arguments. Try to write at one least one that returns a value and one that doesn't.
Create some functions that take in arguments, but also have default parameters.
Write any questions that may arise in this experiment and we can discuss them in class.*/


/*function add(num1, num2) {
    return num1 + num2;
}
let sum = add(2, 4);
console.log(sum); */

/*function add(a, b){
return a+b;
}
let sum = add(4, 4);
console.log(sum);*/


function greet(name = 'Guest') {
    console.log('Hello, ' + name + '!');
}

greet();         
greet("Dan");  
greet("Alicia");