//Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal.
//
//The input comes as array of strings. Each element represents a string of numbers, with spaces between them.
//Parse it into a matrix of numbers, so you can work with it. The input numbers will always be positive.
//The output is a Boolean result indicating whether the matrix is magical or not.


function magicMatrices(matrixInput) {
    let matrix = matrixInput.map(
            row => row.split(' ').map(Number)
    );


    //sum of the first row
    let sum = matrix[0].reduce((a, b) => (a + b));


    //if the matrix is not 2x2 we check the columns as well
    if (matrixInput.length != 2) {
        for (let row = 1; row < matrix.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));

            if (sum != sumRow) {
                return false;
            }
        }

        for (let col = 0; col < matrix[0].length; col++) {
            let sumCol = 0;

            for (let row = 0; row < matrix.length; row++) {
                sumCol += matrix[row][col];
            }

            if (sumCol != sum) {
                return false;
            }
        }

        return true;
    }
    else {
        for (let row = 1; row <= matrix.length; row++) {
            let sumRow = matrix[row].reduce((a, b) => (a + b));

            if (sum != sumRow) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}

console.log(magicMatrices(['4 5 6', '6 5 4', '5 5 5']));
console.log(magicMatrices(['11 32 45', '21 0 1', '21 1 1']));
console.log(magicMatrices(['1 0 0', '0 0 1', '0 1 0']));