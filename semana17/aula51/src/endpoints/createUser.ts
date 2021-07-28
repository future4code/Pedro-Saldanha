import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, zipcode, number, complement } = req.body

      if (!name || !nickname || !email || !zipcode || !number) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email', 'zipcode' e 'number' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const address:any = await getAddressInfo(zipcode)

      const newUser: user = {
          id, 
          name, 
          nickname,
          email, 
          zipcode, 
          street: address.street, 
          number, 
          complement: complement ? complement : "", 
          neighborhood: address.neighborhood, 
          city: address.city, 
          state: address.state 
         }

      await connection('aula51_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send(error.message)
      }

   }
}