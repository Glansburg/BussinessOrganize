-- joins the department name to the roles table from department_id
SELECT id
FROM department
JOIN roles ON department_id = department.id;


-- adds role_id from roles to the employee table
SELECT employee.id, first_name, last_name, role_title 
FROM employee
join roles ON role.id = roles_id;



-- Show all employees
SELECT employee.id, employee.first_name, employee.last_name, 
department_name AS department,  role_title AS title, salary,
CONCAT(managers.first_name, " ", managers.last_name) AS manager
FROM employee
JOIN roles
ON roles.id = role_id
JOIN department
ON department_id = department.id
JOIN employee AS managers
ON employee.manager_id = managers.id;


SELECT department_name.VALUES
  FROM department


-- side note, if the roles.id matches
-- the employee role_id bring in all the roles information