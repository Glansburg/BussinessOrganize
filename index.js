const mysql = require('mysql2');
const fs = require('fs');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'business_Organizer'
  });
  
  // simple query
  connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  
  // with placeholder
  connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45],
    function(err, results) {
      console.log(results);
    }
  );




























const logo = [
    {
        //first object for character input in logo
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters for your logo.',
        validate: function (characters) {
            if (characters.length <= 3) {
                return true;
            }
            return "please enter 3 characters to begin";
        },
    },
    { //second object for text color

        type: 'input',
        name: 'textColor',
        message: 'Enter TEXT color for logo.',
        
    },

    // third object will be for shape
    {
    type: 'list',
    name: 'shape',
    message: 'choose your choice of shape.',
    choices: [Circle,Square,Triangle], 
    },
    // fourth object for shape color
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter SHAPE color for logo.',
    
},








]

// TODO: Create a function to initialize app

inquirer.prompt(logo)
    .then(data => {
        console.log(data)
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${data.shape} cx="150" cy="100" r="80" fill=${data.shapeColor} />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.text}</text>
    
    
      
      </svg>`
        console.log("Generated logo.svg");


        fs.writeFile('Logo.svg', svg, (err) =>
            err ? console.error(err) : console.log('Success'))
    })
