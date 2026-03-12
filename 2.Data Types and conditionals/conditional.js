console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)
let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

console.log( true == 1 ); // true
console.log( false == 0 ); // true

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

console.log( 0 == false ); // true
console.log( '' == false ); // true

console.log( 0 === false ); // false, because the types are different

console.log( null === undefined ); // false

console.log( null == undefined ); // true


console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true


console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)


result = a || b;
console.log(result);
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false


if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

let hours = 12;
let isWeekend = true;

if (hours < 10 || hours > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}

console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)


let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder


true || console.log("not printed");
false || console.log("printed");



// /////////////// && Operator //////////

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

let hour2 = 12;
let minute = 30;

if (hour2 == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}

//if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0

console.log( 1 && 2 && null && 3 ); // null

console.log( 1 && 2 && 3 ); // 3, the last one


let x = 1;

(x > 0) && console.log( 'Greater than zero!' );

let y = 1;

(y > 0) && console.log( 'Greater than zero!' );


console.log( !true ); // false
console.log( !0 ); // true


console.log( !!"non-empty string" ); // true
console.log( !!null ); // false

console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false


let year =2015
 console.log('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) 
    console.log( 'You are right!' );


if (year == 2015) {
  console.log( "That's correct!" );
  console.log( "You're so smart!" );
}

if (0) { // 0 is falsy
  
}
if (1) { // 1 is truthy
  
}

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  
}

if (year == 2015) {
  console.log( 'You guessed it right!' );
} else {
  console.log( 'How can you be so wrong?' ); // any value except 2015
}

if (year < 2015) {
  console.log( 'Too early...' );
} else if (year > 2015) {
  console.log( 'Too late' );
} else {
  console.log( 'Exactly!' );
}

let accessAllowed;
let age = 22
console.log('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);



// Ternary Operator 
// let result = condition ? value1 : value2; 


accessAllowed = (age > 18) ? true : false;



accessAllowed = age > 18;


age = console.log('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );


if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

console.log(message);

let company ="Netscape"
console.log('Which company created JavaScript?', '');

(company == 'Netscape') ?
   console.log('Right!') : console.log('Wrong.');

   if ("0") {
  console.log( 'Hello' );
}


// syntax 


// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }


 a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
  case 4:
    console.log( 'Exactly!' );
  case 5:
    console.log( 'Too big' );
  default:
    console.log( "I don't know such values" );
}

 a = "1";
 b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}


 a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

let arg = "1"
switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console( 'Two' );
    break;

  case 3:
    console.log( 'Never executes!' );
    break;
  default:
    console.log( 'An unknown value' );
}