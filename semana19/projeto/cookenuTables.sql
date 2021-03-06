CREATE TABLE cookenu_user (
id VARCHAR(255) NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

CREATE TABLE cookenu_recipe (
id VARCHAR(255) NOT NULL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
createdAt VARCHAR(50) NOT NULL
);

CREATE TABLE cookenu_recipe (
id VARCHAR(255) NOT NULL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
createdAt VARCHAR(50) NOT NULL,
user_id VARCHAR(255) NOT NULL,
FOREIGN KEY (user_id) REFERENCES cookenu_user(id)
);


SELECT * FROM cookenu_user;
SELECT * FROM cookenu_recipe;