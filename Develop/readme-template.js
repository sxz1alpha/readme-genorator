module.exports = templateData => {
    console.log(templateData);

    return `
    # ${templateData.projectName}
    
    ## Description
    
    ${templateData.Description}
    
    ## Table of Contents
    
    ${templateData.table}
    
    ## Install
    
    ${templateData.install}
    
    ## Usage
    
    ${templateData.usage}
    
    ## Credits
    
    ${templateData.colab}
    
    ## License
    
    ${templateData.license}
    
    ## Badges
    
    ${templateData.badge}
    
    ## Features
    
    ${templateData.feat}
    
    ## Contributors
    
    ${templateData.contrib}`
}