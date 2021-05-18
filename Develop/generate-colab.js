
const fs = require('fs')
const inquirer = require('inquirer')


const promptColab = (currentData) => {
    console.log(`
    ====================================
    ========Colaborator Section!========
    ====================================`);

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmColab',
            message: 'Would you like to add a colaborator?',
            default: true,
        },  
    ])
    .then(colabData => {
       let newData = {...currentData, ...colabData}
       if(colabData.confirmColab) {
       return generateColab(newData)
       } else {
           console.log(colabData)
            return colabData;
       }
    });
}


const generateColab = (newData) => {

    if (!newData.colab) {
        newData.colab = [];
    }

    //colaborator credit section
    return inquirer.prompt([    
        {
            type: 'input',
            name: 'colabName',
            message: 'What is the name of your colaborator? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your colaborators Name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'colabLink',
            message: 'Please provide a link to your colaborators online presence! (Required)',
            when: ({ colabName }) => {
                if (colabName) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter a link to your colaborators online presence!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddColab',
            message: 'Would you like to add another colaborator?',
            default: false,
        }
    ])
    .then(colabData => {
        newData.colab.push(colabData)
        if (colabData.confirmAddColab) {
            return generateColab(newData);
        } else {
            console.log(newData);
            return newData;
        }
    })
};      

module.exports = {promptColab, generateColab}