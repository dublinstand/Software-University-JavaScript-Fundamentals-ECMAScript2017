//Write a JS function that checks if an input string is a palindrome.
//The input comes as an array with a single string element.
//The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.



function isPalindrome(input){
    let n = input.length / 2;

    for (let i = 0; i < n; i++) {
        if(input[i] != input[input.length - i - 1]){
            console.log("false")
            return false;
        }
    }

    console.log("true")
    return true;
}

isPalindrome('haha');
isPalindrome('racecar');
isPalindrome('unitinu');
