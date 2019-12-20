# Employee-Tracker
Unit 12 homework

# Installation and Execution
Perform "npm install" to install all required dependencies to run this app.  Then type "node index.js" in the terminal and hit "enter" to begin the application.

# Project Description
The Employee Tracker is a command line application that allows the user to manipulate data in a SQL database.  The app is designed to interact with 3 SQL databases: one called "employees," one called "roles," and one called "departments."  Each employee has a "title" that is a member of the "roles" database, and each role is associated with a member of the "departments" database.

Upon launching the app, the user is prompted with a set of options from which to choose.
![Screenshot 1](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker1.JPG)

Selecting "View Employees" will display a table showing each employee in the "employees" database, along with their title, salary, and manager.
![Screenshot 2](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker2.JPG)

Selecting "View Departments" will display the departments contained in the "departments" database.
![Screenshot 3](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker3.JPG)

Similarly, selecting "View Roles" will display each title contained in the "roles" database, along with their associated salary and to what department they belong.
![Screenshot 4](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker4.JPG)

The user can add a new employee to the database by selecting "Add employee."  This will prompt the user for all the information necessary to add the new employee to the database.
![Screenshot 5](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker5.JPG)

The following screenshot shows a user adding a new department, adding a new role, and reassigning the role of an existing employee.
![Screenshot 6](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker6.JPG)

By selecting "Update manager," the user can change the manager of an existing employee to another employee in the database.
![Screenshot 7](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker7.JPG)

Selecting "Display employees by manager" will generate a list showing all the employees that report to the selected individual.
![Screenshot 8](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker8.JPG)

By selecting "View utilized budget for a department," the user can select a department and the app will sum up the salaries of all the individuals who work in that department.
![Screenshot 9](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker9.JPG)

The user can remove an employee from the database by selecting "Delete an employee."
![Screenshot 10](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker10.JPG)

The user can also remove a role from the "roles" database by selecting "Delete a role".  This will cause any employees who had that role to display "null" in role-specific fields the next time "View Employees" is executed.
![Screenshot 11](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker11.JPG)

Finally, the user can remove a department from the database by selecting "Delete a department."
![Screenshot 12](https://github.com/RyanEllingson/Employee-Tracker/blob/master/assets/images/tracker12.JPG)

# Techniques and Technologies Used
This app utilizes MySQL Workbench to interact with a SQL database.  All functions that involve getting data from and writing data to the database were packaged into an ORM.  To deal with the asynchronous nature of interacting with the database, all functions were constructed as promises and executed using .then().  Inquirer was used to allow the user to interact in the command line, and console.table() was used to display the data in a more visually appealing manner.