import { app } from "./controller/app";
import { User } from "./types/user";

//exercício 1
export const performPurchase = (user: User, value: number): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
};
