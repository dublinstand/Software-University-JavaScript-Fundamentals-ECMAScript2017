//Write a JS function that automatically fills a form for a lazy client.
// The client will give you 3 elements of data about himself – his username, his email, and his phone number.
// After those 3 elements you will be given the form, as text, with several placeholders in it.
// You must replace each valid placeholder with its corresponding value.
// The placeholders have special symbols and can contain only English alphabet letters. There are 3 types of valid placeholders:
//•	<!{letters}!> - put the given username in place of this
//•	<@{letters}@> - put the given email in place of this
//•	<+{letters}+> - put the given email in place of this
//The input comes as an array of strings. The first 3 elements will represent – the username, the email and the phone number.
//Each element after that will represent a sentence, if you find a placeholder somewhere in those sentences you should replace it.
//The output should be printed on the console. The output should consist of all sentences, printed again, this time with their placeholders replaced with the actual data.




function formFiller(data){
    [username, email, phone] = [data.shift(), data.shift(), data.shift()];
    let usernameRegex = /<![A-Za-z]+!>/g;
    let emailRegex = /<@[A-Za-z]+@>/g;
    let phoneRegex = /<\+[A-Za-z]+\+>/g;


    for(let line of data){
        line = line.replace(usernameRegex, username);
        line = line.replace(emailRegex, email);
        line = line.replace(phoneRegex, phone);

        console.log(line);
    }
}

formFiller((['pit', 'pit@pit.com', '032746',
        'I am <!user!>, my email is <@email@>, my phone is <+p+>.'])
)
