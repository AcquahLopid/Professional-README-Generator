// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
  case "Apache License 2.0": return `![${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  case "MIT License": return `![${license}](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  case "GNU General Public License v3.0": return `![${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  default: return "";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch(license){
  case "Apache License 2.0": return "https://choosealicense.com/licenses/apache-2.0/";
  case "MIT License": return "https://choosealicense.com/licenses/mit/";
  case "GNU General Public License v3.0": return "https://choosealicense.com/licenses/gpl-3.0/";
  default: return "";
}
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "N/A"){
  return `## License <br/> licensed by [${license}](${renderLicenseLink(license)}).`
} else{
  return "";
}
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table Of Contents
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Tests](#Tests)
  *[Contributions](#Contributions)
  *[Author](#Author)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Author
  Contact me at ${data.email} or at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
