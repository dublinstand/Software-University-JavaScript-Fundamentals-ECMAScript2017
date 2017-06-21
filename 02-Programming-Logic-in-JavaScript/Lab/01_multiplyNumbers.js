//Write a JS function that calculates the product of two numbers.
//    The input comes as array of strings, where each element holds a number.
//    The output should be the returned as a result of your function.

function multiplyNumbers([num1, num2]){
    //because we multiply the string are auto converted to numbers
    let multiplied = num1 * num2;
    console.log(multiplied);
    return multiplied;
}

multiplyNumbers([23632.36, -12.3249]);
