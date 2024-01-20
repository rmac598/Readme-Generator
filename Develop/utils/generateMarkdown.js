// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "APACHE 2.0") {
    return `![Static Badge](https://img.shields.io/badge/license-Apache2.0-brightgreen)`
    
  }
  if (license == "MIT") {
    return `![Static Badge](https://img.shields.io/badge/license-mit-brightgreen)`
    
  }
  if (license == "GPL 3.0") {
    return `![Static Badge](https://img.shields.io/badge/license-GPL3.0-brightgreen)`
    
  }
  if (license == "BSD 3") {
    return `![Static Badge](https://img.shields.io/badge/license-BSD3-brightgreen)`
    
  }
  if (license == "None") {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[https://choosealicense.com/] (htttps://choosalicense.com/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


 
## Description



${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.install}

## The languages used in this project are:
${data.language}


## Credits

Github profile: ${data.github}

## License

${data.license}
${renderLicenseBadge(data.license.choices)}
## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
