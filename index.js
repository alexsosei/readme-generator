const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
    type: "input",
    message: "What is the title of the project",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Kindly provide detailed description of the project ",
    name: "Description"
}, {
    type: "input",
    message: "If require, provide details of the installations requirere",
    name: "installation"
}, {
    type: "input",
    message: "Provide instructions and examples of your project in use",
    name: "usage"
}, {
    type: "list",
    message: "Select the license for the project",
    choices: ["Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "None"],
    name: "license"
}, {
    type: "input",
    message: "Explain how other developers can contribute to the project",
    name: "contributing"
}, {
    type: "input",
    message: "Provide tests conducted for project",
    name: "tests"
}, {
    type: "input",
    message: "Provide contact details in case users have questions",
    name: "questions"
}

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./docs/README.md", generateMarkdown({ ...responses }));
    });
  }
  init();