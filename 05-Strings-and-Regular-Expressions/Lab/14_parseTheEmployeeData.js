//Write a JS function that validates employee data, and stores it if it is valid.
// The employee data consists of 3 elements – employee name, employee salary and employee position.
//The input comes as an array of strings. Each element represents input employee data.
//You should capture only the valid from them. The input will have the following format:
//{employeeName} - {employeeSalary} - {employeePosition}
//The Employee name will be a string, which can contain only English alphabet letters and must start with a capital.
//The Employee salary should be a VALID number. The employee position can contain English alphabet letters, digits, dashes, and can consist of several words.
//Any input that does NOT follow the specified above rules, is to be treated as invalid, and is to be ignored.
//The output should be printed on the console. For every valid employee data found, you should print each of its elements. Check the examples.



function parseTheEmployeeData(input){

    let matcher = /\b([A-Za-z]+) - ([0-9]+) - ([A-Za-z]+)\b/g;
    let match;

    for(let line of input){
        while(match = matcher.exec(line)){
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
            console.log(``);
        }
    }
}

parseTheEmployeeData(['Isacc - 1000 - CEO','Ivan - 500 - Employee','Peter - 500 - Employee']);
parseTheEmployeeData(['Jonathan - 2000 - Manager','Peter- 1000- Chuck','George - 1000 - Team Leader ']);
