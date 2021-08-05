import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
});


class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(name: string): string {
        return `Olá, sou ${name}. Bom dia!`
    }
}

const user1: User = new User(
    "id1",
    "joao@joao.com",
    "Joao",
    "123456"
)
console.log(user1.getId())
console.log(user1.getEmail())
console.log(user1.getName())

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer1: Customer = new Customer(
    "id2",
    "maria@maria.com",
    "Maria",
    "654321",
    "789123456789321"
)

console.log(customer1.getId())
console.log(customer1.getEmail())
console.log(customer1.getName())
console.log(customer1.purchaseTotal)
console.log(customer1.getCreditCard())
console.log(
    customer1.introduceYourself(
        customer1.getName()
    )
)


export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client1: Client = {
    name: "Gol",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

console.log(client1.name)
console.log(client1.registrationNumber)
console.log(client1.consumedEnergy)
console.log(client1.calculateBill())

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

//   const place: Place = new Place (
//       "2261111"
//   )

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const residence1: Residence = new Residence(
    10,
    "22145778"
)

const commerce1: Commerce = new Commerce(
    20,
    "22410140"
)

const indusrty1: Industry = new Industry(
    60,
    "14058760"
)

console.log(residence1.getCep())
console.log(commerce1.getCep())
console.log(indusrty1.getCep())
console.log(residence1.getResidentsQuantity())
console.log(commerce1.getFloorsQuantity())
console.log(indusrty1.getMachinesQuantity())

class ResidentialClient extends Residence implements Client {

    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    private cpf: string;


    constructor(
        name: string,
        registrationNumber: number,
        consumedEnergy: number,
        cpf: string,
        residentsQuantity: number,
        cep: string,

    ) {
        super(residentsQuantity, cep);

        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;

    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }

}

const residentialClient1: ResidentialClient = new ResidentialClient(
    "Joao",
    1,
    100,
    "123456789",
    4,
    "22445587"
)

console.log(residentialClient1.getCpf())
console.log(residentialClient1.calculateBill())
console.log(residentialClient1.getResidentsQuantity())

class CommercialClient extends Commerce implements Client {

    public name: string;
    public registrationNumber: number;
    public consumedEnergy: number;
    private cnpj: string;


    constructor(
        name: string,
        registrationNumber: number,
        consumedEnergy: number,
        cnpj: string,
        floorsQuantity: number,
        cep: string,

    ) {
        super(floorsQuantity, cep);

        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;

    }

    public getCnpj(): string {
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

}

const commercialClient1: CommercialClient = new CommercialClient(
    "Mercadinho",
    1,
    2000,
    "6547896547892154",
    2,
    "22140154"
)

console.log(commercialClient1.getCnpj())
console.log(commercialClient1.calculateBill())
console.log(commercialClient1.getFloorsQuantity())