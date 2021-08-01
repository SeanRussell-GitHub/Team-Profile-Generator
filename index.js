const empHandlr = require('./empHandlr');
const managersArr = empHandlr.managersArr;
const engineersArr = empHandlr.engineersArr;
const internsArr = empHandlr.internsArr;

async function init() {
    promptForManager();
}

init();



// const inquirer = require('inquirer');

// const generateHTML = require('./generateHTML');

// const employee = new Employee();

// let employeeArr = [];
// let managersArr = [];
// let engineersArr = [];
// let internsArr = [];


// get employee info

// first we will prompt user for information about the employee

// const promptEmpInfo = async () => {
//     const responses = await inquirer.prompt([
//         {
//             name: 'name',
//             message: 'What is the name of the employee?',
//             type: 'input'
//         }, {
//             name: 'id',
//             message: 'What is their employee id number?',
//             type: 'input'
//         }, {
//             name: 'email',
//             message: 'What is their email address?',
//             type: 'input'
//         }, {
//             name: 'role',
//             message: 'What is the role of this employee?',
//             type: 'list',
//             choices: ['Engineer', 'Intern']
//         }
//     ]);
//     if (responses.role === 'Engineer') {
//         promptEngInfo();
//     } else if (responses.role === 'Intern') {
//         promptIntInfo();
//     }
// }

// then we might prompt user for manager info

// const promptForManager = () => {
//     return inquirer.prompt([
//         {
//             name: 'name',
//             message: 'What is your name?',
//             type: 'input'
//         },{
//             name: 'id',
//             message: 'What is your employee id number?',
//             type: 'input'
//         },{
//             name: 'email',
//             message: 'What is your employee email address?',
//             type: 'input'        
//         },{
//             name: 'officeNum',
//             message: 'What is your office number?',
//             type: 'input'
//         },{
//             name: 'continue',
//             message: 'Would you like to add another employee?',
//             type: 'list',
//             choices: ['Yes', 'No']
//         }
//     ]).then(function (responses) {
//         if (responses.continue === 'Yes') {
//             promptEmpInfo();
//         }else if(responses.continue === 'No') {
//                 exit;
//             }
//         }
//     )
//     }
// or we prompt the user for information about the engineer's github id

// const promptEngInfo = async () => {
//     const responses = await inquirer.prompt([
//         {
//             name: 'github',
//             message: 'What is your Git Hub user name?',
//             type: 'input'
//         }, {
//             name: 'continue',
//             message: 'Would you like to add another employee?',
//             type: 'list',
//             choices: ['Yes', 'No']
//         }
//     ]);
//     if (responses.continue === 'Yes') {
//         promptEmpInfo();
//     } else if (responses.continue === 'No') {
//         console.log('DONE');
//     }}

// or we might prompt the user for information about the intern's school

// const promptIntInfo = async () => {
//     const responses = await inquirer.prompt([
//         {
//             name: 'school',
//             message: 'What school are you currently enrolled in?',
//             type: 'input'
//         }, {
//             name: 'continue',
//             message: 'Would you like to add another employee?',
//             type: 'list',
//             choices: ['Yes', 'No']
//         }
//     ]);
//     if (responses.continue === 'Yes') {
//         promptEmpInfo();
//     } else if (responses.continue === 'No') {
//         exit;
//     }
// }
// classes:

// class Team{
//     constructor(manager, engineers, interns){
//         manager = '';
//         engineers = [];
//         interns = [];
//     };
//     promptForManager(){

//     }

// }

// class Employee{
//         constructor(name, email, id, role){
//             this.name = name;
//             this.email = email;
//             this.id = id;
//             this.role = role;
//         }
//         promptEmpInfo = async () => {
//             const responses = await inquirer.prompt([
//                 {
//                     name: 'name',
//                     message: 'What is the name of the employee?',
//                     type: 'input'
//                 }, {
//                     name: 'id',
//                     message: 'What is their employee id number?',
//                     type: 'input'
//                 }, {
//                     name: 'email',
//                     message: 'What is their email address?',
//                     type: 'input'
//                 }, {
//                     name: 'role',
//                     message: 'What is the role of this employee?',
//                     type: 'list',
//                     choices: ['Engineer', 'Intern']
//                 }
//             ]);
//             if (responses.role === 'Engineer') {
//                 promptEngInfo();
//             } else if (responses.role === 'Intern') {
//                 promptIntInfo();
//             }
//         }}
 

// class Manager extends Employee{
//     constructor(name, email, id, role, officeNum){
//         super(name, email, id, role);
//         this.officeNum = officeNum;
//     }
//     promptForManager = async () => {
//         const responses = await inquirer.prompt([
//             {
//                 name: 'name',
//                 message: 'What is your name?',
//                 type: 'input'
//             }, {
//                 name: 'id',
//                 message: 'What is your employee id number?',
//                 type: 'input'
//             }, {
//                 name: 'email',
//                 message: 'What is your employee email address?',
//                 type: 'input'
//             }, {
//                 name: 'officeNum',
//                 message: 'What is your office number?',
//                 type: 'input'
//             }, {
//                 name: 'continue',
//                 message: 'Would you like to add another employee?',
//                 type: 'list',
//                 choices: ['Yes', 'No']
//             }
//         ]);
//         if (responses.continue === 'Yes') {
//             promptEmpInfo();
//         } else if (responses.continue === 'No') {
//             exit;
//         }
//         }
// }

// class Engineer extends Employee{
//     constructor(name, email, id, github){
//         super(name, email, id);
//         this.github = github;
//     }
//     promptEngInfo = async () => {
//         const responses = await inquirer.prompt([
//             {
//                 name: 'github',
//                 message: 'What is your Git Hub user name?',
//                 type: 'input'
//             }, {
//                 name: 'continue',
//                 message: 'Would you like to add another employee?',
//                 type: 'list',
//                 choices: ['Yes', 'No']
//             }
//         ]);
//         if (responses.continue === 'Yes') {
//             promptEmpInfo();
//         } else if (responses.continue === 'No') {
//             console.log('DONE');
//         }}
// }

// class Intern extends Employee{
//     constructor(name, email, id, school){
//         super(name, email, id);
//         this.school = school;
//     }
//     promptIntInfo = async () => {
//         const responses = await inquirer.prompt([
//             {
//                 name: 'school',
//                 message: 'What school are you currently enrolled in?',
//                 type: 'input'
//             }, {
//                 name: 'continue',
//                 message: 'Would you like to add another employee?',
//                 type: 'list',
//                 choices: ['Yes', 'No']
//             }
//         ]);
//         if (responses.continue === 'Yes') {
//             promptEmpInfo();
//         } else if (responses.continue === 'No') {
//             exit;
//         }
//     }
// }


// // const karen = new Manager('Karen', 'karen@email.com','1');
// // console.log(karen);


// module.exports = {
//     Manager,
//     Intern,
//     Team,
//     Engineer
// }

// // prompt for info
// promptEmpInfo();
// // generate website with it

