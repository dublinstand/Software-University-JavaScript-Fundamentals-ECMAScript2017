
function captureNumbers_2(input){
    //put the array of string into one line by joining them by a space
    let text = input.join(" ");
    let regExp = /\d+/g;
    let numbers = text.match(regExp).join(" ");

    console.log(numbers);
}

captureNumbers_2(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);