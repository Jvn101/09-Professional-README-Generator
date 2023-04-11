// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions =require('./question')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fs.writeFile()
    //fs.writeFile("./fun.md", generateMarkdown(mock), err=>console.log(err))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
      console.log(data)
        //return readme;
    })
}

// Function call to initialize app
//init()


const mock = {title:"test", license:"mit", Description:"cool project",Contents:"stuff goes here", Installation: "npm i", Usage: "please use"}


fs.writeFile("./fun.md", generateMarkdown(mock), err=>console.log(err))