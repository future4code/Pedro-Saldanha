CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
    "2017-11-02",
    8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"004",
    "Saneamento Básico, O Filme",
    "Moradores de uma pequena vila se juntam para pleitear a construção de uma estação de tratamento de esgoto. Para conseguir o dinheiro, eles precisam fazer um filme de ficção",
    "2007-07-20",
    10
);

SELECT * from Movie;

SELECT id, title, rating from Movie WHERE id = "004";

SELECT * from Movie WHERE title = "Saneamento Básico, O Filme";

SELECT id, title, synopsis from Movie WHERE rating >= 7;

SELECT * from Movie WHERE title LIKE "%vida%";

SELECT * from Movie WHERE title LIKE "%seu%" OR synopsis LIKE "%seu%";

SELECT * from Movie WHERE release_date < "2021-07-19";

SELECT * from Movie WHERE release_date < "2021-07-19" AND (title LIKE "%seu%" OR synopsis LIKE "%seu%") AND rating > 7;
