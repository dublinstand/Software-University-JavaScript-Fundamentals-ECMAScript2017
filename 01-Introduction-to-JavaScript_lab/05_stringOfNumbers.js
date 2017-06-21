//Write a JS function that read a number n as input and prints all numbers from 1 to n, concatenated as a single string.
//    The input comes as array of one string element that needs to be parsed as a number.
//    The output should be returned as a result of your function.


function stringOfNumbers (digit){
    let string = '';

    for(let i = 0; i <= Number(digit); i++){
        string += i;
    }
    console.log(string);
    return string;
}

stringOfNumbers(12);