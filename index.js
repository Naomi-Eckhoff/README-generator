// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input


const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of this project?',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add a description of what this project is for.',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmTOC',
      message: 'Would you like to include a table of contents?',
      default: true
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do you install this project?',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Please enter installation instructions');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this project?',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter usage instructions');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmScreenshot',
      message: 'Would you like to include a screenshot',
      default: false
    },
    {
      type: 'input',
      name: 'collab',
      message: 'Name any collaborators (can be left blank)'

    },
    {
      type: 'input',
      name: 'thirdParty',
      message: 'Name the creators of any used 3rd party assets (can be left blank)'
    },
    {
      type: 'input',
      name: 'tutorials',
      message: 'Name any tutorials you used (can be left blank)'
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license applies to this project (can be left blank)'
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Name any badges you wan to use (can be left blank)'
    },
    {
      type: 'input',
      name: 'features',
      message: 'If there are a lot of features list them here (can be left blank)'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How should others contribute to this project (can be left blank)'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests to be used with this application (can be left blank)'
    },
  ]);
};

const readmeText = answersArray => {
  return `
  #${answersArray.title}

  ##Description

  ${answersArray.description}

  ${answersArray.confirmTOC ? `##Table of Contents` : ``}

  ##Installation

  ${answersArray.install}

  ##Usage

  ${answersArray.usage}
  ${answersArray.confirmScreenshot ? `![alt text](./assets/images/screenshot.jpeg)` : ''}

  ${answersArray.collab || answersArray.thirdParty || answersArray.tutorials ? `##Credits` : ``}
  ${answersArray.collab}
  ${answersArray.thirdParty}
  ${answersArray.tutorials}

  ##License

  ${answersArray.license}

  ${answersArray.badges ? `##Badges` : ``}

  ${answersArray.badges}

  ${answersArray.features ? `##Features` : ``}

  ${answersArray.features}

  ${answersArray.contributing ? `##Contributing` : ``}

  ${answersArray.contributing}

  ${answersArray.tests ? `##Tests` : ``}

  ${answersArray.tests}
  `;
};
// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

const writeToFile = content => {

}

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();
questions()
  .then(readmeText)
  .then(writeToFile);

