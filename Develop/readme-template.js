
// formats the data collected by the other functions and passes it to the write file function to be put into the readme
const READMEfile = projectData => {
    // empty strings so false sections dont throw erros.
    let colabMarkdown = ''; 
    let tableMarkdown = '';
    let licenseMarkdown = '';
    let badgeMarkdown = '';
    let featureMarkdown = '';
    let contribMarkdown = '';
    let installMarkdown = '';
    let usageMarkdown = '';

    //if these blocks of data are present these statments creat the sections and underlying items.
    if (projectData.license) {
        license = '## License'
        projectData.license.forEach(element => {
            JSON.stringify(element.license)
            licenseMarkdown += `* ${element.license} `
        })
    } else {
        license = '';
    }
    
    if (projectData.table) {
        table = '## Table of Contents';
        projectData.table.forEach(element => {
        tableMarkdown += `* [${element.table}](#${element.table})\n`    
        })
    } else {
        table = '';
    }
    if (projectData.colab) {
        colab = '## Credits'
        projectData.colab.forEach(element => {
        colabMarkdown +=  `* ${element.colabName}\n _${element.colabLink}_\n`
        })
    } else {
        colab = '';
    }
    if (projectData.badge) {
        badge = '## Badges'
        projectData.badge.forEach(element => {
            JSON.stringify(element.badge);
            badgeMarkdown += `${element} `
        })
    } else {
        badge = '';
    }
    if (projectData.contrib) {
        contrib = '## How to Contribute!'
        projectData.contrib.forEach(element => {
            contribMarkdown += `* ${element}\n`
        })
    } else {
        contrib = '';
    }
    if (projectData.feature) {
        features = '## Features!'
        projectData.feature.forEach(element => {
            featureMarkdown += `* ${element}\n`
        })
    } else {
        features = '';
    }
    if (projectData.inst) {
        install = "## Install Instructions!"
        projectData.inst.forEach(element => {
            installMarkdown += `* ${element.install}\n`
        })
    } else {
        install = '';
    }
    if (projectData.usage) {
        usage = '## Usage Instructions!'
        projectData.usage.forEach(element => {
            usageMarkdown += `* ${element.usage}\n`
        })
    } else {
        usage = '';
    }

return `
# ${projectData.projectName}

${table}
${tableMarkdown}
## Description
_${projectData.deployedLink}_
${projectData.descrip}
${install}
${installMarkdown}
${usage}
${usageMarkdown}
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