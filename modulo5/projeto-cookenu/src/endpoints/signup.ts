import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { HashManager } from "../services/HashManager";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;
    const id = generateId();
    const hash = await new HashManager().hash(password);

    if (!name || !email || !password || !role) {
      res.statusCode = 422;
      throw new Error("Please fill in fields 'name', 'email', 'password' and 'role' ('NORMAL' or 'ADMIN').");
    }

    const newUser = new User(id, name, email, hash, role);

    await new UserDatabase().register(newUser);

    const token = new Authenticator().generate({ id, role });

    res.status(201).send({ access_token: token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    }else{
        res.send({message: error.message})
    }
  }
};
