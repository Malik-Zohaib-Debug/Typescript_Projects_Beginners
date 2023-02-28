import inquirer from "inquirer";

const systemGeneratedNo: Number = Math.floor(Math.random()*100);

async function askQuestion(){
    let response = await inquirer
    .prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your guess here (Select a number between 1 to 100): ",
            validate: function(input){
                if(isNaN(input)){
                    console.log("\nPlease enter a valid integer number");
                } else {
                    return true;
                }
            }
        }
    ])

    if(response.name === systemGeneratedNo){
        console.log("You guess a right number :)");
    } else {
        console.log("Not a right number");
    }
}

async function askAgain(){
    do{
        await askQuestion();
        var userInput = await inquirer
        .prompt(
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue. Press Y or N"
            }
        )
    } while (userInput.restart === 'Y' || userInput.restart === 'y' || userInput.restart === 'yes' || userInput.restart === 'YES')
}

askAgain();