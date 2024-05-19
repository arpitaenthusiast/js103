console.log("Hello world");

//Artimatic operators
let a = 5;
let b = 1;

console.log("a + b = ", a + b);
``
console.log("a*b", a * b);
console.log(a - b);


//unary operator
let c = 5;
let d = 2;

console.log("c = ", c, " & d = ", d);

c++;
console.log("c=", c);

//Asignment Operators
let e = 5;
let f = 2;
e += 4; //e= e+4
console.log("e=", e);


let A = 4;
let B = 2;
A -= 2;
console.log("A =", A);


//comparison operators 
let x = 5;
let y = 2;
console.log("5==2", x == y);

//let l = 4
//let k = 4
//console.log("4==4", l == k);


//Logical operators

let l = 6;
let k = 5;
let cond1 = l < k;
let cond2 = l == k;
//console.log("cond1 && cond2", cond1 && cond2);
console.log("!(6<5)=", !(l < k)); //false



//conditional statement

let mode = "light";
let color;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}

console.log(color);

//let age = 24;
//if (age > 18) {
//  console.log(" you can vote");
//}