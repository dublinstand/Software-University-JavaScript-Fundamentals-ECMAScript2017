//Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
//The input comes as array of string elements holding numbers.
//The output is printed on the console, each element on a new line.


function negativePositiveNumbers(input){
    input = input.map(Number);

    let result = [];

    for (let i of input){
        if (i < 0){
            result.unshift(i);
        }
        else {
            result.push(i)
        }
    }

    return result.join('\n');
}

console.log(negativePositiveNumbers(['7', '-2', '8', '9']));
console.log(negativePositiveNumbers(['3', '-2', '0', '-1']));