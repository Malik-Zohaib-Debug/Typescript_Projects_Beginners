import inquirer from 'inquirer';
let todos;
todos = [];
async function askQuestion() {
    let answer = await inquirer
        .prompt([
        {
            type: "input",
            name: "userInput",
            message: "What do you want to add in your todo list: "
        }
    ]);
    todos.push(answer.userInput);
}
async function askAgain() {
    let userInput;
    do {
        await askQuestion();
        userInput = await inquirer
            .prompt([
            {
                type: "input",
                name: "userFeedBack",
                message: "Do you want to add some more? "
            }
        ]);
    } while (userInput.userFeedBack == 'Y' || userInput.userFeedBack == 'y' || userInput.userFeedBack == 'YES' || userInput.userFeedBack == 'yes');
    console.log("Your Todo List");
    todos.forEach((todo_list) => {
        console.log("-> " + todo_list);
    });
}
askAgain();
