enum Transaction {
  WITHDRAWAL = "Withdrawal",
  DEPOSIT = "Deposit",
}

export type teller = {
  transaction: Transaction;
  value: number;
  date: string;
  description: string;
};

export type user = {
  name: string;
  CPF: number;
  birth: string;
  balance: number;
  extract: teller[];
};

export const users: user[] = [
  {
    name: "Lucas Pasche",
    CPF: 12345678901,
    birth: "07/06/1997",
    balance: 20500.0,
    extract: [
      {
        transaction: Transaction.DEPOSIT,
        value: 12700.0,
        date: "05/02/2022",
        description: "Salário.",
      },
      {
        transaction: Transaction.WITHDRAWAL,
        value: 200.0,
        date: "14/02/2022",
        description: "Curso de testes em JavaScript.",
      },
    ],
  },
  {
    name: "Nathália de Almeida",
    CPF: 37582903765,
    birth: "07/08/1998",
    balance: 31000.0,
    extract: [
      {
        transaction: Transaction.DEPOSIT,
        value: 6200.0,
        date: "05/02/2022",
        description: "Salário.",
      },
      {
        transaction: Transaction.WITHDRAWAL,
        value: 42.0,
        date: "22/02/2022",
        description: "Seguro do notebook.",
      },
    ],
  },
];
