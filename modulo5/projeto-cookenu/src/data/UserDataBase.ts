import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public register = async (user: User): Promise<void> => {
    try {
      await BaseDatabase.connection("cookenu_Users").insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
          role: user.getRole()
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
