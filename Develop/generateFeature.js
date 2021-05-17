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