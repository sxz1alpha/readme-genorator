// table of contents section
const promptTable = (readmeData) => {
    console.log(readmeData)
    if (!readmeData.table) {
        readmeData.table = [];
    }
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to add and item to the "Table of contents" section?',
            default: true,
            when: ({ readmeData }) => {
                if (readmeData.table = []) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'table',
            message: 'Provide the name of a section to add to the table of contents!',
            when: ({ confirmTable }) => {
                if (confirmTable) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTable',
            message: 'Would you like to add another item to the "Table of contents" section?',
            default: true, 
            when: ({ table }) => {
                if (table) {
                    return true;
                } else {
                    return false;
                }
            }
            
        }
    ])
    .then (tableData => {
        readmeData.table.push(tableData);
        if (tableData.confirmAddTable) {
            return promptTable(readmeData);
        } else {
            console.log(readmeData);
            return promptColab(readmeData.table);
        }
    })
};