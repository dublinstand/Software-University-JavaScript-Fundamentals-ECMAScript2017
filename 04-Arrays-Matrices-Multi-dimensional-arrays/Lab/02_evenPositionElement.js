//Write a JS function that finds the elements at even positions in an array.
//The input comes as array of string elements holding numbers.
//The output is the return value of your function. Collect all elements in a string, separated by space.



function evenPositionElement(input){
    input = input.map(Number);
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if(i % 2 == 0){
            result.push(input[i]);
        }
    }

    return result.join(' ');
}

console.log(evenPositionElement(['20', '30', '40']));
console.log(evenPositionElement(['5', '10']));
