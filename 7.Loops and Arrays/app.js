const cats=["Leopard","Serval","Jaguar","Tiger"];
for (const cat of cats){
    console.log(cat);
}

function toUpper(string){
    return string.toUpperCase();
}
const cats1=["Leopard","Serval","Jaguar","Tiger"];
const upperCats=cats.map(toUpper);
console.log(upperCats);



function lCat(cat){
    return cat.startsWith("L");
}

const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered=cats2.filter(lCat);
console.log(filtered)


const cats3 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered1 = cats3.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]


// for (initializer; condition; final-expression) {
//   // code to run
// }