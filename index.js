const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log('hello');

const projectQuestions = () => {
    return inquirer.prompt ([
        {
        type: 'input',
            name: 'repo',
            message: 'What is your Github repo name? (Required)',
            validate: validateRepoInput => {
                if (validateRepoInput) {
                    return true;
                } else {
                    console.log('Please enter your Github repo name.');
                }
            }
        },
        {
            type: 'input',
                name: 'username',
                message: 'What is your Github username? (Required)',
                validate: validateUsernameInput => {
                    if (validateUsernameInput) {
                        return true;
                    } else {
                        console.log('Please enter your Github username.');
                    }
                }
            },
            {
                type: 'input',
                    name: 'project',
                    message: 'What is the name of your project? (Required)',
                    validate: validateProjectInput => {
                        if (validateProjectInput) {
                            return true;
                        } else {
                            console.log('Please enter your Github repo name.');
                        }
                    }
            },
            {
                type: 'input',
                name: 'info',
                message: 'Enter important information about your project (Required)',
                validate: infoInput => {
                  if (infoInput) {
                    return true;
                  } else {
                    console.log('Enter a description about your project');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'installation',
                message: 'Enter the installation instructions to your project (Required)',
                validate: installInput => {
                  if (installInput) {
                    return true;
                  } else {
                    console.log('Enter installation instructions for your project');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'usage',
                message: 'Provide a screen share link to display the usage of the application or N/A if not applicable',
                validate: usageInput => {
                  if (usageInput) {
                    return true;
                  } else {
                    console.log('A valid link for the usage of the application is required');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'contribution',
                message: 'Who contributed to the creation of the project? (Required)',
                validate: contributeInput => {
                  if (contributeInput) {
                    return true;
                  } else {
                    console.log('List the contributors to the project');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'email',
                message: 'What is your email address? (Required)',
                validate: emailInput => { 
                  if (emailInput) { 
                    return true;
                  } else {
                    console.log('Please enter your email address.');
                    return false;
                  }
                }
              },
              {
                type: 'checkbox',
                name: 'licensing',
                message: 'Select the following licenses used for the project (Multiple options may be selected)',
                choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'IBM', 'None']
              }
    ])
}


// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('./dist/README.md', data, error => {
      if (error) {
        console.log(error);
        return; 
      } else {
        console.log("README had been generated successfully")
      }
    })
  };
  
  
  async function init() {
    const feedback = await projectQuestions();
    const markdown = generateMarkdown(feedback);
    writeToFile(markdown);
  };

init();