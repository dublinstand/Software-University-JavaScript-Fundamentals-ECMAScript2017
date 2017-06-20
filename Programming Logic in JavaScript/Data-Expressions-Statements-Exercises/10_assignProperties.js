//Write a JS function that composes an object by given properties. There will be 3 sets of property-value pairs (a total of 6 elements). Assign each value to its respective property of an object and return the object as a result of the function.
//The input comes as an array of string elements.
//The output should be returned as a value.



function assignProperties([name, nameValue, age, ageValue, gender, genderValue]){
    let obj = {};

    let nameProp = name;
    obj[nameProp] = nameValue;

    let ageProp = age;
    obj[ageProp] = ageValue;

    let genderProp = gender;
    obj[genderProp] = genderValue;

    console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);