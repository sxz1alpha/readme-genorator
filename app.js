// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { promptTable, generateTable } = require('./develop/generate-table');
const { promptColab, generateColab } = require('./develop/generate-colab');
const { license } = require('./Develop/generate-license');
const {badgePrompt, generateBadge} = require('./develop/generate-badge');
const { READMEfile } = require('./Develop/readme-template');
const { promptInst } = require('./Develop/generate-instruction');
const { promptUsage } = require('./Develop/generate-usage');



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
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects name!');
                    return false;
                }
            }  
        },
        {
            type: 'confirm',
            name: 'projectLinkCon',
            message: 'Would you like to include a link to your deployed application? (Recommended)',
            default: true
        },
        {
            type: 'input',
            name: 'deployedLink',
            message: 'What is the link to your deployed appication? (Required)',
            validate: appLink => {
                if (appLink) {
                    return true;
                } else {
                    console.log('Please provide a link to your deployed application!')
                    return false;
                }
            },
            when: ({ projectLinkCon }) => {
                if (projectLinkCon) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // //project description
        {
            type: 'input',
            name: 'descrip',
            message: 'Please povide a description of your project!'
        },        
    ])          
};


// TODO: Create a function to write README file
function writeToFile(projectName, data) {
    fs.writeFile(projectName, data, err => {
        if (err) {
            console.error(err)
        } else {
            console.log("Your Readme.md file has been generated successfully!!!")
        }
    })
}


promptUser()
.then(readmeData =>  promptTable(readmeData))
.then(tableData => promptInst(tableData))
.then(instData => promptUsage(instData))
.then(usageData =>  promptColab(usageData))
.then(colabData =>  license(colabData))
// .then(licenseData => badgePrompt(licenseData))
.then(readmeData => writeToFile('Readme.md', READMEfile(readmeData)))
