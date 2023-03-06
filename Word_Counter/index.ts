import inquirer from "inquirer";


function countWords(text: String){
    let count;
    count = 0;
    var isWord: Boolean;
    isWord = false;

    for(var i=0; i<text.length; i++){
        if(text[i] === ' ' || text[i] === '\t' || text[i] === '\n'){
            isWord = false;
        } else if (!isWord){
            count = count + 1;
            isWord = true;
        }
    }

    return count;
}

function countCharacters(text: String){
    let count = 0;
    for(let t in text){
        if(t == ' '){
            continue;
        } else {
            count++;
        }
    }
    return count;
}

interface ansType{
    text: String,
    operation: String
}

async function askQuestion(){
    var response: ansType = await inquirer
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
    ])
    if(response.operation === "Count Words"){
       let totalWords = countWords(response.text);
       console.log("Total Number of Words -> ", totalWords);
    } else if(response.operation === "Count Characters"){
        let totalChars = countCharacters(response.text);
        console.log("Total Number of Characters -> ", totalChars);
     }
}

async function askAgain(){
    do{
        await askQuestion();
        var userInput = await inquirer
        .prompt([
            {
                type: "list",
                name: "input",
                message: "Do you want to continue ? ",
                choices: ["No", "Yes"]
            }
        ])
    } while(userInput.Input === 'No');
    console.log("Thanks for using my program");
}

askAgain();