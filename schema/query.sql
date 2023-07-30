-- joins the department name to the roles table from department_id
SELECT   id
FROM department
JOIN roles ON department_id = department.id;


-- adds role_id from roles to the employee table
SELECT employee.id, first_name, last_name, role_title
FROM employee
join roles ON role_id = roles.id;


--User.find => route response