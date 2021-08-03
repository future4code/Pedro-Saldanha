import { UserAccount } from ".";

export class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string,
    ) {

        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getTransaction() {
        return {
            value: this.value,
            date: this.date,
            description: this.description
        }
    }

}

export class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public getAccount(){
        return this.accounts
    }


}