//Write a JS program that extracts all words from a passed in string and converts them to upper case.
// The extracted words in upper case must be printed back on a single line concatenated by “, “.
//The input comes as an array of strings with only one entry - the text from which to extract and convert the words.
//The output should be a single line containing the converted string

function wordsUppercase([input]){
    let strUpper = input.toUpperCase();
    let words = removeCharacters();
    //we remove each property in the array that is empty
    words = words.filter(w => w != '');
    return words.join(', ');

    //here we split by everything that is not a letter and this we have all words in an array
    function removeCharacters() {return strUpper.split(/\W+/);}
}

console.log(wordsUppercase(['Hi, how are you?']));