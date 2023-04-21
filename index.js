// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    message : "title of your project:",
    type : "input",
    name : "title",
},{
    message : "Description of your project:",
    type : "input",
    name : "description",

},{
    message : "Your email:",
    type : "input",
    name : "email",
},{
    message : "Github username:",
    type : "input",
    name : "username",
},{
    message : "Test instructions of your project:",
    type : "input",
    name : "test",
},{
    message : "installation instructions of your project:",
    type : "input",
    name : "installation",
},{
    message : "Usage information of your project:",
    type : "input",
    name : "usage",
},{
    message : "Contribution of your project:",
    type : "input",
    name : "contribution",
},{
    message : "license of your project:",
    type : "list",
    name : "license",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    text = generateMarkdown(data);
    fs.appendFile(fileName, text, (err) =>
        err ? console.log(err) : console.log("Successful!!!")
            );
}

// TODO: Create a function to initialize app
function init() {
    inquirer 
    .prompt(questions)
    .then((data) => {
        console.log(data);
        const fileName = `README_${data.username.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
