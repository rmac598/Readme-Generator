// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatieMarkdown
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project name?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
FileSystem.writeToFile(fileName, contents, (err) =>




// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    function writeToFile(fileName, data){
        const contents = generatieMarkdown(data)
    }
}

// Function call to initialize app
init();
