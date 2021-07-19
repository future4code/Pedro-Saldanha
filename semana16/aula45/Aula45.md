### Exercício 1
* a) Comandos:
	* VARCHAR(n) string com n caracteres
	* DATE data no formato aaaa-mm-dd
* b) SHOW DATABASES nos mostra todos os bancos de dados que existem nesse servidor e SHOW TABLES todas as tabelas de informações que existem nesse banco de dados.
* c) É possível ver a estrutura da tabela Actor. Vemos todos os campos (name, salary, birth_date...) e seus respectivos tipos e restrições.

```
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
```


### Exercício 2
* a) 
```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```
* b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. O erro a key 'PRIMARY' tem que ser única para cada item da tabela.
* c) Error Code: 1136. Column count doesn't match value count at row 1. A lista de colunas após o nome da lista está incompleta, faltando algumas colunas. O correto seria: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
* d) Error Code: 1364. Field 'name' doesn't have a default value. Está faltando a informação da propriedade name. o correto seria:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
* e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. A data estava no formato incorreto, era necessário que estivesse entre " ". o correto seria: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
* f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Pedro Cardoso",
  800000,
  "1962-12-31", 
  "male"
);
```

### Exercício 3
* a) 
```
SELECT * from Actor WHERE gender = "female";
```
* b) 
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```
* c) Não retorna nenhuma linha pois não tem nenhum ator/atriz com o gênero definido como "invalid"
```
SELECT * from Actor WHERE gender = "invalid";
```
*d)
```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```
*e) Error Code: 1054. Unknown column 'nome' in 'field list'. Não existe uma coluna com o nome "nome" e sim name. o correto seria: 
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4
* a) primeiro comparamos strings através do operador LIKE, buscando name que iniciam com A ("A%") ou J ("J%"). depois usamos o salary com operador > para buscar salários acima de 300000.
* b) 
```
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```
* c)

```
SELECT * from Actor WHERE name LIKE "%G%";
```
* d)

```
SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE"%A%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
* a) 
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```
* b) 
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```
* c)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```
*d)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
    "2017-11-02",
    8
);
```
*e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"004",
    "Saneamento Básico, O Filme",
    "Moradores de uma pequena vila se juntam para pleitear a construção de uma estação de tratamento de esgoto. Para conseguir o dinheiro, eles precisam fazer um filme de ficção",
    "2007-07-20",
    10
);
```

### Exercício 6
* a) 
```
SELECT id, title, rating from Movie WHERE id = "004";
```
* b) 
```
SELECT * from Movie WHERE title = "Saneamento Básico, O Filme";
```
* c)
```
SELECT id, title, synopsis from Movie WHERE rating >= 7;
```

### Exercício 6
* a) 
```
SELECT * from Movie WHERE title LIKE "%vida%";
```
* b) 
```
SELECT * from Movie WHERE title LIKE "%seu%" OR synopsis LIKE "%seu%";
```
* c)
```
SELECT * from Movie WHERE release_date < "2021-07-19";
```
* d)
```
SELECT * from Movie WHERE release_date < "2021-07-19" AND (title LIKE "%seu%" OR synopsis LIKE "%seu%") AND rating > 7;
```

