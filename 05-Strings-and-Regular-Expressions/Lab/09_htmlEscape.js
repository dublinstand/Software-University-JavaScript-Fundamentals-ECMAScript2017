function escapeHtmlPage(arr){
    let text = "<ul>";

    for(let line of arr){
        let escapedLine = htmlEscape(line);

        //add a new line and a tab
        text += `\n\t<li>${escapedLine}</li>`;
    }

    text += "\n</ul>"
    return text;
}

function htmlEscape(str) {
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

//console.log(htmlEscape("<div color='red'>I'a a \"div\"</div>"));
console.log(escapeHtmlPage(['<b>unescaped text</b>', 'normal text']))