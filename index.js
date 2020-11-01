const fs = require("fs");
const inquirer = require("inquirer");
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
        type: 'input',
        name: 'description',
        message: 'Write a description of your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does a user install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can a user contribute to your application?',
    }
    {
        type: 'input',
        name: 'test',
        message: 'How can a user test your application?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where can a user reach you for questions on your application? Include GitHub user name.',
    },
    // TODO: include an option for user to pick of licenses
  ]);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
