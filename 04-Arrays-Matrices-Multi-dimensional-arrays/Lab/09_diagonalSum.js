//A square matrix of numbers comes as an array of strings, each string holding numbers (space separated).
// Write a JS function that finds the sum at the main and at the secondary diagonals.
//The input comes as array of string elements. Each element contains the elements from one row of a matrix, separated by space.
//The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.


function diagonalSum(matrixRows){

    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainDiagonalSum += matrix[row][row];
        secondDiagonalSum += matrix[row][matrix.length - 1 - row];
    }

    console.log(mainDiagonalSum + ' ' + secondDiagonalSum);
}

diagonalSum(['20 40', '10 60']);
