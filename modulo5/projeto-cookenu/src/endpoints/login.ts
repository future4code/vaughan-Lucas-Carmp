import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Please fill in fields 'email' and 'password'.");
    }


    const user = await new UserDatabase().findUserByEmail(email);

    if (!user) {
      res.statusCode = 401;
      throw new Error("User not registered.");
    }

    const passwordIsCorrect = await new HashManager().compare(
      password,
      user.getPassword()
    );

    if (!passwordIsCorrect) {
      res.statusCode = 403;
      throw new Error("Wrong password.");
    }

    const token = new Authenticator().generate({
      id: user.getId(),
      role: user.getRole(),
    });

    res.status(201).send({ access_token: token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
