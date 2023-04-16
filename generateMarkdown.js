// Function that returns a licence badge based on which licence is passed in
// If there is no licence, return an empty string
function renderLicenceBadge(licence) {
  if (licence === "none") {
    return "";
  } else {
    return `![badge](https://img.shields.io/badge/license-${licence}-blue)`;
    ;
  }
}

// Function that returns the licence link
// If there is no licence, return an empty string
function renderLicenceLink(licence) {
  if (licence === "none") {
    return "";
  } else {
    return "-[Licence](#licence)";
  }
}

// Function that returns the licence section of README
// If there is no licence, return an empty string
function renderLicenceSection(licence) {
  if (licence === "none") {
    return "";
  } else {
    return `## Licence
  This project is protected under the ${licence} licence
      `;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenceBadge(data.licence)}

## Table of Contents:
-[Description](#description)
${renderLicenceLink(data.licence)}
-[Installation](#installation)
-[Usage](#usage)
-[Website Link](#website-link)
-[How to Contribute](#how-to-contribute)
-[Tests](#tests)
-[Questions](#questions)

## Description
${data.Description}

## Installation  
${data.Installation}

## Usage  
${data.Usage}

## Website Link
Link to the deployed site: [Deployed Site](${data.Website})

${renderLicenceSection(data.licence)}

## How to Contribute
${data.Contributing}

## Tests
${data.Tests}

## Questions
Please contact me for questions using the following links:
${data.Email}
[Git Hub](https://github.com/${data.Username})
`;
}

//You can export functions and values from a module using module.exports
module.exports = generateMarkdown;
