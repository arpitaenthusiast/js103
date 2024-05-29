// console.log("hello world ");

// // "abc".toUpperCase();


// function myfunction() {
//     console.log("hello bharat")
//     console.log("We are indian")
// }

// myfunction();


// function myfunction(msg) {
//     console.log(msg);
// }
// myfunction("jai hind");


//function --> 2 numbers , sum 
// function sum(x, y) {
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }



// function sum(x, y) {
//     s = x + y;
//     console.log(x);
//     return s;
//     console.log("after return");
// }
// let val = sum(3, 4);
// console.log(val);




//arrow functions 
//sum function

function sum(a, b) {
    return a + b;
}

// const arrowSum = (a, b) => {
//     console.log(a + b);
// };




function color(red, green) {
    return red + green;
}

const arrowSum = (red, green) => {
    console.log(red + green);
};



function countvowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "1" || char === "2" || char === "3" || char === "4" || char === "5") {
            count++;
        }
        console.log(count);
    }
    return count;
}


// forEach loop in array
// let arr = [1, 2, 3, 4];
// arr.forEach(function printval(val) {
//     console.log(val);
// });




let arr = ["kolkata", "mumbai", "pune"];
arr.forEach((val) => {
    console.log(val);
});


let num = [2, 3, 4, 5, 2];
num.forEach((num) => {
    console.log(num ** 2);
});