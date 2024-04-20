#! /usr/env/node
import inquirer from "inquirer";
console.log("Welcome to currency converter program!");
const currency = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAns = await inquirer.prompt([{
        name: "from",
        message: "Enter From Currency:",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
         message: "Enter to Currency:",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter Your Amount:",
        type: 'number'
    }]);
//Dynamically picking property value from object
let fromAmount = currency[userAns.from]; // exchange rate 
let toAmount = currency[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
