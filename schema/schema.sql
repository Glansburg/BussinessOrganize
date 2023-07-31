DROP DATABASE IF EXISTS business_Organizer_db;
CREATE DATABASE business_Organizer_db;

USE business_Organizer_db;


-- tables for departments, view roles, view employees
CREATE TABLE department (
    id Int PRIMARY  KEY AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30)
);
CREATE TABLE roles (
    id Int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    role_title VARCHAR(30),
    salary INT NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT FK_roles_department
        FOREIGN KEY (department_id)
        REFERENCES department(id)
);

CREATE TABLE employee ( 
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    CONSTRAINT FK_employee_roles 
        FOREIGN KEY (role_id)
        REFERENCES roles(id),
    CONSTRAINT FK_manager 
        FOREIGN KEY (manager_id)
        REFERENCES employee(id)
    
);

 --   CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
 --   REFERENCES Persons(PersonID)
