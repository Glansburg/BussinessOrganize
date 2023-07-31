const mysql = require('mysql2');
const inquirer = require('inquirer');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.HOST);
console.log(process.env.USER);
console.log(process.env.PASSWORD);
console.log(process.env.DATABASE);

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});


const showAllEmployees = function() {
  // simple query
  const queryAllEmployees = `
  SELECT employee.id, employee.first_name, employee.last_name, department_name AS department,  role_title AS title, salary, CONCAT(managers.first_name, " ", managers.last_name) AS manager
  FROM employee
  JOIN roles
    ON roles.id = role_id
  JOIN department
    ON department_id = department.id
  JOIN employee AS managers
    ON employee.manager_id = managers.id;
  `
  connection.query(
    queryAllEmployees,
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      inquireMain();
    }
  );
} // showAllEmployees

const showAllDepartments = function() {
  const queryAllDepartments = `SELECT department_name.VALUES
  FROM department`


connection.query(
  queryAllDepartments,
  function (err, results, fields) {
    console.table(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    inquireMain();
  }
);
}


function inquireMain() {
  const questions = [
    {
      type: "list",
      name: "selected",
      message: "Select what you want to do:",
      choices: ["SHOW ALL EMPLOYEES", "View All Departments", "EXIT"]
    }
  ]

  inquirer
  .prompt(questions)
  .then(answers=>{
    if(answers.selected==="SHOW ALL EMPLOYEES")
      showAllEmployees();
      if(answers.selected==="View All Departments")
      showAllDepartments();
    if(answers.selected==="EXIT")
      process.exit(1);
  })
}

inquireMain();

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function (err, results) {
//     console.log(results);
//   }
// );




// inquirer.prompt(logo)
//   .then(data => {
//     console.log(data)
//     const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         <${data.shape} cx="150" cy="100" r="80" fill=${data.shapeColor} />
      
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.text}</text>
    
    
      
//       </svg>`
//     console.log("Generated logo.svg");


//     fs.writeFile('Logo.svg', svg, (err) =>
//       err ? console.error(err) : console.log('Success'))
//   })


























