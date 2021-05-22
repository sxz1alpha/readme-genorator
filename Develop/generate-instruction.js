const fs = require('fs');
const inquirer = require('inquirer');

const promptInst = (currentData) => {
    console.log(`
    ====================================
    ==========Install Section!==========
    ====================================`);

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmInst',
            message: 'Would you like to add instructions for your project?',
            default: true,
        },  
    ])
    .then(instData => {
       let newData = {...currentData, ...instData}
       if(instData.confirmInst) {
       return genInst(newData)
       } else {
            return instData;
       }
    });
}

const genInst = (newData) => {
    if (!newData.inst) {
        newData.inst = [];
    }

    //instructions section
    return inquirer.prompt([
        {
            type: 'input',
            name: 'install',
            message: 'Please provide any special install instructions for your application!'
        },
        {
            type: 'confirm',
            name: 'addInst',
            message: 'Would you like to add another install instruction?',
            default: false
        }
    ])
    .then(instData => {
        newData.inst.push(instData)
        if  (instData.addInst) {
            return genInst(newData)
        } else {
            return newData;
        }
    })
}

module.exports = {promptInst, genInst}