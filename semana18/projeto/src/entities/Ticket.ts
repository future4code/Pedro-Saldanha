import { Product } from "./Product";

export class Ticket extends Product {
    private origin: string;
    private destination: string;

    constructor(
        name: string,
        description: string,
        price: number,
        origin: string,
        destination: string
    ) {
        super(name, description, price);
        this.origin = origin;
        this.destination = destination
    }

    public getTicket(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            origin: this.origin,
            destination: this.destination
        }
    }
}