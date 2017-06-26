//Write a JS program that prints a DNA helix with length, specified by the user. The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. See the examples for more information.
//    The input comes as an array with a single string element that must be parsed to a number. It represents the length of the required helix.
//    The output is the completed structure, printed on the console.
//


function dnaHelix(input) {
    let sequence = 'ATCGTTAGGG';
    let rows = Number(input);
    //variable to check on which index in sequence are we at
    let currentIndex = 0;

    for (let i = 0; i < rows; i++) {
        //we can use modulus division to iterate over the same row, by dividing the number we want to iterate
        //a variable to see at which row are we using the modulus
        let currentRow = i % 4;

        //we want the index of the string - currentIndex to be in the range of indexes for the variable sequence
        //this is done again using modulus with sequence.length - this will return us to the 0 element if we exceed it
        if (currentRow === 0) {
            console.log(`**${sequence[currentIndex++ % sequence.length]}${sequence[currentIndex++ % sequence.length]}**`);
        }
        else if (currentRow === 1 || currentRow === 3) {
            console.log(`*${sequence[currentIndex++ % sequence.length]}--${sequence[currentIndex++ % sequence.length]}*`);
        }
        else {
            console.log(`${sequence[currentIndex++ % sequence.length]}----${sequence[currentIndex++ % sequence.length]}`);
        }
    }
}

dnaHelix(4);
dnaHelix(10);