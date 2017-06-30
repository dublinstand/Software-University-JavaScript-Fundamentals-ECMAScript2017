//Write a JS function that finds all variable names in a given string.
//A variable name starts with an underscore (У_Ф) and contains only Capital and Non-Capital English Alphabet
//letters and digits. Extract only their names, without the underscore. Try to do this only with regular expressions.
//The input comes as an array of strings containing one element - the string on which you have to perform the matching.
//The output consists of all variable names, extracted and printed on a single line, each separated by a comma.


function findVariableNamesInSentences([input]){
    let result = [];
    // \b - разсто€ние преди думата и след думата
    //because here we use a string we need to escape \ with another \
    let pattern = '\\b_([A-Za-z0-9]+)\\b';

    //we create a regular expression, that is global
    let regExp = RegExp(pattern, 'g');

    //we get the 0 item as the whole match and the next item (which is 1) as the first group ([A-Za-z0-9]+)
    let match = regExp.exec(input);

    //if a match is not found, match will be null and it won't be true
    while (match) {
        //take the second item which is the first group of matches. the first item is the whole match
        result.push(match[1]);

        //by using the same exec(input) we get the next match (if any) from the point where we have finished the previous time
        match = regExp.exec(input);
    }
    return result.join(', ')
}
console.log(findVariableNamesInSentences(['Calculate the _area of the _perfectRectangle object.']));
console.log(findVariableNamesInSentences(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']));


