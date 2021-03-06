export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;

    constructor(id: string, name: string, email: string, password: string) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    static toUser(data: any): User {
        return new User(data.id, data.name, data.email, data.password)
    }

    
    public getId(){
        return this.id
    }

    
    public getEmail(){
        return this.email
    }

    
    public getName(){
        return this.name
    }

    
    public getPassword(){
        return this.password
    }
}