
// formats the data collected by the other functions and passes it to the write file function to be put into the readme
const READMEfile = projectData => {
    let colabMarkdown = ''; 
    let tableMarkdown = '';
    let licenseMarkdown = '';
    let badgeMarkdown = '';
    let featureMarkdown = '';
    let contribMarkdown = '';
    
    if (projectData.license) {
        license = '## License'
        projectData.license.forEach(element => {
            JSON.stringify(element.license)
            licenseMarkdown += `* ${element.license}`
        })
    } 
    
    if (projectData.table) {
        table = '## Table of contents';
        projectData.table.forEach(element => {
        tableMarkdown += `* [${element.table}](#${element.table})\n`    
        })
    } 
    if (projectData.colab) {
        colab = '## Credits'
        projectData.colab.forEach(element => {
        colabMarkdown +=  `* ${element.colabName}\n _${element.colabLink}_\n`
        })
    } 
    if (projectData.badge) {
        badge = '## Badges'
        projectData.badge.forEach(element => {
            badgeMarkdown += `${element}`
        })
    }
    if (projectData.contrib) {
        contrib = '## How to contribute!'
        projectData.contrib.forEach(element => {
            contribMarkdown += `* ${element}`
        })
    }
    if (projectData.feature) {
        feature = '## Features!'
        projectData.feature.forEach(element => {
            featureMarkdown += `* ${element}`
        })
    }

return `
# ${projectData.projectName}

${table}
${tableMarkdown}

## Description
_${projectData.deployedLink}_
${projectData.descrip}

## Install

${projectData.install}

## Usage
${projectData.usage}

${colab}
${colabMarkdown}

${license}
${licenseMarkdown}

${badge}
${badgeMarkdown}

${features}
${featureMarkdown}

${contrib}
${contribMarkdown}
`
}

module.exports = { READMEfile }