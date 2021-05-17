// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateReadme = require('./readme-template')


// TODO: Create an array of questions for user input
const promptUser = () => {
    
    console.log(`
    ========================================
    Readme file creation protocal initiated!
    ========================================
    `);
    return inquirer.prompt([
        //author section
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
        // install instructions section
        {
            type: 'input',
            name: 'install',
            message: 'Please provide any special install instructions for your application!'
        },
        
        // usage section
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use your application! (required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
    
}


        //colaborator credit section
        
        {
            type: 'confirm',
            name: 'colab',
            message: 'Would you like to add a colaborator?',
            default: true
        },
        {
            type: 'input',
            name: 'colabName',
            message: 'What is the name of your colaborator? (Required)',
            when: ({ colab }) => {
                if (colab) {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ featName }) => {
                if (featName) {
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
        
        
        //asset, creator, and link to primary web presence
        // tutorials used, link
        
        // license(s) section
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select a license option.',
            choices: ['', '', '', '']
        },
        //badges section
        {
            type: 'confirm',
            name: 'badgeConfirm',
            message: 'Would you like to add some badges?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'badge',
            message: 'Please select the badge(s) you would like to add!',
            choices: ['','',''],
            when: ({ badgeConfirm }) => {
                if (badgeConfirm) {
                    return true;
                } else { 
                    return false;
                }
            }
        },
        // features section
        {
            type: 'confirm',
            name: 'featCon',
            message: 'Would you like to add a features section?',
            default: true
        },
        {
            type: 'input',
            name: 'featName',
            message: 'What is your feature called? (Required)',
            when: ({ featCon }) => {
                if (featCon) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: featCon => {
                if (featCon) {
                    return true;
                } else {
                    console.log('What is your feature called?!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'featDes',
            message: 'Please describe what your feature! (Required)',
            when: ({ featName }) => {
                if (featName) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please describe what your feature! (Required)')
                    return false;
                }
            }
        },
        //Contributing section
        {
            type: 'confirm',
            name: 'contribConfirm',
            message: 'Would you like to add instructions for contributors?',
            default: true
        },
        {
            type: 'input',
            name: 'colabName',
            message: 'What is the contributors name? (Required)',
            when: ({ featCon }) => {
                if (featCon) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'colabDes',
            message: 'Please describe your feature!',
            when: ({ featName }) => {
                if (featName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        
        
        
    ])
    .then(readmeData => {
        console.log(readmeData);
        // readmeData.readme.push()
    })
}

// table of contents section
const promptTable = () => {
    
    console.log(`
    =====================================
    Add an item to the table of contents!
    =====================================
    `);
    
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to add and item to the "Table of contents" section?',
            default: true
        },
        {
            type: 'input',
            name: 'table',
            message: 'Provide the name of a section to add to the table of contents',
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
            default: true 
        }
    ])
    .then (readmeData => {
        if (readmeData.confirmAddTable) {
            return promptTable(readmeData);
        } else {
            return readmeData;
        }
    })
};

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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser();
    // .then(readmeData => {
    //     const readmePage = generateReadme(readmeData);

    //     // fs.writeFile('./readme.md', readmePage, err => {
    //     //     if (err) throw new Error(err);

    //     //     console.log('Your Readme file has been created! checkout readme.md in this directory to see it!');
    //     // });

    // })
