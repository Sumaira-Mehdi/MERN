// Take the maximum number fom an array.
var maxNum = () => {
    let numbers = [10,30,100,20,90];
    let max = Math.max(...numbers);
    console.log(max); 
        for( let i = numbers.length -1 ; i >= 0 ; i--){
            console.log(numbers[i]);
        }

}

maxNum()

    //Take the maximum number from an array using reduce function.
    var numbersArr = [10, 30, 100 , 20, 90];
        let reduceNumber = () =>{
        let reduceTheArr = numbersArr.reduce((prev, curr) => {
             return Math.max(prev, curr)
        }); 
    console.log(`maximum value using reduce is ${reduceTheArr}`);
    
}
reduceNumber()
 