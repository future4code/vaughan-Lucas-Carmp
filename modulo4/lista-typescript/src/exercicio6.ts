type customer = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const customers = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const negativeIdentifier = (array: customer[]): customer[] => {
  array.forEach((item): void => {
    const debtsSum: number =
      item.debitos.length > 0
        ? item.debitos.reduce((accumulator, current) => accumulator + current)
        : 0;
    item.saldoTotal -= debtsSum;
    item.debitos.splice(0, item.debitos.length);
  });

  const ableArray = array.filter((item: customer): boolean => {
    return item.saldoTotal < 0;
  });

  return ableArray;
};

console.log(negativeIdentifier(customers));
