import inquirer from "inquirer";
let newAmount;
newAmount = 0;
async function askQuestion() {
    let answer = await inquirer
        .prompt([
        {
            type: "input",
            name: "userAmount",
            message: "Enter your amount: ",
            validate: function (input) {
                if (isNaN(input)) {
                    console.log("Please enter a valid number");
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "list",
            name: "currencyType",
            message: "Select the option in which you want to convert your currency: ",
            choices: ["USD", "CAD", "AUD", "POND", "EURO"]
        }
    ]);
    if (answer.currencyType === 'USD') {
        newAmount = 285 * Number(answer.userAmount);
        console.log("Your Amount After Converting To USD: ", newAmount);
    }
    else if (answer.currencyType === 'CAD') {
        newAmount = 204 * Number(answer.userAmount);
        console.log("Your Amount After Converting To CAD: ", newAmount);
    }
    else if (answer.currencyType === 'AUD') {
        newAmount = 187 * Number(answer.userAmount);
        console.log("Your Amount After Converting To AUD: ", newAmount);
    }
    else if (answer.currencyType === 'POND') {
        newAmount = 334 * Number(answer.userAmount);
        console.log("Your Amount After Converting To POND: ", newAmount);
    }
    else if (answer.currencyType === 'EURO') {
        newAmount = 295 * Number(answer.userAmount);
        console.log("Your Amount After Converting To EURO: ", newAmount);
    }
}
async function askAgain() {
    do {
        await askQuestion();
        var feedback = await inquirer
            .prompt({
            type: "input",
            name: "userInput",
            message: "Want to use again? "
        });
    } while (feedback.userInput === 'YES' || feedback.userInput === 'yes' || feedback.userInput === 'NO' || feedback.userInput === 'no');
}
askAgain();
