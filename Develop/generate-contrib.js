const fs = require('fs');
const inquirer = require('inquirer');
const inquirer = require('inquirer');

const promptContrib = (currentData) => {
    console.log(`
    ====================================
    ===========Contributions!===========
    ====================================`);

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'contribConfirm',
            message: 'Would you like to add instructions for contributors?',
            default: true
        }
    ])
    .then(contribData => {
        let newData = {...currentData, ...contribData}
        if(contribData.confirmContrib) {
            return generateContrib(newData);
        } else {
            return contribData;
        }
    })
};

const generateContrib = (newData) => {

    if(!newData.contrib) {
        newData.contrib = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'contribName',
            message: 'What is the contributors name? (Required)',
            validate: contribName => {
                if (contribName) {
                    return true;
                } else {
                    console.log('You need to input a contributors name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribDes',
            message: 'Please give instructions on how to contribute to this project!',
            when: ({ contribName }) => {
                if (contribName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddContrib',
            message: 'Would you like to add another item to the "Table of contents" section?',
            default: true,             
        }
    ])
    .then(colabData => {
        newData.contrib.push(colabData);
        if(colabData.confirmAddContrib) {
            return generateContrib(newData);
        } else {
            return newData;
        }
    })
}

module.exports = {promptContrib, generateContrib}