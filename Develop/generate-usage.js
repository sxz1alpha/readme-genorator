const fs = require('fs');
const inquirer = require('inquirer');

const promptUsage = (currentData) => {
    console.log(`
    ====================================
    ========Usage instructions!=========
    ====================================`);

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmUse',
            message: 'Would you like to add instructions for how to use your project?',
            default: true,
        },  
    ])
    .then(usageData => {
       let newData = {...currentData, ...usageData}
       if(usageData.confirmUse) {
            return genUsage(newData);
        } else {
            return usageData;
        }
    });
}

const genUsage = (newData) => {
    if (!newData.usage) {
        newData.usage = [];
    }

    //instructions section
    return inquirer.prompt([
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide any special instructions on how to use your application!'
        },
        {
            type: 'confirm',
            name: 'addUsage',
            message: 'Would you like to add another install instruction?',
            default: false
        }
    ])
    .then(usageData => {
        newData.usage.push(usageData)
        if  (usageData.addUsage) {
            return genUsage(newData)
        } else {
            return newData;
        }
    })
}

module.exports = {promptUsage, genUsage}