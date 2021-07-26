
function generateManagers(manager){
    return `${manager.role}`;
}

function generateEngineers(engineer){
    return `${engineer.role}`;
}

function generateInterns(intern){
    return `${intern.role}`;
}


function generateHTML(managers, engineers, interns){
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
            ${managers.map(generateManagers)}
        </div>
        <div>
            <h2>Engineers</h2> 
            ${engineers.map(generateEngineers)}
        </div>
        <div>
            <h2>Interns</h2> 
            ${interns.map(generateInterns)}
        </div>
        </body>
</html>    
    `
}



module.exports = {
    generateManagers,
    generateEngineers,
    generateInterns,
    generateHTML
}