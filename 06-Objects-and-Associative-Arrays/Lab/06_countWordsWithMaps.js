//You are tasked to count the number of words in a text using a Map, any combination of letters, digits and _ (underscore)
//should be counted as a word. The words should be stored in a Map - the key being the word and the value being the amount of times the word is contained in the text.
//The matching should be case insensitive. Print the words in a sorted order.
//The input comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.
//The output should be printed on the console - print each word in the map in the format "'<word>' -> <count> times", each on a new line.


function countWordsWithMaps(input) {
    let wordCount = new Map();
    //create an array and put all string to lower case,
    // split them by everything that is different than A-Za-z0-9_ by using ^ and filter(remove the empty lines
    let words = input.join(`\n`).toLowerCase()
        .split(/[^A-Za-z0-9_]+/g).filter(t => t != '');


    for (let w of words) {
        //if there is a record with key  w in word count, add one to its value, else set a new record for w and assign value of 1
        wordCount.has(w) ? wordCount.set(w, wordCount.get(w) + 1) : wordCount.set(w, 1);
    }

    //we create an array from the wordCount keys and sort them alphabetically
    let allWords = Array.from(wordCount.keys()).sort();

    //for each key from the sorted array alloWords, get the value from the wordCount Map() and print it
    allWords.forEach(w =>
        console.log(`'${w}' -> ${wordCount.get(w)} times`));
}

countWordsWithMaps(['Far too slow, you\'re far too slow.']);
countWordsWithMaps(['JS devs use Node.js for server-side JS.-- JS for devs.']);
countWordsWithMaps(['JS and Node.js', 'JS again and again', 'Oh, JS?']);