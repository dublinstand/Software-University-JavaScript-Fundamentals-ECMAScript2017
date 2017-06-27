//Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.
//The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
//The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.


function rotateArray(input){
    let rotations = Number(input[input.length - 1]);
    input.pop();

    for (let i = 0; i < rotations; i++) {
        let inserted = input.pop();
        input.unshift(inserted);
    }

    console.log(input.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
