export enum USER_ROLE {
    NORMAL = "NORMAL", 
    ADMIN = "ADMIN"
}

export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private role: USER_ROLE;

    constructor(id: string, name: string, email: string, password: string, role: USER_ROLE) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }

    static toUser(data: any): User {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }


    public getId() {
        return this.id
    }


    public getEmail() {
        return this.email
    }


    public getName() {
        return this.name
    }


    public getPassword() {
        return this.password
    }

    public getRole() {
        return this.role
    }
}