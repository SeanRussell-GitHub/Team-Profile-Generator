const empHandlr = require('./empHandlr');
const managersArr = empHandlr.managersArr;
const engineersArr = empHandlr.engineersArr;
const internsArr = empHandlr.internsArr;


function generateEmployees(employee){
    return `<h1>${employee.role}<h1><ul><li>${employee.name}</li><li></li></ul>`;
}


function generateHTML(manager, engineer, intern){
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
            <h2>Manager</h2>
            ${manager.map(generateEmployees)}
        </div>
        <div>
            <h2>Engineers</h2> 
            ${engineer.map(generateEmployees)}
        </div>
        <div>
            <h2>Interns</h2> 
            ${intern.map(generateEmployees)}
        </div>
        </body>
</html>    
    `
}



module.exports = {
    generateHTML
}