//Write a JS function that prints all the symbols of a string, each on a new line.
//The input comes as array of one string element.
//The output is printed on the console, each letter on a new line.


function printLetters(input){
    let string = input.split('');

    for (let i = 0; i < string.length; i++) {
        console.log(`str[${i}] -> ${string[i]}`)
    }
}

printLetters('Hello, World!')
