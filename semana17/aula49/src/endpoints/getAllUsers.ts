import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const name = req.query.name

      const users = await selectAllUsers(name)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}