const promptColab = () => {

    //colaborator credit section
return inquirer.prompt([    
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
])
.then(readmeData => {
    console.log(readmeData)
})


}       