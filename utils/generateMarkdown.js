function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  return "";
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  ##Description
  ${data.Description}
  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  The following necessary dependencies must be installed to run the application.
  ## Usage 
  In order to use this app, ${data.Usage}
  ## License
  This project is licensed under the ${data.License} license.
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Contributing
  Contributors: ${data.Contributing}
  ## Tests
  The following is needed to run the test: ${data.tests}
  ## Questions
  If you have any question about this repo, open an issue or contact ${data.Username}
  
`;
}

module.exports = generateMarkdown;
