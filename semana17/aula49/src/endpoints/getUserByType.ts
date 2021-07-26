import { Request, Response } from "express"
import selectUserByType from "../data/selectUserByType"


export const getUserByType = async (req: Request, res: Response): Promise<void> => {
   try {
      const type = req.params.type
      const users = await selectUserByType(type)

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