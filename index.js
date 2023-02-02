//DEFINE VARIABLES
const inquirer = require("inquirer");
const fs = require("fs");
//import inquirer from "inquirer";
//import fs from "fs";

//it is calling generate markdown.js file
const generateMarkdown = require("./assets/generateMarkdown");

let questions = [
  /* Pass your questions in here */
  {
    type: "input",
    name: "name",
    message: "Project name",
  },
  {
    type: "input",
    name: "description",
    message: "Project Description",
  },
  {
    type: `checkbox`,
    message: `What Technologies were used?`,
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "BootStrap",
      "md Cheat Sheet",
      "JQuery",
      "Node.JS",
    ],
    name: `technology`,
  },
  {
    type: "input",
    name: "installation",
    message: "What did you install?",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage",
  },
  {
    type: "input",
    name: "contribution",
    message: "contribution",
  },
  {
    type: "input",
    name: "license",
    message: "License",
    choices: ["Please provide the project licence or your badge link"],
  },

  {
    type: "input",
    message: "Please state provide a screenshot.",
    name: "generateMarkdown",
  },
  {
    type: "input",
    message: "Please state provide a screenshot.",
    name: "ReadMe",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Url",
  },
  {
    type: "input",
    name: "linkedin",
    message: "Enter your LinkedIn URL.",
  },
  {
    type: "input",
    name: "twitter",
    message: "Enter your  Twitter account Url",
  },
  {
    type: "input",
    name: "slack",
    message: "What is your Slack account name?",
  },
  {
    type: "input",
    name: "test",
    message: "Did you test your application?",
  },
];

//Create function to write README.md file

//Callback function

inquirer.prompt(questions).then(function (information) {
  console.log(information);
  let content = generateMarkdown(information);
  console.log(content);
  fs.writeFile("README.md", content, function (err) {
    if (err) throw err;
    console.log("You generated README.md Successful!");
  });
});
