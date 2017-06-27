//Write a JS function that finds the biggest element inside a matrix.
//The input comes as array of string elements. Each element contains the elements from one row of a matrix, separated by space.
//The output is the return value of your function. Find the biggest element and return it.


function biggestElement(matrixRows){

    //we'll have data as array of string - (['20 50 10', '8 33 145'])
    //we need to split it by space and map each value to Number
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number)
    );

    //our lowest digit
    let biggestNumber = Number.NEGATIVE_INFINITY;

    //two nested for cycles to cover the matrix, in the second for cycle we compare the value to the current max number
    matrix.forEach(
        r => r.forEach(
           c => biggestNumber = Math.max(biggestNumber, c)));

    return biggestNumber;
}

console.log(biggestElement(['20 50 10', '8 33 145']));
