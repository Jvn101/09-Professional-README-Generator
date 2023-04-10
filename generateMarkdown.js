// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none')  {
    return //https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("LICENSE INSIDE LINK>>>>>",license)
  if (license === 'none')  {
    return ""
  } else {
    return "-[Licence](#licence)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ""
    } else {
      return `# License
      This project is protected under the ${license} license
      `;
    }
}

// TODO: Create a function to generate markdown for README3
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents:
-[Description](#description)
${renderLicenseLink(data.license)}
-[Description](#description)
-[Website Link](#Website Link)

## Description
${data.Description}
${data.Contents}

## Installation  
${data.Installation}

## Usage  
${data.Usage}

## Website Link
Link to the deployed site: [Deployed Site](${data.WebsiteLink})

${renderLicenseSection(data.license)}

## How to Contribute
${data.Contributing}

## Tests
Tests for the project:

## Questions
Please contact me for questions using the following links
${data.Email}
https://github.com/${data.Username}
`;
}

//You can export functions and values from a module using module.exports
module.exports = generateMarkdown;
