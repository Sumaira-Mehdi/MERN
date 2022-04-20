
//max number in array
let largeNumber = () => {
    
    let greater_number = Math.max(...numbers);
    console.log(greater_number + " is the Greatest number")
    for(i = greater_number; i > 0; i--){
        console.log(i)
    }
}

// max number using reduce
var numbers = [5, 10, 3 , 130, 200];
let reduce_number = () =>{
    let reduce_arr = numbers.reduce((prev, curr) => {
          return Math.max(prev, curr)
    }); 
    console.log(`maximum value using reduce is ${reduce_arr}`);
    
}
reduce_number()

//sum of array
largeNumber()
var arr =[2, 20, 40, 100];
var res = 0;
for (i=0; i < arr.length; i++) {
     res += arr[i]
}
console.log("The sum of array is " + res);