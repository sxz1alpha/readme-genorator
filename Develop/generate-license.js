const fs = require('fs');
const inquirer = require('inquirer');

const license = (newData) => {
    console.log(`
    ====================================
    ==========License Section!==========
    ====================================`);
    
    if(!newData.license) {
        newData.license = [];
    }

    return inquirer.prompt([
        {
           type: 'checkbox',
           name: 'license',
           message: 'Please select only one license option.',
           choices: ['MIT', 'ISC', 'OpenBSD', 'Apache', 'Rust', 'WordPress']
        }
    ])
    .then(licenseData => {
        if(licenseData) {
        newData.license.push(licenseData)
        return newData;
        }
    })
};

module.exports = {license};

