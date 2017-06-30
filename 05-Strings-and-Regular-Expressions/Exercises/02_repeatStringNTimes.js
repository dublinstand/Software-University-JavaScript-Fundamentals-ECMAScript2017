//Write a JS function that repeats a given string, N times.
//The input comes as array of strings. There will always be only 2 strings of input. The first string will represent the one you need to repeat. The second one will represent the times you need to repeat it.
//The output is a big string, containing the given one, repeated N times.



function repeatStringNTimes([line, repetition]){
    repetition = Number(repetition);
    let output = "";

    for (let i = 0; i < repetition; i++) {
        output += line;
    }

    console.log(output);
}

repeatStringNTimes(["repeat", "5"]);
repeatStringNTimes(["magic is real", "3"]);