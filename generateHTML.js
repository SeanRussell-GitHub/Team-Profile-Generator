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
    <title> Team Profile </title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body style="background-color:#DEB887">
    <p class="title">    MY TEAM    </p>
    <header>
    <div class="column">
        <div class="card">
            ${manager.map(generateEmployees).join('')}
        </div>
    </div>
    <div class="column">    
        <div class="card">
            ${engineer.map(generateEmployees).join('')}
        </div>
    </div>
    <div class="column">
        <div class="card">
            ${intern.map(generateEmployees).join('')}
        </div>
    </div>    
    </body>
</html>    
    `
}

module.exports = {
    generateHTML
}