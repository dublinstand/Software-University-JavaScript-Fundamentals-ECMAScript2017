//It’s time to put your skills to work for the war effort – creating management software for a radio transmitter factory.
// Radios require a finely tuned quartz crystal in order to operate at the correct frequency.
// The resource used to produce them is quartz ore that comes in big chunks and needs to undergo several processes,
// before it reaches the desired properties.
//You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that
// will bring it closer to the desired frequency. To reduce waste and the time it takes to make each crystal your program
// needs to complete the process with the least number of operations. Each operation takes the same amount of time,
// but since they are done at different parts of the factory, the crystals have to be transported and thoroughly washed
// every time an operation different from the previous must be performed, so this must also be taken into account.
// When determining the order, always attempt to start from the operation that removes the largest amount of material.

// The different operations you can perform are the following:
// •Cut – cuts the crystal in 4
//•	Lap – removes 20% of the crystal’s thickness
//•	Grind – removes 20 microns of thickness
//•	Etch – removes 2 microns of thickness
//•	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!

//•	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number);
//do this after every batch of operations that remove material
//At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, representing the thickness of crystal ore in microns. Process each chunk and print to the console the order of operations and number of times they need to be repeated to bring them to the desired thickness.
//
//The input comes as an array with a variable number of elements that must be parsed to numbers. The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
//The output is the order of operation and how many times they are repeated, every operation on a new line. See the examples for more information.



function radioCrystals(input){

    let targetSize = Number(input[0])

    for (let i = 1; i < input.length; i++) {
        let size = input[i]

        console.log(`Processing chunk ${size} microns`)

        let op = 'Cut';
        let count = 0;
        let cutSize = cut(size);

        //we are doing the command until the target size is more than the current size or it is 1 below
        while (cutSize >= targetSize || parseInt(cutSize - targetSize) === 1){
            //the size of the crystal is equal to the changed size
            size = cutSize;
            //we cut again and check if the size matches the while conditions in order to set it equal to the size again
            cutSize = cut(size);
            count++;
        }

        if(count > 0){
            console.log(`${op} x${count}`);
            size = wash(size);
            count = 0;
        }

        //going to the next function - lapping
        op = 'Lap';
        let lapSize = lap(size);

        while (lapSize >= targetSize || parseInt(targetSize - lapSize) === 1){

            size = lapSize;
            lapSize = lap(size);
            count++;
        }

        if(count > 0){
            console.log(`${op} x${count}`);
            size = wash(size);
            count = 0;
        }

        //going to the next function - grind
        op = 'Grind';
        let grindSize = grind(size);

        while (grindSize >= targetSize || parseInt(targetSize - grindSize) === 1){

            size = grindSize;
            grindSize = grind(size);
            count++;
        }

        if(count > 0){
            console.log(`${op} x${count}`);
            size = wash(size);
            count = 0;
        }

        //going to the next function - etch
        op = 'Etch';
        let etchSize = etch(size);

        while (etchSize >= targetSize || parseInt(targetSize - etchSize) === 1){
            size = etchSize;
            etchSize = etch(size);
            count++;
        }

        if(count > 0){
            console.log(`${op} x${count}`);
            size = wash(size);
            count = 0;
        }

        if(targetSize - size === 1){
            size = xray(size);
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${size} microns`);
    }

    function cut(size){
        return size / 4;
    }

    function lap(size){
        return size - (0.2 * size);
    }

    function grind(size){
        return size - 20;
    }

    function etch(size){
        return size - 2;
    }

    function xray(size){
        return size + 1;
    }

    function wash(size){
        console.log("Transporting and washing");
        //in order to have integer
        return Math.floor(size);
    }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);