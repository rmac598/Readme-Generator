// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project name?"
    },
    {
    type: "input",
    name: "description",
    message: "Write a description about your project."
    },
    {
        type: "input",
        name: "install",
        message: "What are required steps to install?"

    },
    {
        type: "input",
        name: "github",
        message: "What is your github address?"

    },
    {
        type: "checkbox",
        name: "language",
        message: "What languages did you use to make this project?",
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Node'],
    },
    {
        type: "checkbox",
        name: "license",
        message: "What licenses were used for this project?",
        choices: ['Apache 2.0', 'MIT', 'GPL 3.0', 'BSD 3' ],
    }
 

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const contents = generateMarkdown(data)
    //writes the file
    fs.writeFile(fileName, contents, (err) => {
        if (err) throw err;

});
}




// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
   
    writeToFile('./New_readme/readme.md', answers);  
    
}

// Function call to initialize app
init();
module.exports = writeToFile;