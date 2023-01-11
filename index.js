const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.createPromptModule(questions)
    .then((data) => {
        console.log(data)
        return data
    }) 
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
