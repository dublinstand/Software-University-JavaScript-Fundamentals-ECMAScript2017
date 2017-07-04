//You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied objects.
//The table should have 2 columns "name" and "score", each object in the array will also have these keys.
//Any text elements must also be escaped in order to ensure no dangerous code can be passed.
//You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.
//The input comes as an array of strings containing a single string - the array of objects as a JSON.
//The output should be printed on the console - a table with 2 columns - "name" and "score", containing the values from the objects as rows.


function scoreToHtml(input) {
    let scoreArr = JSON.parse(input);
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";

    for (let score of scoreArr) {
        html += `  <tr><td>${htmlEscape(score["name"])}</td><td>${htmlEscape(score["score"])}</td></tr>\n`;
    }
    html += "</table>";

    return html;
}

console.log(scoreToHtml([
    '[{"name":"Pesho","score":479}',
    '{"name":"Gosho","score":205}]']));

console.log(scoreToHtml([
    '[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));

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
            result += '&amp';
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