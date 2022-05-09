- Exercicio 1
> 		export interface User {
			name: string;
			balance: number
		}
		const performPurchase = (user: User, value: number): User | undefined => {
			if(user.balance >= value) {
				return {
				...user,
				balance: user.balance - value		
				}
			}
			return undefined
		}

- Exercicio 2
		describe("Validação de compra", () => {
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

 			test("Teste de saldo idêntico ao valor de compra", () => {
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

 			test("Teste de saldo menor do que valor da compra", () => {
    			const user: User = {
					name: "Lucas",
					balance: 5000,
				};
   		 	const result = performPurchase(user, 8000);
  		 	 expect(result).toBe(undefined);
			});
		});