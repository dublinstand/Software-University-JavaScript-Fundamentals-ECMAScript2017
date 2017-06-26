//Write a JS function that calculates and prints the sum of the first and the last elements in an array.
//The input comes as array of string elements holding numbers.
//The output is the return value of your function.


function sumFirstLast(input){
    input = input.map(Number);

    return input[0] + input[input.length - 1];
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
