//You are tasked to count the number of words in a text using an object as an associative array, any combination of letters, digits and _ (underscore)
//should be counted as a word. The words should be stored in the object as properties - the key being the word and the value being the amount of times the word
//is contained in the text.
//The input comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.
//The output should be printed on the console - the JSON representation of the object containing the words.


function countWordsInText(input){
    let words = input.split(/[^A-Za-z0-9]+/g).filter(t => t != '');

    let sumsCount = {};

    for (let word of words){

        if(sumsCount[word] == undefined){
            sumsCount[word] = 1;
        }
        else{
            sumsCount[word] += 1;
        }

        //you can use the same if else like:
        //wordsCount[w] ? wordsCount[w]++ : wordsCount[w] = 1;

    }


    return JSON.stringify(sumsCount);
}

console.log(countWordsInText('Far too slow, you\'re far too slow.'));
console.log(countWordsInText('JS devs use Node.js for server-side JS.-- JS for devs.'));