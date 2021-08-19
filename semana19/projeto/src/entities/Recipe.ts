export class Recipe {
    private id: string;
    private title: string;
    private description: string;
    private createdAt: string;

    constructor(id: string, title: string, description: string, createdAt: string) {
        this.id = id
        this.title = title
        this.description = description
        this.createdAt = createdAt
    }

    static toRecipe(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.createdAt)
    }

    
    public getId(){
        return this.id
    }

    
    public getDescription(){
        return this.description
    }

    
    public getTitle(){
        return this.title
    }

    
    public getDate(){
        return this.createdAt
    }
}