function add7(num1){
    return num1+7;
}

console.log(add7(3));

let multiply=(num1,num2)=>{
    return num1*num2;
}

console.log(multiply(3,2));


let captialize=function(str){
    return str[0].toUpperCase()+str.slice(1).toLowerCase();
}
console.log(captialize("hello"));
console.log(captialize("ABCD"));
console.log(captialize("aBCD"));


function lastLetter(str){
    return str.length-1;
}
console.log(lastLetter("abcd"));

(function(){
    console.log("Hey I am anonymous function")
})