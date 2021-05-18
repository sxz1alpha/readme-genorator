// table of contents section

const fs = require('fs');
const inquirer = require('inquirer')

//prompts the user to generate a table of contents item
const promptTable = (currentData) => {
    console.log(`
    ====================================
    =========Table of Contents!=========
    ====================================`);

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to add and item to the "Table of contents" section?',
            default: true,
        },  
    ])
    //checks the confirm table prompt and either returns the data back to app.js to be passed to the next function file or runs the generate table function
    .then(tableData => {
       let newData = {...currentData, ...tableData}
       if(tableData.confirmTable) {
       return generateTable(newData)
       } else {
           console.log(tableData)
            return tableData;
       }
    });           
}



// generates the table of contents items
const generateTable = (newData) => {
    console.log(newData)
    // renames the data for the local scope of the function
    if (!newData.table) {
        newData.table = [];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'table',
            message: 'Provide the name of a section to add to the table of contents!',
            
        },
        {
            type: 'confirm',
            name: 'confirmAddTable',
            message: 'Would you like to add another item to the "Table of contents" section?',
            default: true,             
        }
    ])
    .then (tableData => {
        newData.table.push(tableData);
        if (tableData.confirmAddTable) {
            return generateTable(newData);
        } else {
            console.log(newData);
            return newData;
        }
    })
};



module.exports = {promptTable, generateTable};