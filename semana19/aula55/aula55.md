### Exercício 1
* a) Acho que é uma opção adequada. É melhor que usar número pois com string é possível gerar um id aleatório com diferentes tipos de caracteres, diminuindo a chance de um id se repetir.

### Exercício 2
* a) O código acima faz a conexão do com o banco de dados e com a função createUser ele faz a ponte entre o endpoint e o banco, inserindo um novo usuário na tabela especificada.
* b) 
 ```
  CREATE TABLE IF NOT EXISTS aula_55_users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL
);
```
* c) função criada como addUser.
### Exercício 3
* a) A linha as string é uma garantia que nós estamos dando para o typescript que aquela informação vai chegar como uma string. É necessário usá-la ali pois aquela informação poderia ser de diferentes tipos além de string.

### Exercício 1
* a) 
### Exercício 2
* a) 
* b) 
### Exercício 4
* a) 
### Exercício 5
* a) 
### Exercício 6
* a) 
* b) 
* c) 
