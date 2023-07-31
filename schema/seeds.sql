INSERT INTO department (department_name)
VALUES ("Therapy"),
       ("Nursing"),
       ("Managment"),
       ("CNA"),
       ("Administrator");


INSERT INTO roles (role_title, salary, department_id)
VALUES ("Therapist", 80000, 1 ),
       ("Nurse", 79000, 2),
       ("Aide", 35000, 4),
       ("Manager", 95000, 3),
       ("Health-Care Administrator", 110000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, NULL),
        ("Mike", "Chan", 2, 1  ),
        ("Jan", "Sickenger", 4, 2),
        ("Joel", "Getzke", 1, 3  ),
        ("Kendra", "Fameree", 5, 5 );