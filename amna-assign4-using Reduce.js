// Assignment 4
// Write code to find maximum value from an array containing numbers (first using for loop and then using reduce)

//Using Reduce() method

const arr = new Array(10,20,30,40,50);

const sumOfArray = (accumulator, value) => {
        return accumulator + value;
};

console.log("Sum of an array using reduce() method is : ", arr.reduce(sumOfArray));

console.log();

 // using for loop
let sum = arr => {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
return  sum
} 

console.log("Sum of an array using for loop is :", sum([10,20,30,40,50]));
    

