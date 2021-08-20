export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: string,
        private authorId: string
    ) { }

    getId() {
        return this.id
    }

    getPhoto() {
        return this.photo
    }

    getDescription() {
        return this.description
    }

    getType() {
        return this.type
    }

    getCreatedAt() {
        return this.createdAt
    }

    getAuthorId() {
        return this.authorId
    }

    static toPost(data: any): Post {
        return new Post(data.id, data.photo, data.description, data.type, data.created_at, data.author_id)
    }
}