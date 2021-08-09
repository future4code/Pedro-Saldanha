export class Purchase {
    private userId: string;
    private productId: string;
    private quantity: number;
    private totalValue: number;

    constructor(
        userId: string,
        productId: string,
        quantity: number,
        totalValue: number
    ) {
        this.userId = userId
        this.productId = productId
        this.quantity = quantity
        this.totalValue = totalValue
    }


    public getPurchase(): any {
        return {
            userId: this.userId,
            productId: this.productId,
            quantity: this.quantity,
            totalValue: this.totalValue,
        }
    }

}