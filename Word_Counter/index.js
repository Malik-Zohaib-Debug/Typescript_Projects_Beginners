import inquirer from "inquirer";
function countWords(text) {
    let count;
    count = 0;
    var isWord;
    isWord = false;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ' || text[i] === '\t' || text[i] === '\n') {
            isWord = false;
        }
        else if (!isWord) {
            count = count + 1;
            isWord = true;
        }
    }
    return count;
}
function countCharacters(text) {
    let count = 0;
    for (let t in text) {
        if (t == ' ') {
            continue;
        }
        else {
            count++;
        }
    }
    return count;
}
async function askQuestion() {
    var response = await inquirer
        .prompt([
        {
            type: "input",
            name: "text",
            message: "Enter the text here: "
        },
        {
            type: "list",
            name: "operation",
            message: "What operation you want to perform on your text: ",
            choices: ["Count Words", "Count Characters"]
        }
    ]);
    if (response.operation === "Count Words") {
        let totalWords = countWords(response.text);
        console.log("Total Number of Words -> ", totalWords);
    }
    else if (response.operation === "Count Characters") {
        let totalChars = countCharacters(response.text);
        console.log("Total Number of Characters -> ", totalChars);
    }
}
askQuestion();
