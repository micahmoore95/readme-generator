// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ''
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ''
  } else if (license === 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Mozilla Public") {
    return "https://opensource.org/licenses/MPL-2.0"
  } else if (license === "GNU-General-Public") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0"
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "Project does not require or have a license"
  } else {
    return `License for the project is: ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  
  ${renderLicenseBadge(data.license)}
  ## DESCRIPTION
  ${data.info}
  ## TABLE OF CONTENTS
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license) 
  [Contributing](#contributing)   
  [Questions](#questions)
  
  ## INSTALLATION
  ${data.installation}
  ## USAGE
  ${data.usage}
  ## CONTRIBUTING
  ${data.contribution}
  ## LICENSE
  ${renderLicenseSection(data.licensing)}
  ${renderLicenseLink(data.licensing)}
  ## QUESTIONS
  GITHUB: https://github.com/${data.username}
  EMAIL: ${data.email}


`;
}

module.exports = generateMarkdown;
