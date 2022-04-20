// Assignment 4
//  Write code to sum an array containing numbers
let findSum = arr => {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){     
        sum += arr[i];    
    }
return sum
}
console.log("Sum of an array is :", findSum([10,20,30,40,50]));


// Write code to find maximum value from an array containing numbers (first using for loop and then using reduce)

let findMax = arr => {
    let max = Math.max(...arr);
    for(let i = 4; i >= 0; i--){
        console.log(arr[i]); 
    }
return  max
} 
console.log("looping an array in Reverse:")
console.log("Maximum munber in array is :", findMax([10,20,30,40,50]));
    
