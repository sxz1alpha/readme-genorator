// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { promptTable, generateTable } = require('./develop/generate-table');
const { promptColab, generateColab } = require('./develop/generate-colab');
const { license } = require('./Develop/generate-license');
// const generateReadme = require('./readme-template')


// TODO: Create an array of questions for user input
const promptUser = readmeData => {
    
    if(!readmeData) {
        readmeData = [];
    }

    console.log(`
    ========================================
    Readme file creation protocal initiated!
    ========================================
    `);
    return inquirer.prompt([
        // author section
        // {
        //     type: 'input',
        //     name: 'projectName',
        //     message: 'What is your projects name? (Required)',
        //     validate: nameInput => {
        //         if (nameInput) {
        //             return true;
        //         } else {
        //             console.log('Please enter your projects name!');
        //             return false;
        //         }
        //     }  
        // },
        // {
        //     type: 'confirm',
        //     name: 'projectLinkCon',
        //     message: 'Would you like to include a link to your deployed application? (Recommended)',
        //     default: true
        // },
        // {
        //     type: 'input',
        //     name: 'deployedLink',
        //     message: 'What is the link to your deployed appication? (Required)',
        //     validate: appLink => {
        //         if (appLink) {
        //             return true;
        //         } else {
        //             console.log('Please provide a link to your deployed application!')
        //             return false;
        //         }
        //     },
        //     when: ({ projectLinkCon }) => {
        //         if (projectLinkCon) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // },
        // // install instructions section
        // {
        //     type: 'input',
        //     name: 'install',
        //     message: 'Please provide any special install instructions for your application!'
        // },
        
        // // usage section
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: 'Please provide instructions on how to use your application! (required)',
        //     validate: usage => {
        //         if (usage) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // },
    ])          
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser()
    .then(readmeData => promptTable(readmeData))
    .then(tableData => promptColab(tableData))
    .then(colabData => license(colabData))
    .then(licenseData => console.log(licenseData))
        // .then(readmeData => {
    //     const readmePage = generateReadme(readmeData);

    //     // fs.writeFile('./readme.md', readmePage, err => {
    //     //     if (err) throw new Error(err);

    //     //     console.log('Your Readme file has been created! checkout readme.md in this directory to see it!');
    //     // });

    // })
