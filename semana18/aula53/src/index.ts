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

// 1)
// a) não seria possível pois ela é privada e não há nenhum método público que imprima a senha.
// b) nenhuma pois não foi gerada nenhuma instância dessa classe.

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
      ){
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
  }

type consumers = {
    creditCard: number;
    totalSpent: number;
}

type employees = {
    salary: number;
}

type salesperson = {
    totalSales: number;
}