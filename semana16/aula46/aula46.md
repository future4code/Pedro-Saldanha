### Exercício 1
* a) Esse comando removeria a coluna salary da tabela.
* b) Esse comando alteraria o nome da coluna "gender" para "sex" restringindo seu valor a 6 caracteres.
* c) Esse comando manteria o nome "gender" na respectiva coluna e adicionaria a restrição de ser uma string(VARCHAR) de até 255 caracteres.
* d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercício 2
* a) 
```
UPDATE Actor
SET name = "Fernanda Torres", birth_date = "1965-09-15"
WHERE id = "003";
```
* b) 
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```
* c)
```
UPDATE Actor
SET name = "Lázaro Ramos",
salary = 750000,
birth_date = "1978-11-01",
gender = "male"
WHERE id = "005";
```
* d) Ele não retorna um erro pois os comandos e informações estão corretas. Apesar disso não é possível achar uma linha na tabela em que o id é igual a 123, logo ele avisa que nenhuma linha foi alterada.
```
UPDATE Actor
SET gender = "female"
WHERE id = "123";
```
### Exercício 3
* a) 
```
DELETE from Actor WHERE name = "Fernanda Montenegro";
```
* b) 
```
DELETE from Actor WHERE gender = "male" AND salary > 1000000;
```
### Exercício 4
* a)
```
SELECT MAX(salary) from Actor;
```
* b) 
```
SELECT MIN(salary) from Actor WHERE gender ="female";
```
* c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
* d)
```
SELECT SUM(salary) from Actor;
```

### Exercício 5
* a) o comando analisa a quantidade de itens na tabela Actor e os agrupa pelos itens que possuem a propriedade gender iguais.
* b) 
```
SELECT id, name from Actor
ORDER BY name DESC;
```
* c)
```
SELECT * from Actor
ORDER BY salary;
```
* d)
```
SELECT * from Actor
ORDER BY salary DESC LIMIT 3;
```
* e)
```
SELECT AVG(salary), gender from Actor
GROUP BY gender;
```

### Exercício 6
* a) 
```
ALTER TABLE Movie
ADD playing_limit_date DATE;
```
* b) 
```
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```
* c)
```
UPDATE Movie
SET playing_limit_date = "2020-08-10"
WHERE id = "003";

UPDATE Movie
SET playing_limit_date = "2021-08-10"
WHERE id = "004";
```
* d) O comando é efetivado sem erro, mas ele me diz que nenhuma linha foi alterada, já que não conseguiu achar nenhuma com aquele id específico.
```
DELETE from Movie
WHERE id = "002";

UPDATE Movie
SET synopsis = "teste"
WHERE id = "002";
```

### Exercício 7
* a) 
```
SELECT COUNT(*) from Movie
WHERE rating > 7.5;
```
* b) 
```
SELECT AVG(rating) from Movie;
```
* c)
```
SELECT COUNT(*) from Movie
WHERE playing_limit_date > CURDATE();
```
* d)
```
SELECT COUNT(*) from Movie
WHERE release_date > CURDATE();
```
* e) 
```
SELECT MAX(rating) from Movie;
```
* f)
```
SELECT MIN(rating) from Movie;
```
### Exercício 8
* a)
```
SELECT * from Movie
ORDER BY title ASC;
```
* b)
```
SELECT * from Movie
ORDER BY title DESC LIMIT 5;
```
* c)
```
SELECT * from Movie
WHERE playing_limit_date > CURDATE()
ORDER BY release_date DESC LIMIT 3;
```
* d)
```
SELECT * from Movie
ORDER BY rating DESC LIMIT 3;
```