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