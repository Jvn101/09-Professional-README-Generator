// Packages needed for this application to run
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input. Questions.js is stored in a seperate file. Open 'questions.js' to view the users prompts asked
const questions =require('./question');

// Function to write README file
function writeToFile(data) {
    //fs.writeFile()
    fs.writeFile("./Project-Readme.md", 
    generateMarkdown(data), (err) => err && console.log(err + " Error!"));
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
      writeToFile(data)
    })
}

// Function call to initialize app
init()