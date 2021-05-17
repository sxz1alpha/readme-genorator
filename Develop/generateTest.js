// tests section
const promptTest = () => {
        
    console.log(`
    ===============================
    =============Tests!============
    ===============================
    `);
    return inquirer.prompt([    
        {
            type: 'confirm',
            name: 'testConfirm',
            message: 'Would you like to add a test?',
            default: true
        },
        {
            type: 'input',
            name: 'testName',
            message: 'What is your test called? (Required)',
            when: ({ testConfirm }) => {
                if (testConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'colabDes',
            message: 'Please describe your test!',
            when: ({ testName }) => {
                if (testName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTest',
            message: 'Would you like to add another item to the "Table of contents" section?',
            default: true, 
            when: ({ testConfirm }) => {
                if (testConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then (readmeData => {
        if (readmeData.confirmAddTest) {
            return promptTable(readmeData);
        } else {
            return readmeData;
        }
    })
};