import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    async create(post: Post) {
        await BaseDatabase.connection("labook_posts")
            .insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                created_at: post.getCreatedAt(),
                author_id: post.getAuthorId()
            })
    }

    async getById(id: string) {
        const post = await BaseDatabase.connection("labook_posts")
            .select("*")
            .where({ id })

        return post[0] && Post.toPost(post[0]);
    }
}