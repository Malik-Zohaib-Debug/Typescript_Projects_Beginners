import inquirer from "inquirer";
async function askQuestions() {
    var answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "What type of operation you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "input",
            name: "num1",
            message: "Enter 1st Number: "
        },
        {
            type: "input",
            name: "num2",
            message: "Enter 2nd Number: "
        }
    ]);
    if (answers.operator === "Addition") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    if (answers.operator === "Subtraction") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    if (answers.operator === "Multiplication") {
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    if (answers.operator === "Division") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
}
async function startAgain() {
    do {
        await askQuestions();
        var userInput = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue. Press Y or N"
        });
    } while (userInput.restart == 'y' || userInput.restart === 'Y' || userInput.restart == 'yes' || userInput.restart === 'YES');
}
startAgain();
