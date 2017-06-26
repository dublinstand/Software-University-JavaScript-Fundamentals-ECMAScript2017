//You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array, doubled and in reverse order.
//The input comes as array of string elements holding numbers.
//The output is printed on the console on a single line, separated by space.


function processOddNumbers(arr){
    arr = arr.map(Number);

    let solution = [];

    for (let i = 0; i < arr.length; i++) {
        if( i % 2 != 0){
            solution.push(arr[i]);
        }
    }

    return solution.map(x => x * 2).reverse().join(" ");
}

console.log(processOddNumbers(['10', '15', '20', '25']));
console.log(processOddNumbers(['3', '0', '10', '4', '7', '3']));