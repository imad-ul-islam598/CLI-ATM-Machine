#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\nThe correct Pin of ATM machine is '1234' ");

// Initialize our Balance and Pin
let myBalance = 10000; // Dollars
let myPin = 1234;

// Print Welcome Message
console.log("\n---------------Welcome to ATM machine---------------\n");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin code"
    }
]) 

if(pinAnswer.pin === myPin){
    console.log("\nYour pin is correct,login successfully.\n");
    // console.log(`current account balance is ${myBalance}`);
    
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the Amount to withdraw (USD $)"
            }
        ])

        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance !!!");
        } else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}$ Withdraw Successfully.`);
            console.log(`Your remaining balance is: ${myBalance} $`);
            
        }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Current Balance is: ${myBalance} $`);
    }
}
else{
    console.log("Your pin in Incorrect, Try Again!");
}