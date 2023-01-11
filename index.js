const fs = require('fs');
const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Project Contribution?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Project Installation?',
    },
    {
        type: 'input',
        name: 'testinstructions',
        message: 'Project Test Instructions?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(Email)?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(GitHub)?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project License?',
        choices: [
            { name: 'MIT', value: 'mit' },
            { name: 'GNUGPLv3', value: 'GNUGPLv3' },
            { name: 'ISC', value: 'ISC' },
          ],
    },
];

function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const mark = MarkDown.generateMarkdown(data)
        fs.writeFile('./GeneratedReadMe/README.md', mark, function(err) {
            if(err){
                console.log('Could not save file!', err)
            } else {
                console.log('Success: new README file generated inside current folder')
            }
        })
    }) 
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
