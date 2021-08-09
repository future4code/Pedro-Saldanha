export class User {
    private id: string = Date.now().toString();
    private name: string;
    private email: string;
    private age: number;

    constructor(
        name: string,
        email: string,
        age: number
    ) {
        this.name = name
        this.email = email
        this.age = age
    }


    public getUser(): any {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            age: this.age,
        }
    }

    public getUserId(): any {
        return {
            id: this.id,
        }
    }

}