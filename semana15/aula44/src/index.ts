import express from 'express'
import cors from 'cors'
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserByType } from './endpoints/getUserByType'


const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers)
app.get("/users/:type", getUserByType)

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


// 1)a. Qual método HTTP você deve utilizar para isso? método get
// b. Como você indicaria a entidade que está sendo manipulada? /users
// 2)a. Como você passou os parâmetros de type para a requisição? Por quê?
// por PathParams, pois pelo meu entendimento o usuário precisa passar essa informação caso queira usar o endpoint específico. Mas seria possível utilizar QueryParams também.
// b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
// setando um enum para os types.