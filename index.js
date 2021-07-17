// get employee info

// everything has to be a part of the class

// first we will prompt user for information about the employee

// then we will prompt the user for information about the engineers

// then we will prompt the user for information about the intern


// classes:

class Employee{
        constructor(name, email, id, role){
            this.name =name;
            this.email = email;
            this.id = id;
            this.role = role;
        }

}

class Team{
    constructor();
    manager = '';
    engineers = [];
    interns = [];
    promptForManager(){

    }
}

class Manager extends Employee{
    constructor(name, email, id){
        super(name, email, id);
    }
}

class Engineer extends Employee{
    constructor(name, email, id){
        super(name, email, id);
        this.github = github;
    }
}

class Intern extends Intern{
    constructor(name, email, id){
        super(name, email, id);
        this.school = school;
    }
}


const karen = new Manager('Kare', 'karen@email.com','1');
console.log(karen);

// generate website with it

module.exports = {
    Manager,
    Engineer,
    Intern
}