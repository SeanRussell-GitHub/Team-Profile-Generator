const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

let managersArr = [];
let engineersArr = [];
let internsArr = [];

class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
    }
}

class Manager extends Employee {
    constructor(name, email, id, role, officeNum) {
        super(name, email, id, role);
        this.officeNum = officeNum;
    }
    getRole() {
        return this.role;
    }
    getOfficeNum() {
        return this.officeNum;
    }
}

class Engineer extends Employee {
    constructor(name, email, id, role, github) {
        super(name, email, id, role);
        this.github = github;
    }
    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

class Intern extends Employee {
    constructor(name, email, id, role, school) {
        super(name, email, id, role);
        this.school = school;
    }
    getRole() {
        return this.role;
    }
    getSchool() {
        return this.school;
    }
}

function writeToFile() {
    fs.writeFile("index.html", generateHTML,
        (err) => err ? console.error(err) : console.log("HTML has been generated."))
}

function userInput() {
    return inquirer.prompt([
        {
            name: 'lastEntry',
            message: 'Will this be your last employee entry?',
            type: 'confirm',
        }
    ])
}

function promptForEmployee() {
    return inquirer.prompt([
        {
            name: 'role',
            message: 'What type of employee are you submitting?',
            type: 'list',
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            name: 'name',
            message: 'What is their name?',
            type: 'input',
        },
        {
            name: 'email',
            message: 'What is their email?',
            type: 'input',
        },
        {
            name: 'id',
            message: 'What is their employee ID?',
            type: 'input',
        },
    ])
}

function promptForManager() {
    return inquirer.prompt([
        {
            name: 'officeNum',
            message: 'What is their Office Number?',
            type: 'input',
        },
    ])
}

function promptForEngineer() {
    return inquirer.prompt([
        {
            name: 'github',
            message: 'What is their GitHub username?',
            type: 'input',
        },
    ])
}

function promptForIntern() {
    return inquirer.prompt([
        {
            name: 'school',
            message: 'What school are they going to?',
            type: 'input',
        },
    ])
}

async function handleEmployee() {
    let employeeAnswers = await promptForEmployee();
    let newEmployee = new Employee(employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, 'Employee');
    if (employeeAnswers.role === 'Manager') {
        let managerAnswers = await promptForManager();
        let newManager = new Manager(employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, employeeAnswers.role, managerAnswers.officeNum);
        managersArr.push(newManager);
    } else if (employeeAnswers.role === 'Engineer') {
        let engineerAnswers = await promptForEngineer();
        let newEngineer = new Engineer(employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, employeeAnswers.role, engineerAnswers.github);
        engineersArr.push(newEngineer);
    } else if (employeeAnswers.role === 'Intern') {
        let internAnswers = await promptForIntern();
        let newIntern = new Intern(employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, employeeAnswers.role, internAnswers.school);
        internsArr.push(newIntern);
    }
    let lastEntryQuestion = await userInput();
    if (!lastEntryQuestion.lastEntry) {
        await handleEmployee();
    } else if (lastEntryQuestion.lastEntry) {
        return;
    } else {
        console.log('There has been an error. Please run the application again.');
    }
}

module.exports = {
    Manager,
    Intern,
    Employee,
    Engineer,
    managersArr,
    engineersArr,
    internsArr,
    handleEmployee
}