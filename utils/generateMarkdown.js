// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // switch(license){

  // }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

  ## Tests
  ${data.tests}

  ## Author
  Contact me at ${data.email} or at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
