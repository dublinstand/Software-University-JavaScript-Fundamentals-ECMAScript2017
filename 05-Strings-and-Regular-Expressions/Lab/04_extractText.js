//You will be given a text as a string. Write a JS function that extracts and prints only the text that’s surrounded by parentheses.
//The input comes as array of a single string element.
//The output is printed on the console on a single line, in the form of a comma-separated list.



function extractText([input]){
    let arr = [];

    let leftBracket = -1;
    while(true){

        //get the index of the left bracket (
        leftBracket = input.indexOf('(', leftBracket + 1);

        //if leftBracket is -1, break -- this means that there is no leftBracket
        if(leftBracket == -1){
            break;
        }

        let rightBracket = input.indexOf(')', leftBracket + 1);

        if(rightBracket == -1){
            break;
        }

        let str = input.substring(leftBracket, rightBracket);
        arr.push(str);
    }

    console.log(arr.join(", "));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);