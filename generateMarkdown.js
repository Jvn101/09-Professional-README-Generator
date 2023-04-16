// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return "-[Licence](#licence)";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License
  This project is protected under the ${license} license
      `;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents:
-[Description](#description)
${renderLicenseLink(data.license)}
-[Installation](#installation)
-[Usage](#usage)
-[Website Link](#website-link)
-[How to Contribute](#how-to-contribute)
-[Tests](#tests)
-[Questions](#questions)

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
${data.Tests}

## Questions
Please contact me for questions using the following links:
${data.Email}
https://github.com/${data.Username}
`;
}

//You can export functions and values from a module using module.exports
module.exports = generateMarkdown;
