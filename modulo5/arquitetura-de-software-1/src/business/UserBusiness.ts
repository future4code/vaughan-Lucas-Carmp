import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { HashManager } from "../services/HashManager";

export class UserBusiness {
  public createUser = async (user: any): Promise<string> => {
    try {
      const id = generateId();
      const hash = await new HashManager().hash(user.password);
      const role = user.role;

      if (!user.name || !user.email || !user.password || !user.role) {
        throw new Error("Preencha todos os campos.");
      }

      await new UserDatabase().signup(id, user.name, user.email, hash, role);
      const token = new Authenticator().generate({ id, role });
      return token;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
