//Write a JS function that counts how many times a specific letter occurs in a given string.
//The input comes as array of string elements. The first element is the string to check and the second element is the letter to count.
//The output should be returned as a result of your function.


function letterOccurrencesInString([string, letter]){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == letter){
            count++;
        }
    }
    console.log(count);
    return count;
}

letterOccurrencesInString(['hello', 'l']);
letterOccurrencesInString(['panther', 'n']);