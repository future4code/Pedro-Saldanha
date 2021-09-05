# Pokemon Go

## Primeiros Passos

* Clonar este repositório
* Executar `npm install` para adicionar as dependências
* Criar a tabela a partir do arquivo pokemonGo_table.sql
* Importar as informações do arquivo PokemonGo.csv para a tabela criada acima
* Criar um arquivo .env na raiz do projeto e preencher as chaves a seguir com os valores apropriados:
   ```
   DB_HOST = 
   DB_USER = 
   DB_PASSWORD = 
   DB_SCHEMA = 

   ```

## Documentação dos endpoints no Postman

https://documenter.getpostman.com/view/15825757/U16gNmaq

### ENDPOINTS:
* ### Find Pokemon

     Esse endpoint retorna todos os pokemon da lista com filtragens e paginação. É possível filtrar por *type*, *weather* e *familyId*, além de poder definir o tamanho da página com *size* e que página buscar com *page*. Por padrão o *size* é de 20 pokemon por *page*. Caso nada seja passado na requisição é retornado os primeiros 20 pokemon ordenados de forma crescente pelo número do pokedex.

* ### Find By Name

    Esse endpoint retorna o pokemon de nome equivalente ao buscado. É necessário passar o *name* desejado como parâmetro.

* ### Find By Pokedex Number

    Esse endpoint retorna o pokemon de pokedexNumber equivalente ao buscado. É necessário passar o *pokedexNumber* desejado como parâmetro.
