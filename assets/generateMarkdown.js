// TODO Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const noLicense = "";
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else return noLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return `![Apache license website](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else return noLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache 2.0") {
    return "License warning";
  } else return noLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(information) {
  return `
 
  # Badge: ${renderLicenseBadge(information.license)}

  # Table of Contents
  *      1. [Description](#description)                            *
  *      2. [Technologies Used](#technologies-used)                *
  *      3. [Installation](#installation)                          *
  *      4. [Usage](#usage)                                        *
  *      5. [Contributions](#contribution)                         *
  *      6. [License](#license)                                    *
  *      7. [Screenshots]                                          *
  *      8. [Testing Instructions](#testing-instructions)          *
  *      9. [Contact Information]                                  *
***


##Project Name
 ${information.name}

##Project Description

${information.description}

#Technologies Used
${information.technology}

##Installation
${information.installation}

##Usage
${information.usage}

##Contribution
${information.contribution}

##Screenshots
${information.generateMarkdown}
${information.ReadMe}

##License
${renderLicenseSection(information.license)}
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

##Contact information

![GitHub]	(/github/followers/:user?label=Follow )                                                                    ${
    information.github
  }
E-mail:![E-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)           ${
    information.email
  }
Linkedn![Linkedn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)    ${
    information.linkedin
  }
Twitter![Twitter](https://img.shields.io/twitter/url?style=social)                                                   ${
    information.twitter
  }
Slack![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)              ${
    information.slack
  }

##Test
${information.test}

<Happy Coding

`;
}

module.exports = generateMarkdown;
