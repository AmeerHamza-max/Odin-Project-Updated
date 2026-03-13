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