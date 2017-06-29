//Write a JS function that validates simple emails. The emails should have a username, which consists only of English alphabet letters and digits,
//a “@” sign, and a domain name after it. The domain should consist only of 2 strings separated by a single dot.
//The 2 strings should contain NOTHING but lowercase English alphabet letters.
//The input comes as an array of strings. The array will hold one element which is an email.
//The output should be printed on the console. If the given email is valid, print “Valid”, if it is not, print “Invalid”.


function simpleEmailValidation([email]){
    let regExp = /^[A-Za-z0-9\._]+\@[a-z]+\.[a-z]+$/g;
    let result = regExp.test(email);

    if(result){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }
}

simpleEmailValidation(["valid@email.bg"]);
simpleEmailValidation(['bai.ivan@mail.sf.net']);
simpleEmailValidation(["invalid@emai1.bg"]);
