SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

DESCRIBE Actor;

SELECT * from Actor;

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Fernanda Torres", birth_date = "1965-09-15"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET name = "Lázaro Ramos",
salary = 750000,
birth_date = "1978-11-01",
gender = "male"
WHERE id = "005";

UPDATE Actor
SET gender = "female"
WHERE id = "123";

DELETE from Actor WHERE name = "Fernanda Montenegro";

DELETE from Actor WHERE gender = "male" AND salary > 1000000;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT MAX(salary) from Actor;

SELECT MIN(salary) from Actor WHERE gender ="female";

SELECT SUM(salary) from Actor;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name from Actor
ORDER BY name DESC;

SELECT * from Actor
ORDER BY salary;

SELECT * from Actor
ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender from Actor
GROUP BY gender;
