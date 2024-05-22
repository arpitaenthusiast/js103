//arrays
//collections of items

let marks = [97, 54, 33, 21, 11];
console.log(marks);
console.log(marks.length); //property

// let color = ["red", "yellow", "green", "Blue"];
// console.log(color);


//loops over  an array 

//for loop 
let color = ["red", "yellow", "green", "Blue"];
for (let idx = 0; idx < color.length; idx++) {
    console.log(color[idx]);
}

let cities = ["kolkata", " rampurhat", "nalhati", "delhi"];
for (let city of cities) {
    console.log(city.toUpperCase());
}