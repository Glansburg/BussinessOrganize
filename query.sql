-- joins the department name to the roles table from department_id
SELECT   id
FROM department
JOIN roles ON department_id = department.id;


-- adds role_id from roles to the employee table
SELECT id
FROM roles
join employee ON role_id = roles.id;
