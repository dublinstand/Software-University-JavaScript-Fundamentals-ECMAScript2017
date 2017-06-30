//Write a JS function that finds all numbers in a sequence of strings.
//The input comes as array of strings. Each element represents one of the strings.
//The output is all the numbers, extracted and printed on a single line – each separated by a single space.


function captureNumbers(input){

    let regExp = /[0-9]+/g;
    let allMatches = [];

    for(let line of input){
        let match = line.match(regExp);

        //here we check if the match is not null and its length is more than one, so that we can join in a string
        //if the array has length 1 then just push it to the array, otherwise join it in a string
        if(match != null && match.length > 1){
            match =  match.join(" ");
        }

        //if match is not null (if there is a matcch on the regex passed)
        if(match != null){
            allMatches.push(match);
        }
    }

    console.log(allMatches.join(" "));
}

captureNumbers(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);