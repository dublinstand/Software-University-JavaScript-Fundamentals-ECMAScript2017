//Write a JS function that reverses a series of strings and prints them concatenated from last to first.
//The input comes as array of strings.
//The output is printed on the console. Print all strings concatenated on a single line, starting from the last input string, going to the first.
// Reverse each individual string’s letters.


function concatenateReversed(arr){
    //create a string from the array
    let allStrings = arr.join('');

    //create an array from the string, it returns an array of strings for each character
    let chars = Array.from(allStrings);

    //reverse the array (it can be used only for array)
    let revChars = chars.reverse();

    //join the revChars array by empty string and return a string again
    let revStr = revChars.join('');

    return revStr;
}

console.log(concatenateReversed(['I', 'am', 'student']));
