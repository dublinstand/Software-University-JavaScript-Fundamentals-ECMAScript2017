//You are tasked to create a catalogue of usernames.
// The usernames will be strings that may contain any ASCII character.
// You need to order them by their length, in ascending order, as first criteria, and by alphabetical order
// as second criteria.
//    The input comes as array of strings. Each element represents a username.
// Sometimes the input may contain duplicate usernames. Make it so that there are NO duplicates in the output.
//    The output is all of the usernames, ordered exactly as specified above – each printed on a new line.


function usernames(input){
    let users = new Set();

    for (let user of input){
        users.add(user);
    }

    function sortByLengthAscByAlphabeticalOrder(a, b){
        let result = a.length - b.length;

        if(result === 0){
            result = a.localeCompare(b);
        }

        return result;
    }

    let sortedUsers = Array.from(users).sort((a,b) => sortByLengthAscByAlphabeticalOrder(a, b));

    console.log(sortedUsers);
}

usernames([
   'Ashton',
   'Kutcher',
   'Ariel',
   'Lilly',
   'Keyden',
   'Aizen',
   'Billy',
   'Braston'
]);

