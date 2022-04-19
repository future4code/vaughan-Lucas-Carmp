import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf = (): string => {
    return this.cpf
  };
  public getName = (): string => {
    return this.name
  };
  public getAge = (): number => {
    return this.age
  };
  public getBalance = (): number => {
    return this.balance
  };
  public getTransactions = () => {
    return this.transactions
  };
}

const lucas = new UserAccount("12345678909", "Lucas Pasche", 24);

//Exercício 1
//Letra A: O construtor é um método que executa ações no momento da criação da instância. Chamamos o construtor criando uma nova instancia da classe.
//Letra B: 1 vez.
//Letra C: Utilizando métodos de acesso.

//Exercício 2
class Transaction  {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription = (): string => {
    return this.description
  };
  public getValue = (): number => {
    return this.value
  };
  public getDate = (): string => {
    return this.date
  };

}

// Exercício 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  getAccount(): UserAccount[] {
    return this.accounts;
  }

  setAccounts(account: UserAccount): void {
    this.accounts.push(account);
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
