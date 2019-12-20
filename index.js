const orm = require("./config/orm.js");
const inquirer = require("inquirer");

// Start program by displaying the employees, then give user list of options for what to do next:
// View employees, view departments, view roles, add employee, add department, add role, update role, update manager, 
// view employees by department, view employees by manager, delete employee, delete role, delete department, quit

function mainMenu() {
    inquirer.prompt({
        type: "list",
        message: "Choose what you would like to do",
        choices: [
            "View employees",
            "View departments",
            "View roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update role",
            "Update manager",
            "Display employees by department",
            "Display employees by manager",
            "Delete an employee",
            "Delete a role",
            "Delete a department",
            "Quit"
        ],
        name: "choice"
    }).then(function({ choice }) {
        if (choice === "View employees") {
            orm.viewEmployees()
            .then(function() {
                console.log("\n");
                mainMenu();
            });
        } else if (choice === "View departments") {
            orm.viewDepartments()
            .then(function() {
                console.log("\n");
                mainMenu();
            });
        } else if (choice === "View roles") {
            orm.viewRoles()
            .then(function() {
                console.log("\n");
                mainMenu();
            });
        } else if (choice === "Add employee") {
            addEmployeePrompt();
        } else if (choice === "Update role") {
            updateRolePrompt();
        } else {
            orm.endConnection();
        }
    });
}

function addEmployeePrompt() {
    orm.getEmployees()
    .then(function(res) {
        const managerArray = [];
        for (let i=0; i<res.length; i++) {
            managerArray.push(res[i].name);
        }
        managerArray.push("none");
        orm.getRoles()
        .then(function(response) {
            const roleTitleArray = [];
            for (let i=0; i<response.length; i++) {
                roleTitleArray.push(response[i].title);
            }
            inquirer.prompt([{
                type: "input",
                message: "Enter employee's first name",
                name: "firstName"
            },
            {
                type: "input",
                message: "Enter employee's last name",
                name: "lastName"
            },
            {
                type: "list",
                message: "Select employee's role",
                choices: roleTitleArray,
                name: "role"
            },
            {
                type: "list",
                message: "Select employee's manager",
                choices: managerArray,
                name: "manager"
            }]).then(function({firstName, lastName, role, manager}) {
                const roleId = response[roleTitleArray.indexOf(role)].id;
                if (manager === "none") {
                    orm.addEmployee(firstName, lastName, roleId)
                    .then(function() {
                        console.log("\n");
                        mainMenu();
                    });
                } else {
                    const managerId = res[managerArray.indexOf(manager)].id;
                    orm.addEmployee(firstName, lastName, roleId, managerId)
                    .then(function() {
                        console.log("\n");
                        mainMenu();
                    })
                }
            });
    });
    })
}

function updateRolePrompt() {
    orm.getEmployees()
    .then(function(res) {
        const empArray = [];
        for (let i=0; i<res.length; i++) {
            empArray.push(res[i].name);
        }
        orm.getRoles()
        .then(function(response) {
            const roleArray = [];
            for (let i=0; i<response.length; i++) {
                roleArray.push(response[i].title);
            }
            inquirer.prompt([{
                type: "list",
                message: "Choose the employee whose role you'd like to update",
                choices: empArray,
                name: "employee"
            },
            {
                type: "list",
                message: "Select the employee's new role",
                choices: roleArray,
                name: "role"
            }]).then(function({employee, role}) {
                const empId = res[empArray.indexOf(employee)].id;
                orm.updateRole(empId, role)
                .then(function() {
                    console.log("\n");
                    mainMenu();
                })
            })
        })
    })
}

mainMenu();