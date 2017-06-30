//Write a JS function that checks if a given string, starts with a given substring.
//The input comes as array of strings. There will always be only 2 strings of input.
//The first string will represent the main one. The second one will represent the substring.
//The output is either “true” or “false” based on the result of the check.
//The comparison is case-sensitive!



function checkStringStartsWithGivenSubstring([string, substring]){

    if(string.substring(0, substring.length) == substring){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkStringStartsWithGivenSubstring(['How have you been?','how']));
console.log(checkStringStartsWithGivenSubstring(['The quick brown fox…','The quick brown fox…']));
console.log(checkStringStartsWithGivenSubstring(['Marketing Fundamentals, starting 19/10/2016','Marketing Fundamentals, sta']));

