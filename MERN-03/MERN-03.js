// MERN Assignment no 3.
/* Write a function that takes in two parameters,
1 string and 1 number and print the string the number of times mentioned in the number param.*/

let printString = (num,string) => {
    for(let i = 1;i <= num; i++){
        setTimeout(() => {console.log(string)}, i * 1000);
    }
}

printString(6,"Sumaira Mehdi")

