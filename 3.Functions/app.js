// function favoriteAnimal(animal){
//     return animal + " is my favorite animal!"

// }
// const message=favoriteAnimal('Goat');
// console.log(message);


// function showMessage(){
//     console.log(`Hello Everyone!`);
// }

// function name(parameter1, parameter2, ... parameterN) {
//  // body
// }

// showMessage();
// showMessage();


// //Local Variable

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// showMessage(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function


// Outer Variables
// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John
//  let userName="Jhon"

// function showMessage(){
//     userName="Box" //changed the outer variable
//     let message="Hello"  +userName;
//     console.log(message);
// }
// console.log(userName);
// showMessage();
// console.log(userName);//Bob, the value was modified by the function 


let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName ); // John, unchanged, the function did not access the outer variable


function showMessage(from, text) { // parameters: from, text
  console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage(from,text){
  from='*' + from + "*";//make "from" look nicer
  console.log(from + ':' + text);
}
let from="Ann";
showMessage(from, "Hello");//*Ann*: Hello



showMessage("Ann");//Corresponding value become undefined


function showMessage(from,text="no text given"){
  console.log(from + ": "+text);
}
showMessage("Ann");//Ann:no text given



function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

function showMessage(from,text){
  if(text=undefined){
    text="no text given";
  }
  console.log(from + ":" + text);
}
showMessage();


function name(parameters, delimited, by, comma) {
  /* code */
}




const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

function random(number) {
  return Math.floor(Math.random() * number);
}

function random(number){
  let result=Math.floor((Math.random()*number));
  return result;
}

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}


function sayHi(){
  console.log("Hello");
}

 sayHi=function (){
  console.log("Hello");
}


sayHi=function(){
  console.log("Hey");
}


function sayHi() {
  // ...
}

sayHi = function() {
  // ...
};//semicolon at the end 


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);



// ******** Arrow Functions ************ ///
// let func=(arg1,arg2,...,argN)=>expression 


// let func=function(arg1,arg2,argN){
//   return expression
// }
let sum=(a,b)=> a+ b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
console.log(sum(1,2));


let double=(n)=>n*2;
console.log(double(3));//6

 sayHi=()=>console.log("Hello");
 sayHi();

 let age=18;
 let welcome=(age<18)?()=>console.log("Hello!"):()=>console.log("Greetings!");


 welcome();


 sum=(a,b)=>{
  let result=a+b;
  return result;
 }
 console.log(sum(a,b));


 //************* Exercies ******* */

 