CREATE TABLE IF NOT EXISTS aula_55_users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL
);
