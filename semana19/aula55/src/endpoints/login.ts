import { Request, Response } from "express";
import connection from "../connection";
import { searchUserByEmail } from "../data/searchUserByEmail";
import { generateToken } from "../services/generateToken";
import { user } from "../types";

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email && !password) {
         res.statusCode = 422
         res.statusMessage = "Insira 'email' e 'password'"
         throw new Error()
      }

      if (email.indexOf("@") === -1) {
         res.statusCode = 422
         throw new Error("Insira um 'email' válido")
      }

      const verifyUser: user = await searchUserByEmail(email)

      if (password !== verifyUser.password) {
         res.statusCode = 422
         throw new Error("'password' inválido");
      }

      const token = generateToken({ id: verifyUser.id })

      res.status(200).send({ token })


   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}