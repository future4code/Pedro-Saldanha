CREATE TABLE IF NOT EXISTS aula_55_users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL
);

SELECT * FROM aula_55_users;

SELECT * FROM aula_55_users
WHERE id = '0780cc29-e56f-4eb9-b70e-b8fde13e885b';
