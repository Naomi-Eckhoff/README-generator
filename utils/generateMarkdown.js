// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return ``;
  } else {
    return `![license badge](https://img.shields.io/badge/license-${license}-blue)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  switch (license) {
    case 'ISC':
      return `[ISC](https://choosealicense.com/licenses/isc/)`
      break;
    case 'MIT':
      return `[MIT](https://choosealicense.com/licenses/mit/)`;
      break;
    case 'GNUGPLv3':
      return `[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
      break;
    case 'GNUGPLv2':
      return `[GNUGPLv2](https://choosealicense.com/licenses/gpl-2.0/)`;
      break;
    case 'Apache2':
      return `[Apache2](https://choosealicense.com/licenses/apache-2.0/)`;
      break;
    case 'Unlicense':
      return `[Unlicense](https://choosealicense.com/licenses/unlicense/)`;
      break;
    default:
      return ``;
      break;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return ``;
  } else {
    return `## License
    
  This application is covered under the ${renderLicenseLink(license)} license.`;
  }
};




// TODO: Create a function to generate markdown for README
//used ternary operators instead of creating new functions
module.exports = answersArray => {
  return `
  # ${answersArray.title}
  ${renderLicenseBadge(answersArray.license)}
  ## Description

  ${answersArray.description}

  ${answersArray.confirmTOC ? `## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ` : ``}

  ## Installation

  ${answersArray.install}

  ## Usage

  ${answersArray.usage}
  ${answersArray.confirmScreenshot ? `
  ![application screenshot](./assets/images/screenshot.jpeg)` : ''}

  ${answersArray.collab || answersArray.thirdParty || answersArray.tutorials ? `## Credits` : ``}
  ${answersArray.collab ? `
  ${answersArray.collab}` : ``}
  ${answersArray.thirdParty ? `
  ${answersArray.thirdParty}` : ``}
  ${answersArray.tutorials ? `
  ${answersArray.tutorials}` : ``}

  ${renderLicenseSection(answersArray.license)}
  
  ${answersArray.badges ? `## Badges` : ``}

  ${answersArray.badges}

  ${answersArray.features ? `## Features` : ``}

  ${answersArray.features}

  ${answersArray.contributing ? `## Contributing` : ``}

  ${answersArray.contributing}

  ${answersArray.tests ? `## Tests` : ``}

  ${answersArray.tests}

  ## Questions

  Questions should be directed to [github.com/${answersArray.gitUserName}](github.com/${answersArray.gitUserName}) or emailed to ${answersArray.email}
  `;
};

