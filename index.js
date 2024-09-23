//Included packages required for this files.
const inquirer = require('inquirer');
const fs = require('fs');
const prompt = inquirer.createPromptModule();
//const generatorMarkdown = require("generateMarkdown.js");

//Aarray of questions for user input.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of the project, by explaining the WSH of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?, provide a step-by step description,",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instruction and exmaples for usage",
    },
    {
        type: "input",
        name: "contribution",
        message: "explain the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "test",
        message: "Explain the necessary steps to run the test for your project?",
    },

    {
        type: "list",
        name: "LICENSE",
        message: "which licence would you like to use for this project?",
        choices: ["MIT License", "Apache Licence 2.0", "MPL2.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "please enter your github profile Link",
    },
    { type: "input",
        name: "email",
        message: "please enter your email address",
    },

]

// Initializing app
function generateReadMe() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating README.md...");
      data = `# ${responses.title}
        ![Github license](https://img.shields.io/badge/license-${responses.license}-blue.svg) 
    ## Description
    ${responses.description}
    ## Deployed Application URL
    ${responses.link}
       ## Screenshot
    ![alt-text](${responses.screenshot})
    ## Table of Contents
    * [Features](#features)
    * [Languages & Dependencies](#languagesanddependencies)
    * [How to Use This Application](#HowtoUseThisApplication)
    * [Contributors](#contributors)
    * [Testing](#testing)
    * [Questions](#questions)
    ## Features
    ${responses.features}
    ## Languages & Dependencies
    ${responses.require}
    ## How to Use This Application:
    ${responses.usage}
    ## Contributors
    ${responses.contributors}
    ## Testing
    ${responses.test}
    ## Questionsx
    Please send your questions [here](mailto:${responses.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${responses.creator}](https://github.com/${responses.creator}).
    `
    return fs.writeFileSync('README.md', data)
});
}
generateReadMe();