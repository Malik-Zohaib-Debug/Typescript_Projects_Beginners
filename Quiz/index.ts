import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.neon(`Welcome to Zohaib QuizApp
                                    create by Zohaib Zahid`);

    await sleep();
    rainbowTitle.stop();



}

await welcome()


async function AskQuestion() {


    const answers = await inquirer.prompt([{
        type: "list",
        name: "question1",
        choices: ["FrameWork", "Library"],
        message: " Nextjs is a React??",

    },
    {
        type: "list",
        name: "question2",
        choices: ["npm run dev", "npm start"],
        message: "NextJs Start the Server command ",

    },
    {
        type: "list",
        name: "question3",
        choices: ["vercel", "firebase"],
        message: "In NextJS which website is best for hosting ",
    }

    ])

    if (answers.question1 === "FrameWork") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");

    }
    if (answers.question2 === "npm run dev") {
        console.log("Answer is correct ");
    }
    else {
        console.log("Answer is not correct");

    }
    if (answers.question3 === "vercel") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
}}

AskQuestion()