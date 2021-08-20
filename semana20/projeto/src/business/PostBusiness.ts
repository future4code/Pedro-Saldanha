import { PostDatabase } from "../data/PostDatabase"
import { Post } from "../model/Post"
import { POST_TYPES } from "../model/Post"
import { authenticationData } from "../model/User"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"


const tokenManager = new TokenManager()
const idGenerator = new IdGenerator()
const postDatabase = new PostDatabase()

export class PostBusiness {
    async create(token: string, photo: string, description: string, type: POST_TYPES) {

        const tokenData: authenticationData = tokenManager.getData(token)

        if (!photo || !description || !type) {
            throw new Error("'photo', 'description' and 'type' must be provided")
        }


        if (description.length < 15) {
            throw new Error("'description' must be at least 15 characters long");
        }


        if (!type || type !== POST_TYPES.EVENT) {
            type = POST_TYPES.NORMAL
        }

        const id: string = idGenerator.generate()

        const date: string = new Date().toLocaleDateString()

        const newPost: Post = new Post(
            id,
            photo,
            description,
            type,
            date,
            tokenData.id
        )

        await postDatabase.create(newPost)
    }

    async getById() { }
}