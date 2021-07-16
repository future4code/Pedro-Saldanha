import express from 'express'
import cors from 'cors'
import { getAllUsers } from './endpoints/getAllUsers'


const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/users", getAllUsers)

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
