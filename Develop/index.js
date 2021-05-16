// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        //author section
        {
            type: 'input',
            name: 'name',
            message: 'What is your projects name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the link to your deployed appication?',
            validate: appLink => {
                if (appLink) {
                    return true;
                } else {
                    console.log('Please provide a link to your deployed application!')
                    return false;
                }
            }
        },
        // table of contents section
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to add and item to the "Table of contents" section?',
            default: true
        },
        {
            type: 'input',
            name: 'table',
            message: 'Provide the name of a section to add to the table of contents',
            when: ({ confirmTable }) => {
                if (confirmTable) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // install instructions section
        {
            type: 'input',
            name: 'install',
            message: 'Please provide any special install instructions for your application!'
        },
        
        // usage section
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use your application! (required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        
        //credits section
        {
            type: 'confirm',
            name: 'colab',
            message: 'Would you like to add a colaborator?'
            // colaborator and link to profile on github
        },

 
        //asset, creator, and link to primary web presence
        // tutorials used, link
        
        // license(s) section
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select a license option.',
            choices: ['', '', '', '']
        },
        //badges section
        {
            type: 'confirm',
            name: 'badgeConfirm',
            message: 'Would you like to add some badges?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'badge',
            message: 'Please select the badge(s) you would like to add!',
            choices: ['','',''],
            when: ({ badgeConfirm }) => {
                if (badgeConfirm) {
                    return true;
                } else { 
                    return false;
                }
            }
        },
        // features section
        {

        },
        //Contributing section
        {

        },
        // tests section
        {

        }
    ])
}
const colaborators = () => {
    
    promptUser(colabData);
}
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
