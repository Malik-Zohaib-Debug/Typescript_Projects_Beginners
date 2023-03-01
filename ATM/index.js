import inquirer from "inquirer";
async function askQuestion() {
    let answer = await inquirer
        .prompt([
        {
            type: "input",
            name: "userID",
            message: "Enter your user id: ",
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
            type: "input",
            name: "userPin",
            message: "Enter your pin code",
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
            name: "accountType",
            message: "Select your account type",
            choices: ["Current Account", "Saving"]
        },
        {
            type: "list",
            name: "transactionMethod",
            message: "Select the transaction type",
            choices: ["Fast Cash", "Withdraw"],
            when(answer) {
                return answer.accountType;
            }
        },
        {
            type: "list",
            name: "withdrawalMethod",
            message: "Select the amount you want to withdraw",
            choices: [1000, 5000, 10000, 20000],
            when(answer) {
                return answer.transactionMethod == 'Fast Cash';
            }
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount: ",
            when(answer) {
                return answer.transactionMethod == 'Withdraw';
            }
        }
    ]);
    if (answer.userID && answer.userPin) {
        let totalAmount = Math.floor(Math.random() * 10000000);
        let userAmount = answer.userInput;
        console.log("Total Amount -> " + totalAmount + " User Amount -> " + Number(userAmount));
        if (totalAmount >= Number(userAmount)) {
            let remaining = totalAmount - Number(userAmount);
            console.log("Your remaining balance: " + remaining);
        }
        else {
            console.log("Insufficiant Balance");
        }
    }
}
askQuestion();
