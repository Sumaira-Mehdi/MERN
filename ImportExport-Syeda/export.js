//conversion from celcius to farenheight
let cel;
let faren;
function c2f(cel){
    
    let faren;
     faren = (cel * 1.8) + 32;
    console.log(faren);
}


//conversion from farenheight to celcius
function f2c(faren){
    let cel= (faren - 32)* 5/9;
    console.log(cel);

}
export{c2f};
export{f2c};