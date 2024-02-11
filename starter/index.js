const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

function promptManager() {
  console.log('Please enter the details for the team manager:');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Manager's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Manager's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Manager's email:",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number:",
      },
    ])
    .then((managerData) => {
      const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
      teamMembers.push(manager);
      promptNextTeamMember();
    });
}

function promptNextTeamMember() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Choose the role of the next team member:',
        choices: ['Engineer', 'Intern', 'Finish building the team'],
      },
    ])
    .then((choice) => {
      switch (choice.role) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        case 'Finish building the team':
          writeToFile();
          break;
        default:
          break;
      }
    });
}

function promptEngineer() {
  console.log('Please enter the details for the engineer:');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Engineer's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Engineer's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Engineer's email:",
      },
      {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub username:",
      },
    ])
    .then((engineerData) => {
      const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
      teamMembers.push(engineer);
      promptNextTeamMember();
    });
}

function promptIntern() {
  console.log('Please enter the details for the intern:');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Intern's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Intern's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Intern's email:",
      },
      {
        type: 'input',
        name: 'school',
        message: "Intern's school:",
      },
    ])
    .then((internData) => {
      const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
      teamMembers.push(intern);
      promptNextTeamMember();
    });
}

function writeToFile() {
  const html = render(teamMembers);
  fs.writeFileSync(outputPath, html);
  console.log(`Team profile has been successfully generated at ${outputPath}`);
}

promptManager();