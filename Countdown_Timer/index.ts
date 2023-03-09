import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';


interface ansType {
    user: number;
}

interface ansType2{
    userFeedback: string;
}

const sleep = () => {
    return new Promise((res)=>{
        setTimeout(res, 3000);
    })
}

async function welcome(){
    let title: string;
    title = "Welcome To Countdown Timer App - Created By Zohaib :)";

    let welcomingTitle = chalkAnimation.neon(title);

    await sleep();
    welcomingTitle.stop();
}

await welcome();

async function App(){
    let question: ansType = await inquirer.prompt([
        {
            type: "number",
            name: "user",
            message: "Select a timer in seconds",
            validate: function(input){
                if(isNaN(input)){
                    return false;
                } else {
                    return true;
                }
            }
        }]);

        const updateTime = () => {
            console.clear();
            if(question.user > 0){
                let remainingTime: string;
                remainingTime = `${question.user} seconds remaining`
                console.log(chalk.greenBright(remainingTime));
                setTimeout(updateTime, 1000);
                question.user = question.user - 1;
            } 
            else {
                let remainingTime: string;
                remainingTime = `Time Finished`;
                console.log(chalk.red(remainingTime));
            }
        };
        console.clear();
        setTimeout(updateTime);
    }

await App();

  async function startAgain(){
    do{
        await App();

        var askAgain: ansType2 = await inquirer.prompt([
            {
                type: "input", 
                name: "userFeedback",
                message: "Do you want to use this app again ?"
            }
        ])
    } while (askAgain.userFeedback === 'Yes' || askAgain.userFeedback === 'YES' || askAgain.userFeedback === 'yes' || askAgain.userFeedback === 'Y' || askAgain.userFeedback === 'y')
    console.log("Thanks for using my app.");
}

await startAgain();
