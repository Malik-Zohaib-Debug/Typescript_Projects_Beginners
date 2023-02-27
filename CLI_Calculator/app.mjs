import PromptSync from "prompt-sync";
import menu from './menu.mjs';

const prompt = PromptSync();

console.log("\t\tCLI-Calculator Created Using Nodejs By Zohaib");

menu();

// 1st user-input
let userInput = Number(prompt("\nEnter your choice here: "));
do{

    let num1 = 0, num2 = 0;
    
    if(userInput === 1){
        num1 = Number(prompt("\nEnter the 1st number: "));
        num2 = Number(prompt("Enter the 2nd number: "));

        let result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
    }
    if(userInput === 2){
        num1 = Number(prompt("\nEnter the 1st number: "));
        num2 = Number(prompt("Enter the 2nd number: "));

        let result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
    }
    if(userInput === 3){
        num1 = Number(prompt("\nEnter the 1st number: "));
        num2 = Number(prompt("Enter the 2nd number: "));

        let result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
    }
    if(userInput === 4){
        num1 = Number(prompt("\nEnter the 1st number: "));
        num2 = Number(prompt("Enter the 2nd number: "));

        let result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
    }
    if(userInput === 5){
        num1 = Number(prompt("\nEnter the 1st number: "));
        num2 = Number(prompt("Enter the 2nd number: "));

        let result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
    }
    else {
        console.log("Please select the options from 1 to 6");
    }
    userInput = Number(prompt("\nEnter your choice here: "));
    menu();
} while(userInput != 6);

console.log("Thanks for using my calculator");