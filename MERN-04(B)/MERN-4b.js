var maxNum = () => {
    let numbers = [10,30,100,20,90];
    let max = Math.max(...numbers);
    console.log(max); 
        for( let i = numbers.length -1 ; i >= 0 ; i--){
            console.log(numbers[i]);
        }

}

maxNum()
 