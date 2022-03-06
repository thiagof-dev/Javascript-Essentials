//ES6+ Javascript Essentials

// let and const - Block scope
//Let and const have a block scope, which means that they will not be accessible outside that block scope. Take a look at the example below.
const x = 10
{
    //Here x = 2
    let x = 2
}
// Here x = 10

//Arrow Functions: () => 
//ES6 provides us with syntactic sugar, which makes writing functions very easy and awesome. you can use arrow functions syntax as you see below:

const myFunc = () => {
    const x = 10
    return x
}
//You can also write an arrow function without the return keyword and the curly braces ({}), but that’s only if your function contains only one statement.
//In addition to that, you can write the function without the parentheses if it has only one parameter.
//take a look at the example below:

//The same function, without the argument parantheses
const doubler = item => item * 2

//Another extra feature for Arrow functions is that you can set default parameters, So if you didn’t give a value for your parameter,
//a default value will be added for that parameter. take a look at the example below:

const greeting = (name = "Steve") => "Hello " + name
console.log(greeting('Jhon'))
console.log(greeting())

//ES6 Classes:
//A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class,
//and the properties are assigned inside a constructor() method. So we use the Class keyword to create a class and also add a constructor method to it.

//A simple class definition 
class Car {
    constructor(brand){
        this.carname = brand
    }
}
//Create an object
const myCar = newCar('BMW')

//Create Strings using Template Literals:

//One of the important ES6 features is the ability to create Strings using Template Literals, which makes writing complex strings easier than it was.
//It allows you to create multi-line strings and to use string interpolation features to create strings. Take a look at the example below:
const firstName = 'Steve'
const greetingMessage = `Hello, my name is ${firstName}`

//Destructuring Assignment:

//Destructuring Assignment is another ES6 feature which allows you to assign values taken from objects or Arrays to variables.
const {name, age} = user
// console.log(name)

//Destructuring Assignment with Arrays:
const [a, b] = [1,2,3,4,5,6]
console.log(a, b)


//Promise:

//A Promise in Javascript is like it sounds, it’s used to make a Promise to do something asynchronously. 
//When the promise is completed, that means you did that promise or maybe you failed.
//A Promise takes a function that has two parameters: “resolve” which means that the promise is completed successfully,
// and “reject” which means that the promise failed. Take a look at the example below :

const myPromisse = new Promise

//Handle a Fulfilled Promise with then:
//The then (.then) method is executed immediately after your promise is fulfilled with resolve . Take a look at the example below :
myPromisse.then(result => {
    // do something with the result
})

//Handle a Rejected Promise with Catch:
//catch is the method used, when your promise has been rejected. It is executed immediately after a promise's reject method is called. Take a look at the example below :
myPromisse.catch(error =>{
    //do something with the error
})








