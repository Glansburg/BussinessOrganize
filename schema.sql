DROP DATABASE IF EXISTS bussiness_Organizer_db;
CREATE DATABASE business_Organizer_db;

USE business_Organizer_db;


-- tables for departments, view roles, view employees
CREATE TABLE department (
    id INT PRIMARY  KEY AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30),
    REFERENCES()
);

CREATE TABLE roles (
    id Int PRIMARY KEY AUTO_INCREMENT NOT NULL,
   role_title VARCHAR(30),
   salaryDECIMAL NOT NULL,
   department_id INT NOT NULL
);

CREATE TABLE employee ( 
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);
