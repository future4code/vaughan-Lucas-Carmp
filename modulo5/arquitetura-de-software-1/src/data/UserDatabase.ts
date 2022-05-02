import { generateId } from "../services/generateId";
import { BaseDatabase } from "./BaseDatabase";
export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
export class UserDatabase extends BaseDatabase {
  public signup = async (
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
  ): Promise<void> => {
    try {
      await this.connection("User_Arq").insert({
        id,
        name,
        email,
        password,
        role,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
