### Exercício 1
* a) Chave estrangeira é uma forma de comunicação entre uma tabela e outra de modo que uma coluna da tabela específica faça referência a uma coluna de outra tabela.
* b) 
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Muito legal",
	6.5,
    "001"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
    "Bonzinho",
	6,
    "003"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"003",
    "Excelente",
	9.5,
    "004"
);
```
* c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`paiva-2125702-pedro-saldanha`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). O erro acontece pois ele tenta fazer referência a um id que não existe na outra tabela.
* d)
```
ALTER TABLE Movie
DROP COLUMN rating;
```
* e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`paiva-2125702-pedro-saldanha`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)). O erro ocorre pois há uma outra tabela fazendo referência a uma coluna dessa linha da tabela movie.

### Exercício 2
* a) Essa tabela relaciona as outras duas tabelas, podendo ligar um ator a mais de um filme e um filme a mais de um ator, causando assim uma relação n:m entre as tabelas Actor e Movie, através da tabela MovieCast.
* b) 
```
INSERT INTO MovieCast
VALUES 
("001", "001"), ("001", "002"), ("004", "003"), ("004", "005"), ("003", "004"), ("003", "006") ;
```
* c) O erro ocorre pois ele tenta fazer uma referência a uma linha que não existe, pois não há nenhuma linha com esse id.

* d) O erro ocorre pois estou tentando apagar um ator na tabela que possui referências sendo feitas a ele, o que significa que há dados dependentes dessa informação. Se eu de fato quiser apagar esse ator eu devo apagar a info que faz informação à ele primeiro.

### Exercício 3
* a) A query acima conecta as duas tabelas somente com as informações que são comuns em ambas. O on indica onde a conexão deve ser feita, no caso juntar as linhas em que o Movie.id seja igual ao Rating.movie_id
* b) 
```
SELECT Movie.id, title, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```