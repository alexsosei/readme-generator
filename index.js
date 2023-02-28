const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the title of the project",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Kindly provide detailed description of the project ",
    name: "Description"
}, {
    type: "input",
    message: "Table of content",
    name: "Table of Content"
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
    Selection: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
    fs.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been reliably generated");
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
function init() {
    try {
        const data = inquirer.prompt(questions);
        console.log("Your responses:", data);
        console.log("Thank you for your response! Wait for program to initialise...");
        
}
catch (error) {
    console.log(error);
}

// function call to initialize program
const userInfo = api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(data, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        writeFileAsync('ExampleREADME.md', markdown);

};

init();