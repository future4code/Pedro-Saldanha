SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Movie
ADD playing_limit_date DATE;

DESCRIBE Movie;

SELECT * from Movie;

ALTER TABLE Movie
CHANGE rating rating FLOAT;

UPDATE Movie
SET rating = 8.5
WHERE id = "003";

UPDATE Movie
SET playing_limit_date = "2020-08-10"
WHERE id = "003";

UPDATE Movie
SET playing_limit_date = "2021-08-10"
WHERE id = "004";

DELETE from Movie
WHERE id = "002";

UPDATE Movie
SET synopsis = "teste"
WHERE id = "002";

SELECT COUNT(*) from Movie
WHERE rating > 7.5;

SELECT AVG(rating) from Movie;

SELECT COUNT(*) from Movie
WHERE playing_limit_date > CURDATE();

SELECT COUNT(*) from Movie
WHERE release_date > CURDATE();

SELECT MAX(rating) from Movie;

SELECT MIN(rating) from Movie;

SELECT * from Movie
ORDER BY title ASC;

SELECT * from Movie
ORDER BY title DESC LIMIT 5;

SELECT * from Movie
WHERE playing_limit_date > CURDATE()
ORDER BY release_date DESC LIMIT 3;

SELECT * from Movie
ORDER BY rating DESC LIMIT 3;
