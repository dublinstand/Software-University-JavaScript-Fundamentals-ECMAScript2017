//You’re tasked with creating an HTML table of students and their scores.
//You will receive a single string representing an array of objects, the table’s headings should be equal to the objects’ keys,
//while each object’s values should be a new entry in the table. Any text values in an object should be escaped,
//in order to avoid introducing dangerous code into the HTML.
//Object’s keys will always be the same.
//The input comes as an array of strings containing a single string - the array of objects.
//The output should be printed on the console - for each entry row in the input print the object representing it.


function fromJSONToHTMLTable([jsonArray]){
    let strArr = JSON.parse(jsonArray);
    let html = "<table>\n";
    html += "  <tr>";

    //we get the keys for each value to put in the header
    for(let key of Object.keys(strArr[0])){
        html += `<th>${htmlEscape(key)}`
    }
    html += "</tr>\n";

    for(let obj of strArr){
        html += "  <tr>";

        //because the keys can be different for each test we get the value from the Object.keys for each object
        for (let value of Object.keys(obj)){
            html += '<td>' + htmlEscape(obj[value]) + '</td>';
        }

        html += "</tr>\n";
    }

    html += "</table>";

    return html;
}

console.log(fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));

function htmlEscape(str) {
    //this is done, because we can pass a number and it will brake the function
    str = String(str);

    let result = "";

    for (let ch of str) {
        if (ch == '<') {
            result += '&lt;';
        }
        else if (ch == '>') {
            result += '&gt;';
        }
        else if (ch == '"') {
            result += '&quot;';
        }
        else if (ch == '&') {
            result += '&amp;';
        }
        else if (ch == '\'') {
            result += '&#39;';
        }
        else {
            result += ch;
        }
    }

    return result;
}