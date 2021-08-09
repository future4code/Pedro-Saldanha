export class Product {
    protected id: string = Date.now().toString();
    protected name: string;
    protected description: string;
    protected price: number;

    constructor(
        name: string,
        description: string,
        price: number
    ) {
        this.name = name
        this.description = description
        this.price = price
    }


    public getProduct(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
        }
    }

    public getProductId(): any {
        return {
            id: this.id,
        }
    }

}