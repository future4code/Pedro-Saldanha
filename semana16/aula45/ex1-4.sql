USE `paiva-2125702-pedro-saldanha`;

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Pedro Cardoso",
  800000,
  "1962-12-31", 
  "male"
);

SELECT * FROM Actor;

SELECT id, salary from Actor; 

SELECT id, name from Actor WHERE gender = "male";

SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary <= 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * from Actor WHERE name LIKE "%G%";

SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE"%A%") AND salary BETWEEN 350000 AND 900000;
