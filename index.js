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
        message: "What is the name of the project Title?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description, by explaining the WSH of your project?",
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
        choices: ["MIT License", "Apache Licence 2.0", "None"],
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