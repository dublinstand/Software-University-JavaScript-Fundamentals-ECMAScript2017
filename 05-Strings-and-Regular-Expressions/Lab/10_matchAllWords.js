//Write a JS function that matches all words in a text, a word is anything that consists of letters, numbers or underscores (_).
//The input comes as an array of string consisting of a single entry - the text from which to extract the words.
//The output should be printed on the console and should consist of all words concatenated with a “|“(pipe), check the examples bellow to better understand the format.

function matchAllWords(input){
    let regExp = /[\s;',.\/`()]+/;

    let arr = input[0].split(regExp);
    arr = arr.join("|");

    console.log(arr);
}

matchAllWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);
matchAllWords(['_(Underscores) are also word characters']);