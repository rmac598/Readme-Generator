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
   
    writeToFile('readme.md', answers);  
    
}

// Function call to initialize app
init();
module.exports = writeToFile;