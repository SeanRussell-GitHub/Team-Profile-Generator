const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

// const employee = new Employee();

// let employeeArr = [];
// let managersArr = [];
// let engineersArr = [];
// let internsArr = [];

class Team{
    constructor(manager, engineers, interns){
        manager = '';
        engineers = [];
        interns = [];
    };
    promptForManager(){
    }
}

class Employee{
        constructor(name, email, id, role){
            this.name = name;
            this.email = email;
            this.id = id;
            this.role = role;
        }
        getName(){
            return this.name;
        }
        getEmail(){
            return this.email;
        }
        getId(){
            return this.id;
        }
        getRole(){
            return this.role;
        }
}
    
    
class Manager extends Employee{
        constructor(name, email, id, role, officeNum){
            super(name, email, id, role);
            this.officeNum = officeNum;
        }
        getRole(){
            return this.role;
        }
        getOfficeNum(){
            return this.officeNum;
        }
}

class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
    }
        getRole(){
            return this.role;
        }
        getGithub(){
            return this.github;
        }
}

class Intern extends Employee{
    constructor(name, email, id, school){
        super(name, email, id);
        this.school = school;
    }
    getRole(){
        return this.role;
    }
    getSchool(){
        return this.school;
    }
}


function writeToFile() {
    fs.writeFile("index.html", "ugh", 
    (err) => err ? console.error(err) : console.log("HTML has been generated."))
}

    
promptForManager = async () => {
        const responses = await inquirer.prompt([
            {
                name: 'name',
                message: 'What is your name?',
                type: 'input'
            }, {
                name: 'id',
                message: 'What is your employee id number?',
                type: 'input'
            }, {
                name: 'email',
                message: 'What is your employee email address?',
                type: 'input'
            }, {
                name: 'officeNum',
                message: 'What is your office number?',
                type: 'input'
            }, {
                name: 'continue',
                message: 'Would you like to add another employee?',
                type: 'list',
                choices: ['Yes', 'No']
            }
        ]);
        if (responses.continue === 'Yes') {
            promptEmpInfo();
        } else if (responses.continue === 'No') {
            writeToFile();
        }
}
    
promptEmpInfo = async () => {
        const responses = await inquirer.prompt([
            {
                name: 'name',
                message: 'What is the name of the employee?',
                type: 'input'
            }, {
                name: 'id',
                message: 'What is their employee id number?',
                type: 'input'
            }, {
                name: 'email',
                message: 'What is their email address?',
                type: 'input'
            }, {
                name: 'role',
                message: 'What is the role of this employee?',
                type: 'list',
                choices: ['Engineer', 'Intern']
            }
        ]);
        if (responses.role === 'Engineer') {
            promptEngInfo();
        } else if (responses.role === 'Intern') {
            promptIntInfo();
        }
}

promptEngInfo = async () => {
    const responses = await inquirer.prompt([
        {
            name: 'github',
            message: 'What is your Git Hub user name?',
            type: 'input'
        }, {
            name: 'continue',
            message: 'Would you like to add another employee?',
            type: 'list',
            choices: ['Yes', 'No']
        }
    ]);
    if (responses.continue === 'Yes') {
        promptEmpInfo();
    } else if (responses.continue === 'No') {
        console.log('DONE');
    }}

promptIntInfo = async () => {
        const responses = await inquirer.prompt([
            {
                name: 'school',
                message: 'What school are you currently enrolled in?',
                type: 'input'
            }, {
                name: 'continue',
                message: 'Would you like to add another employee?',
                type: 'list',
                choices: ['Yes', 'No']
            }
        ]);
        if (responses.continue === 'Yes') {
            promptEmpInfo();
        } else if (responses.continue === 'No') {
            writeToFile();
        }
}


// const karen = new Manager('Karen', 'karen@email.com','1');
// console.log(karen);


module.exports = {
    promptForManager,
    Manager,
    Intern,
    Team,
    Employee,
    Engineer,
}

// prompt for info
// promptEmpInfo();
// generate website with it

