/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */
const MY_NAME= "Julian"

function greet (MY_NAME){
    return `Hello ${MY_NAME}!`
}

/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */

let age= 19;

function loginValidation(age){

    if(age>= 18){
        return "Welcome!";
    }else{
        return "Sorry, not allowed."
    }
}
/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */

 let numberA=3;
 let numberB=5;

 function minNumber (numberA, numberB){

    if (numberA < numberB){
    return numberA;
 }else{
     return numberB;
 }
}

/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */

function randomNumber(){

    return Math.floor(Math.random() *10) +1

}
/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */

let  numberC = 10;

function getOppositeNumber(numberC){

return numberC -numberC *2
}
