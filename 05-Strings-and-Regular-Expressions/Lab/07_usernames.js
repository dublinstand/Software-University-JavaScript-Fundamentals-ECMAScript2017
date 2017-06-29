//Write a JS function that parses a list of emails and returns a list of usernames, generated from them.
//Each username is composed from the name of the email address, a period and the first letter of every element in the domain name.
//See the examples for more information.
//The input comes as array of string elements. Each element is an email address.
//The output is printed on the console on a single line as a comma-formatted list.


function usernames(inputEmails){
    let usernames = [];

    for(let email of inputEmails){
        //we expect two have two results after the split so we have the variables as part of an array
        [alias, domain] = email.split("@");

        //add first part of the username
        let username = alias + ".";

        //get an array by splitting
        let domainParts = domain.split(".");

        //for each string in the array use function programming to add the first symbol to the username
        domainParts.forEach(d => username += d[0]);

        usernames.push(username);
    }

    console.log(usernames.join(", "))
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
