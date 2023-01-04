const fs = require('fs');

function renderLicenseBadge(license) {
    if (!license) {
        return ``;
    }
    else {
        return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)]
        (${renderLicenseLink(license)})`

    }
}


function renderLicenseLink(license) {

    if (license === 'GPL') {
        return `http://perso.crans.org/besson/LICENSE.html`
    }
    if (license === 'CC--0') {
        return `https://creativecommons.org/licenses/by-nd/4.0`
    }
    if (license === 'MIT') {
        return `https://lbesson.mit-license.org/`
    }
    if (license === 'GNU GPLv3') {
        return 'https://choosealicense.com/licenses/gpl-3.0/'
    }
    if (license === 'Apache License 2.0') {
        return 'https://choosealicense.com/licenses/apache-2.0/'
    }
}


function renderLicenseSection(license) {

    if (!license) {
        return ``;
    }
    else {
        return `##License
        This project is licensed as ${license}
        `
    }
}


function Ans(acknowledge) {
    return ` 
    
    # ${acknowledge.Title}

      ${renderLicenseBadge(acknowledge.license)}

    #Table of content
    *[Description](#description)
    *[License](#license)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contribution](#contribution)
    *[Tests](#tests)
    *[Questions](#questions)
   
    ## Description
    ${acknowledge.description}

    ${renderLicenseSection(acknowledge.license)}
    
    ## Installation
    ${acknowledge.installation}

    ## Usage
    ${acknowledge.usage}

    ## Contribution
    ${acknowledge.contribution}
    
    ## Tests
    ${acknowledge.tests}
    
    ## Questions
    ${acknowledge.questions}
    Contact Info:
    GitHub: [${acknowledge.username}](https://github.com/${acknowledge.username})
    Email: [${acknowledge.email}](mailto:${acknowledge.email})`;

}

module.exports = Ans;