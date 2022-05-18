import { performPurchase } from "../src";
import { User } from "../src/types/user";

describe("Validação de compra", () => {
  //letra a
  test("Teste de saldo maior do que valor da compra", () => {
    const user: User = {
      name: "Lucas",
      balance: 5000,
    };
    const result = performPurchase(user, 40);
    expect(result).toEqual({
      name: "Lucas",
      balance: 4960,
    });
  });

  //letra B
  test("Teste de saldo idêntico ao valor de compra", ()=>{
    const user: User = {
        name: "Lucas",
        balance: 5000,
      };
      const result = performPurchase(user, 5000);
      expect(result).toEqual({
        name: "Lucas",
        balance: 0,
      });
    
  });

  //letra c
  test("Teste de saldo menor do que valor da compra", () => {
    const user: User = {
      name: "Lucas",
      balance: 5000,
    };
    const result = performPurchase(user, 7869);
    expect(result).toBe(undefined);
  });
});
