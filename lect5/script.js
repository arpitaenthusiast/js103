// console.log("hello world ");

// // "abc".toUpperCase();


// function myfunction() {
//     console.log("hello bharat")
//     console.log("We are indian")
// }

// myfunction();


function myfunction(msg) {
    console.log(msg);
}
myfunction("jai hind");


//function --> 2 numbers , sum 
// function sum(x, y) {
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }



function sum(x, y) {
    s = x + y;
    console.log(x);
    return s;
    console.log("after return");
}
let val = sum(3, 4);
console.log(val);