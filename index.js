const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log('hello');

const projectQuestions = () => {
    return inquirer.prompt ([
        {
        type: 'input',
            name: 'repo',
            message: 'What is your Github repo name? (Required)',
            validate: validateRepoInput => {
                if (validateRepoInput) {
                    return true;
                } else {
                    console.log('Please enter your Github repo name.');
                }
            }
        },
        {
            type: 'input',
                name: 'username',
                message: 'What is your Github username? (Required)',
                validate: validateUsernameInput => {
                    if (validateUsernameInput) {
                        return true;
                    } else {
                        console.log('Please enter your Github username.');
                    }
                }
            },
            {
                type: 'input',
                    name: 'project',
                    message: 'What is the name of your project? (Required)',
                    validate: validateProjectInput => {
                        if (validateProjectInput) {
                            return true;
                        } else {
                            console.log('Please enter your Github repo name.');
                        }
                    }
                },
    ])
}


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


// Functioncall to initialize app

projectQuestions();