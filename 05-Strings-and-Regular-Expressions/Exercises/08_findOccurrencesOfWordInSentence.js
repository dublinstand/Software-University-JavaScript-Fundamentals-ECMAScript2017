//Write a JS function that finds, how many times a given word, is used in a given sentence.
// Note that letter case does not matter – it is case-insensitive.
//The input comes as array of strings. The input will consist of exactly 2 strings.
// The first one will be the sentence, and the second one – the word.
//The output is a single number indicating the amount of times the sentence contains the word.



function findOccurrencesOfWordInSentence([text, word]){
    let occurrences = 0;
    let pattern = `\\b${word}\\b`;

    let matcher = new RegExp(pattern, 'gi');

    let match = matcher.exec(text);

    while (match){
        occurrences++;
        match = matcher.exec(text);
    }

    console.log(occurrences);
}

findOccurrencesOfWordInSentence(['The waterfall was so high, that the child couldn’t see its peak.','the']);
findOccurrencesOfWordInSentence(['How do you plan on achieving that? How? How can you even think of that?','how']);
findOccurrencesOfWordInSentence(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there']);
