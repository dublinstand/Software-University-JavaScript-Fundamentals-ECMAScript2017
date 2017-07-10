//You will be given a register of systems with components and subcomponents.
// You need to build an ordered database of all the elements that have been given to you.
//    The elements are registered in a very simple way. When you have processed all of the input data,
// you must print them in a specific order. For every System you must print its components in a specified order,
// and for every Component, you must print its Subcomponents in a specified order.
//    The Systems you’ve stored must be ordered by amount of components, in descending order,
// as first criteria, and by alphabetical order as second criteria. The Components must be ordered by amount
// of Subcomponents, in descending order.
//    The input comes as array of strings. Each element holds data about a system, a
// component in that system, and a subcomponent in that component. If the given system already exists, you should just add the new component to it. If even the component exists, you should just add the new subcomponent to it. The subcomponents will always be unique. The input format is:
//    “{systemName} | {componentName} | {subcomponentName}”
//All of the elements are strings, and can contain any ASCII character.
// The string comparison for the alphabetical order is case-insensitive.
//    As output you need to print all of the elements, ordered exactly in the way specified above. The format is:
//    “{systemName}
//|||{componentName}
//|||{component2Name}
//||||||{subcomponentName}
//||||||{subcomponent2Name}
//{system2Name}
//...”



function systemComponents(input){
    let catalogue = new Map();

    for(let line of input){
        let[system, component, subComponentName] = line.split(" \| ");

        if(!catalogue.has(system)){
            catalogue.set(system, new Map());
        }

        //we want to have an array instead a third map, so that we can push elements
        if(!catalogue.get(system).has(component)){
            catalogue.get(system).set(component,[]);
        }

        //if there is system key, and in the map that we created in the map component key (if not they were created)
        //push the subComponentName to the array
        catalogue.get(system).get(component).push(subComponentName)
    }

    //we need to sort by each systems number of components
    //that's why we need to pass the catalogue, and compare its first map size
    //if they are equal, compare the first letter, to lower case (order them alphabetically
    function sortSystemComparator(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;

        //if aComponents size is greater than bComponents size, return -1 (this means that we'll sort them Desc)
        //sorting is done ascending always, so the lower value is shown first, that's why we return -1, to return the bigger number
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    //we sort the keys from the catalogue, compared to the catalogue we pass, based on the logic in the method
    let sortedSystems = [...catalogue.keys()].sort((a, b) => sortSystemComparator(a, b, catalogue));

    for (let system of sortedSystems) {
        console.log(system);
        //go through the keys of the inner map (with key = system) and sort for each value, by the length of the values in it
        let components = [...catalogue.get(system).keys()].sort((s1, s2) => catalogue.get(system).get(s2).length - catalogue.get(system).get(s1).length);
        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of catalogue.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

systemComponents([
   'SULS | Main Site | Home Page',
   'SULS | Main Site | Login Page',
   'SULS | Main Site | Register Page',
   'SULS | Judge Site | Login Page',
   'SULS | Judge Site | Submission Page',
   'Lambda | CoreA | A23',
   'SULS | Digital Site | Login Page',
   'Lambda | CoreB | B24',
   'Lambda | CoreA | A24',
   'Lambda | CoreA | A25',
   'Lambda | CoreC | C4',
   'Indice | Session | Default Storage',
   'Indice | Session | Default Security'
]);
