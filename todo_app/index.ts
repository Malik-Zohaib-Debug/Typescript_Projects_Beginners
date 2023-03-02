import inquirer from 'inquirer';

interface ansType {
    userInput: String,
    userFeedBack: String

}

let todos: String [];
todos = [];

async function askQuestion(){
    let answer: ansType = await inquirer
    .prompt([
        {
            type: "input",
            name: "userInput",
            message: "What do you want to add in your todo list: "
        }
    ])
    todos.push(answer.userInput);
}

async function askAgain(){
    let userInput: ansType;
    do {
        await askQuestion();
        userInput = await inquirer
        .prompt([
            {
                type: "input",
                name: "userFeedBack",
                message: "Do you want to add some more? "
            }
        ])
    } while (userInput.userFeedBack == 'Y' || userInput.userFeedBack == 'y' || userInput.userFeedBack == 'YES' || userInput.userFeedBack == 'yes');
}

askAgain();

todos.forEach((todo) => console.log(todo));