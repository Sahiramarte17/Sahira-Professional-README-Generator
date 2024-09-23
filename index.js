// Included packages required for this file.
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of the project, explaining the purpose of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description:",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for usage:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Explain the guidelines for contributing to this project:",
    },
    {
        type: "input",
        name: "test",
        message: "Explain the necessary steps to run the tests for your project:",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "MPL 2.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub profile link:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
    },
];

// Initializing app
function generateReadMe() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating READMEgenerator.md...");
        const readmeContent = `
# ${responses.title}
![GitHub license](https://img.shields.io/badge/license-${responses.license.replace(/ /g, '%20')}-blue.svg)

## Description
${responses.description}

## Installation
${responses.installation}

## Usage
${responses.usage}

## Contributing
${responses.contribution}

## Testing
${responses.test}

## License
This project is licensed under the ${responses.license}.

## Questions
Please send your questions [here](mailto:${responses.email}?subject=[GitHub]%20Dev%20Connect) or visit [GitHub/${responses.github.split('/').pop()}](https://github.com/${responses.github.split('/').pop()}).
`;

        fs.writeFile("READMEgenerator.md", readmeContent, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("READMEgenerator.md created successfully!");
        });
    });
}

generateReadMe();