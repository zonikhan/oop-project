#! /usr/bin/env node
 
// Typescript Oop project 
 
import inquirer from "inquirer"; 
import chalk from "chalk"; 
class person{ 
 private _personality: string; 
 constructor(){ 
 this._personality = 'Mystery' 
 } 
 
 
// userinput 
userInput(input: string){ 
 //if / else statement 
 if(input.includes("talk to other about your self openly")){ 
 this._personality = "happly"; 
 }else if (input.includes("keep your word to yourself")){ 
 this._personality = "talk rude" 
 } 
} 
 
// return function 
get personality(){ 
 return this._personality 
} 
 
} 
 
//create Objects 
class Main { 
 public async main(){ 
 //await call out 
 const result = await inquirer.prompt([ 
 { 
 type: "list", 
 name: "choices", 
 message: chalk.yellowBright("tell your behaviour ?"), 
 choices: [ 
 "1: talk to others about my self.", 
 "2: keep quite and dont ask questions." 
 ] 
 } 
 ]); 
 
 //create a persno class 
 
 let myPerson = new person() 
 
 myPerson.userInput(result.choices); 
 
 //output response 
 console.log((chalk.redBright)(`You are ${myPerson.personality}`)) 
 
 } 
} 
const myObject = new Main(); 
 
myObject.main(); 
 
 
 //completed Oop project
