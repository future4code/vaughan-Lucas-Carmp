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
        role: user.getRole(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public findUserByEmail = async (email: string): Promise<any> => {
    try {
      const user = await BaseDatabase.connection("cookenu_Users").where({
        email,
      });
      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getUserDetails = async (id: string): Promise<any> => {
    try {
      const details = await BaseDatabase.connection("cookenu_Users")
        .where({ id })
        .select("id", "name", "email");

      return details[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
