//Write a JS function that capitalizes the given words. You need to make every word’s first letter –
//uppercase and all other letters – lowercase.
//The input comes as a single string, containing words, separated by a space.
//The output is the same string, however with all of its words capitalized.
//Note: The words can contain any ASCII character. You need to affect only the letters.


function capitalizeWords(input) {
    let sentence = input.split(" ");
    let updatedSentence = [];

    for (let word of sentence) {
        word = Array.from(word);
        let newWord = "";

        for (let i = 0; i < word.length; i++) {
            if (i == 0) {
                newWord += word[i].toUpperCase();
            }
            else {
                newWord += word[i].toLowerCase();
            }
        }

        updatedSentence.push(newWord);
    }

    console.log(updatedSentence.join(" "));
}

capitalizeWords("Capitalize these words");
capitalizeWords("Was that Easy? tRY thIs onE for SiZe!");