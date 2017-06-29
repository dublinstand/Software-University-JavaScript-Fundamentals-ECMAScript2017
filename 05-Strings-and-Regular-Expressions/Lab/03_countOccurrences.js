//Write a JS function that counts how many times a string occurs in a given text. Overlapping strings are allowed.
//The input comes as array of two strings. The first element is the target string and the second element is the text in which to search for occurrences.                                                                                                                                      The output should be a number, printed on the console.

function countOccurrences([word, sentence]){
    let count = 0;
    let stringIndex = -1;

    while(true){
        stringIndex = sentence.indexOf(word, stringIndex + 1)

        if(stringIndex != -1){
            count ++;
        }
        else{
            break;
        }
    }

    return count;
}

console.log(countOccurrences(['the', 'The quick brown fox jumps over the lay dog.']));
console.log(countOccurrences(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']));
