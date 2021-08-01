const empHandlr = require('./empHandlr');
const managersArr = empHandlr.managersArr;
const engineersArr = empHandlr.engineersArr;
const internsArr = empHandlr.internsArr;

function specificEmployeeHandler(employee) {
    if (employee.role === 'Manager') {
        return `Office Number: ${employee.officeNum}`;
    } else if (employee.role === 'Engineer') {
        return `Github: <a href="https://www.github.com/${employee.github}">${employee.github}</a>`;
    } else if (employee.role === 'Intern') {
        return `School: ${employee.school}`;
    }
}

function generateEmployees(employee) {
    return `<h1>${employee.role}</h1><ul><li>Name: ${employee.name}</li><li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li><li>Employee ID: ${employee.id}</li><li>${specificEmployeeHandler(employee)}</li></ul>`;
}

function generateHTML(manager, engineer, intern) {
    return `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <div>
            ${manager.map(generateEmployees).join('')}
        </div>
        <div>
            ${engineer.map(generateEmployees).join('')}
        </div>
        <div>
            ${intern.map(generateEmployees).join('')}
        </div>
        </body>
</html>    
    `
}

module.exports = {
    generateHTML
}