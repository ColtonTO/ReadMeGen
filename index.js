const fs = require('fs');
const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown.js')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Project Contribution?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Project Installation?',
    },
    {
        type: 'input',
        name: 'TestInstructions',
        message: 'Project Test Instructions?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Questions?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'Project License?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const mark = MarkDown.generateMarkdown(data)
        fs.writeFile('README.md', mark, function(err) {
            if(err){
                console.log('Could not save file!', err)
            } else {
                console.log('Success: new README file generated inside current folder')
            }
        })
        // console.log(data)
        // return data
    }) 
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
