import { Request, Response } from "express";
import connection from "../connection";
import { addUser } from "../data/addUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      if (email.indexOf("@") === -1) {
         res.statusCode = 422
         throw new Error("Insira um 'email' válido")
      }

      if (password.length < 6) {
         res.statusCode = 422
         throw new Error("'password' deve ter ao menos 6 caracteres")
      }

      const [user] = await connection('aula_55_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId()

      const newUser: user = { id, email, password }

      await addUser(newUser)

      const token = generateToken({ id })

      res.status(201).send({ message: "usuário criado com sucesso", token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}