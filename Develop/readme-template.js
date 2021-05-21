const projectName = projectData => {
    let projectNameData = projectData.projectName
    return projectNameData;
}

// formats the data collected by the other functions and passes it to the write file function to be put into the readme
const READMEfile = projectData => {
    let colabMarkdown = ''; 
    let colab = '## Credits\n' + colabMarkdown;
    let tableMarkdown = '';
    let table = '## Table of Contents\n' + tableMarkdown;
    // let licenseMarkdown = '';
    
    // if (projectData.license) {
    //     projectData.license.forEach(element => {
    //         JSON.stringify(element.license)
    //         licenseMarkdown += ` *${element.license}`
    //         var license = '## License\n' +licenseMarkdown;
    //     })
    // } else {
    //     var license
    // }
    
    if (projectData.table) {
        projectData.table.forEach(element => {
        tableMarkdown += `* [${element.table}](#${element.table})\n`    
        })
    } else {
        // var table
    }
    if (projectData.colab) {
        projectData.colab.forEach(element => {
        colabMarkdown +=  `* ${element.colabName}\n _${element.colabLink}_\n`
        })
    } else {
        // var colab
    }
    // if (projectData.colab) {
    //     projectData.colab.forEach(element => {
    //     colabMarkdown +=  `* ${element.colabName}\n _${element.colabLink}_\n`
    //     })
    // } else {
    //     colab = null
    // }
return `
# ${projectData.projectName}

## Description
_${projectData.deployedLink}_
${projectData.descrip}

${table}

## Install

${projectData.install}

## Usage

${projectData.usage}

${colab}



## Badges

${projectData.badge}

## Features

${projectData.feat}

## Contributors

${projectData.contrib}`
}

module.exports = {projectName, READMEfile}