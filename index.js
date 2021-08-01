const fs = require('fs');
const generateHTML = require('./generateHTML').generateHTML;
const empHandlr = require('./empHandlr');
const managersArr = empHandlr.managersArr;
const engineersArr = empHandlr.engineersArr;
const internsArr = empHandlr.internsArr;
const handleEmployee = empHandlr.handleEmployee;

function writeToFile(data) {
    fs.writeFile("index.html", data,
        (err) => err ? console.error(err) : console.log("index.html has been generated."))
}

async function init() {
    await handleEmployee();
    writeToFile(generateHTML(managersArr, engineersArr, internsArr));
}

init();