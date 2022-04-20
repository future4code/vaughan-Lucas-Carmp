import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

// class User {
//   private id: string;
//   private email: string;
//   private name: string;
//   private password: string;

//   constructor(
// 		id: string,
// 		email: string,
// 		name: string,
// 		password: string
// 	){
// 		console.log("Chamando o construtor da classe User")
// 		this.id = id
// 		this.email = email
// 		this.name = name
// 		this.password = password
// 	}

//   public introduceYourself = (): string => {
//     return `Olá, sou ${this.name}. Bom dia!`
//   }

// 	public getId(): string {
// 		return this.id
// 	}

// 	public getEmail(): string {
// 		return this.email
// 	}

// 	public getName(): string {
// 		return this.name
// 	}
// }

// const Lucas = new User("eg44gh", "paschelucas9@gmail.com", "Lucas Pasche", "phganso_")

// //Exercício 1
// //letra a: não, pois é um dado privado.
// //letra b: 1 vez.

// class Customer extends User {
//   public purchaseTotal: number = 0;
//   private creditCard: string;

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string,
//     creditCard: string
//   ) {
//     super(id, email, name, password);
//     console.log("Chamando o construtor da classe Customer");
//     this.creditCard = creditCard;
//   }

//   public getCreditCard(): string {
//     return this.creditCard;
//   }
// }

// const nathalia = new Customer("wef343", "nath@bndes.com", "Nathália de Almeida", "meajudadeus", "mastercard")

// console.log(nathalia.introduceYourself());

//exercicio 2
//letra a: 1 vez.
//letra b: 2 vezes. 1 pela declaração da classe, 1 pela classe customer ter herdado esse comando.

//exercicio 3
//letra a: não, pois é um atributo privado.

//exercícios de polimorfismo
//exercício 1
//letra a: todas.

//exercicio 2
//letra a: não é possível criar uma instância de uma classe abstrata.
export interface Client {
  name: string;

  registrationNumber: number;

  consumedEnergy: number;

  calculateBill(): number;
}

// const lucas: Client = {
//   name: "Lucas Pasche",
//   registrationNumber: 234346,
//   consumedEnergy: 132,
//   calculateBill: (): number => {return  2}
// }

abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}
export class Residence extends Place {
  constructor(
    private dwellersQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  
  public getDwellersQuantity(): number {
    return this.dwellersQuantity
  }
}

class ResidentialClient extends Residence implements Client{
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    dwellersQuantity: number,
    cep: string
  ){
    super(dwellersQuantity, cep)
  }
  public getCpf = (): string => {
    return this.cpf
  };

  public calculateBill(): number {
      return this.consumedEnergy * 0.75
  }
}



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
