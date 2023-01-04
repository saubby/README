const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
//const util = require("util");
const { reject, fail } = require('assert');



const Que = [
    {
        type: "input",
        message: "what is the name of your Project?",
        name: "Title",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'confirm',
        message: 'Would you like to add a license?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0', 'GNU GPLv3', 'Apache License 2.0'],
        when: ({ confirm }) => {
            if (confirm) {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "please provide steps to install application",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "usage",
        message: "Describe the process of execution of an application.",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "contribution",
        message: "Name of the contributors of this project",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "tests",
        message: "tests are included?",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "questions",
        message: "Do you have any doubt?",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "username",
        message: "Your Github username",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "email",
        message: "your email id",
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return false;
            }
        }
    }
]


const inputFile = acknowledge => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', acknowledge, er => {
            if (er) {
                reject(er);
                return;
            }
            resolve({
                ok: true,
                message: console.log('README file created successfully!')
            });
        })
    })
}

const newfile = () => {

    return inquirer.prompt(Que);
}


newfile()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(readmeDesc => {
        return inputFile(readmeDesc)
    })
    .catch(er => {
        console.log(er);
    })