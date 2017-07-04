//Write a JS function that extracts all UNIQUE words from a valid text, and stores them.
//Ensure that there are NO duplicates in the stored words.
//Once you find a word, there is no need for you to store it again if you meet it again in the text.
//You also need to make all characters from the words you’ve stored – lowercase.
//The input comes as array of strings. Each element will represent a sentence.
//The output is all of the unique words you’ve found, each with each, separated by a coma and a space, printed in the order in which you’ve found them.

function extractUniqueWords(input){
    //pattern for words
    let wordPattern = /\b[a-zA-z0-9_]+\b/g;
    let uniqueWords = new Set();

    for (let sentence of input){
        //get all matches per sentence that match words
        let matches = sentence.match(wordPattern);

        //for each matching add to the Set (it is only added if it is unique) the word to lower case
        matches.forEach(w => uniqueWords.add(w.toLowerCase()));
    }

    //create an array of the values in the Set and join
    console.log([...uniqueWords.values()].join(", "));
}

extractUniqueWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']);
