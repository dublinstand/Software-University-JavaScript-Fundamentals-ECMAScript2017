//Write a JS function that checks if a given string, ends with a given substring.
//The input comes as array of strings. There will always be only 2 strings of input.
//The first string will represent the main one. The second one will represent the substring.
//The output is either “true” or “false” based on the result of the check.
//The comparison is case-sensitive!


function checkStringEndsWithGivenSubstring([sentence, ending]){

    if(sentence.substring(sentence.length - ending.length) == ending){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkStringEndsWithGivenSubstring(['This sentence ends with fun?', 'fun?']));
console.log(checkStringEndsWithGivenSubstring(['This is Houston, we have…', 'We have…']));
console.log(checkStringEndsWithGivenSubstring(['The new iPhone has no headphones jack.', 'o headphones jack.']));
