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
