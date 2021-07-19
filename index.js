const inquirer = require('inquirer');
const generateHTMLjs = require('./generateHTML');
const generateHTML = generateHTMLjs.generateHTML;

let managersArr = [];
let engineersArr = [];
let internsArr = [];

// get employee info

// everything has to be a part of the class

// first we will prompt user for information about the employee

const promptUser = () => {
    return inquirer.prompt([
      {
      }
    ])
}

// then we will prompt the user for information about the engineers

// then we will prompt the user for information about the intern


// classes:

class Team{
    constructor(){
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
        getRole(){
            return this.role;
        }
}


class Manager extends Employee{
    constructor(name, email, id, role, officeNum){
        super(name, email, id, role);
        this.officeNum = officeNum;
    }
}

class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
    }
}

class Intern extends Employee{
    constructor(name, email, id, school){
        super(name, email, id);
        this.school = school;
    }
}


const karen = new Manager('Karen', 'karen@email.com','1');
console.log(karen);


module.exports = {
    Manager,
    Intern,
    Team,
    Engineer
}

// generate website with it

