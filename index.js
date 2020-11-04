// Variables to call modules and fs
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

// Variables to acquire generateMarkdown file and README file
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
      message: "What is your name, first and last?",
    },
    {
      type: "input",
      name: "username",
      message: "Input your GitHub Username.",
    },
    {
      type: "input",
      name: "email",
      message: "Input your e-mail here.",
    },
    {
      type: "checkbox",
      name: "licenseBadge",
      message: "Pick a license for this application.",
      choices: [
        {
          name: "MIT",
          value: "MIT",
        },
        {
          name: "Apache",
          value: "Apache",
        },
      ],
      default: ["MIT"],
    },
    {
        type: "checkbox",
        name: "license",
        message: "Pick a license to display at the bottom of markdown.",
        choices: [
          {
            name: "MIT",
            value: "https://opensource.org/licenses/MIT",
          },
          {
            name: "Apache",
            value: "https://www.apache.org/licenses/LICENSE-2.0",
          },
        ],
        default: ["MIT"],
      },
  ]);

// function call to initialize program and generate README file
questions()
  .then((data) => writeFileAsync("EXAMPLE-README.md", generateMarkdown(data)))
  .then(() => console.log("Successfully wrote to md file"))
  .catch((err) => console.error(err));
