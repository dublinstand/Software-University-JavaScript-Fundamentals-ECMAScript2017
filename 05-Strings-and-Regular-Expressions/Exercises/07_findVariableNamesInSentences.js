//Write a JS function that finds all variable names in a given string.
//A variable name starts with an underscore (У_Ф) and contains only Capital and Non-Capital English Alphabet
//letters and digits. Extract only their names, without the underscore. Try to do this only with regular expressions.
//The input comes as an array of strings containing one element - the string on which you have to perform the matching.
//The output consists of all variable names, extracted and printed on a single line, each separated by a comma.


function findVariableNamesInSentences([input]){
    // \b - разсто€ние преди думата и след думата
    let regEx = /\b_([A-Za-z0-9]+)\b/g;

    let empty = [];
    let match;

    while ( match = regEx.exec(input)) {
        //take the second item which is the first group of matches. the first item is the whole match
        empty.push(match[1]);
    }
    return empty.join(',')
}
console.log(findVariableNamesInSentences(['Calculate the _area of the _perfectRectangle object.']));
console.log(findVariableNamesInSentences(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']));


