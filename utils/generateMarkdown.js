
// TODO: Create a function to generate markdown for README
class MarkDown {
  static renderLicenseBadge(license) {
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    }
    return badges[license]
  }
  static renderLicenseLink(license) {
    const licenseLink = {
      mit: '[MIT](https://opensource.org/licenses/MIT)',
      isc: '[ISC](https://opensource.org/licenses/ISC)',
      GNUGPLv3: '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
    }
    return licenseLink[license]
  }
  static renderLicenseSection(license) {
    if(license) {
    return `Licensed under the ${this.renderLicenseLink(license)} license`
  } else {
    return ''
  }
}


static generateMarkdown(data) {
  return `
# ${data.title}

${this.renderLicenseBadge(data.license)}


## Table of Contents 
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Installation](#Installation)
  - [TestInstructions](#TestInstructions)
  - [Questions](#Questions)
  - [License](#License)

## Description
${data.description}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Installation 
${data.installation}

## Test Instructions
${data.testinstructions}

## Questions
${data.email}
${data.github}

## License 
${this.renderLicenseSection(data.license)}
`;

}
}

module.exports = MarkDown;
