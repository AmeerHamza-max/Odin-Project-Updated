const string = "The revolution will not be televised.";
console.log(string);


//
/*errors

const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
*/

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);


//you get an error if you don't use the same quotation for one string

// const badQuotes = 'This is not allowed!";

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one='hello, ';
const two="how are you?";
const joined=`${one} ${two}`;
console.log(joined);
// const button=document.querySelector('button');
// function greet(){
//     const name=prompt('Please enter your name');
//     let text=document.querySelector('#greeting');
//     text.textContent=`Hi ${name} nice to meet you!`;

// }
// button.addEventListener('click',greet);

const greeting2='Hello';
const name2='Bob';
console.log(greeting2+ ", " + name2);//"Hello, Bob"

const greeting3="Howdy";
const name3="Ramesh";
console.log(`${greeting3}, ${name3}`);//Howdy, Ramesh


const song="Fight the Youth";
const score=9;
const highestScore=10;
const output=`I like the song ${song}. I gave it a score of ${(score/highestScore)*100}%`;
console.log(output);//"I like the song Fight the Youth. I gave it a score of 90%"

const newline=`One day you finally knew 
what you had to do, and began`;
console.log(newline);


const newline2="One day you finally knew\nwhag you had go do and began,";
console.log(newline);


//these are bad strings give you an error two same type of quotation in one statement

// const badQuotes = "She said "I think so!"";


const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;



const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


const coolBandName="Front";
const number=242;
console.log(coolBandName + number);//"Front 242"


const myString="123";
const myNum=Number(myString);
console.log(typeof myNum);//Number


const myNum2=123;
const myString2=String(myNum2);
console.log(typeof myString2);


let text="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length=text.length;
console.log(length);

let text1="HELLO WORLD";
console.log(text1.charAt(0));



console.log(text1.charCodeAt(0));


console.log(text1.codePointAt(0));

const name1="W3Schools";
console.log(name1.at(1));


let letter=name[2];
console.log(letter);


let text3="Hello";
let text4="World";
let text5=text3.concat(" ",text4);


text3="Hello"+ " "+ "World";
text4="Hello".concat(" ","World!");


let sl="Apple, Banana, Kiwi";
let part=text.slice(7,13);
console.log(part);

let part2=text.slice(7);
console.log(part2);

let part3=text.slice(-12);
console.log(part3);

let part4=text.slice(-12,-6);
console.log(part4);

let part5=text.substring(7,13);
console.log(part5);

let upper=text.toUpperCase();
console.log(upper);

let lower=text.toLowerCase();
console.log(lower);


text1="      Hello";
let trimmed=text1.trim();
console.log(trimmed);

text1="    hello    ";
let trimstart=text1.trimStart();
console.log(trimstart);
let trimEnd=text1.trimEnd();
console.log(trimEnd);


let repeated="hello World";
let result=text.repeat(2);

console.log(repeated);

let replace="Please visit Microsoft!";
let newText=text.replace("Microsoft","Google");

text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")