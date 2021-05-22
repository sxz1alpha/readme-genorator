const fs = require('fs');
const inquirer = require('inquirer');


const badgePrompt = (currentData) => {
    console.log(`
    ====================================
    ===========Badge Section!===========
    ====================================`);

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'badgeConfirm',
            message: 'Would you like to add some badges?',
            default: true
        }
    ])
    .then(badgeData => {
        let newData = {...currentData, ...badgeData}
        if(badgeData.badgeConfirm) {
        return generateBadge(newData)
        } else {
            console.log(badgeData)
             return badgeData;
        }
    }) 
}

const generateBadge = (newData) => {

    if (!newData.badge) {
        newData.badge = [];
    }

    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'badge',
            message: 'Please select the badge(s) you would like to add!',
            choices: ['https://img.shields.io/badge/Kid%20Tested-Mother%20approved!-green','',''],
        }
    ])
    .then(badgeData => {
        newData.badge.push(badgeData);
        return newData
    })
};


module.exports = {badgePrompt, generateBadge};
