const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your projects title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your application.",
    },
    {
      type: "input",
      name: "installation",
      message: "How does a user install your application?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of your application?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can a user contribute to your application?",
    },
    {
      type: "input",
      name: "test",
      message: "How can a user test your application?",
    },
    {
      type: "input",
      name: "name",
      message:
        "What is your name, first and last?",
    },
    { 
        type: "input", 
        name: "username", 
        message: "Input your GitHub Username.", 
    },
    {
        type: "input",
        name: "userlink",
        message: "Input GitHub link here",
    },
    {
        type: "input",
        name: "email",
        message: "Input your e-mail here.",
    },
    {
      type: "list",
      name: "license",
      message: "Pick a license for this application.",
      choices: [
        "MIT License",
        "Apache License",
        "GPL License",
        "Other-Input Manually",
      ],
    },
  ]);

// function to write README file
// function writeToFile("README.md", generateMarkdown data) {}

// function to initialize program
// function init() {}

// function call to initialize program
// init();
questions()
  .then((data) => writeFileAsync("readme-practice.md", generateMarkdown(data)))
  .then(() => console.log("Successfully wrote to md file"))
  .catch((err) => console.error(err));
