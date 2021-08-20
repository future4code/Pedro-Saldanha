import express from 'express'
import { PostController } from '../controller/PostController'

export const postRouter = express.Router()
const postController = new PostController()



postRouter.post('/create', postController.create)
 
//  postRouter.get('/:id', async (req: Request, res: Response) => {
//     try {
//        let message = "Success!"
 
//        const { id } = req.params
 
//        const queryResult: any = await connection("labook_posts")
//           .select("*")
//           .where({ id })
 
//        if (!queryResult[0]) {
//           res.statusCode = 404
//           message = "Post not found"
//           throw new Error(message)
//        }
 
//        const post: post = {
//           id: queryResult[0].id,
//           photo: queryResult[0].photo,
//           description: queryResult[0].description,
//           type: queryResult[0].type,
//           createdAt: queryResult[0].created_at,
//           authorId: queryResult[0].author_id,
//        }
 
//        res.status(200).send({ message, post })
 
//     } catch (error) {
//        let message = error.sqlMessage || error.message
//        res.statusCode = 400
 
//        res.send({ message })
//     }
//  })