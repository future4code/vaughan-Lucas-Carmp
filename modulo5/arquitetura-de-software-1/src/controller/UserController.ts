import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../entities/User";

export class UserController {
  public signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password, role } = req.body;

      const token = await new UserBusiness().createUser(
        new User(name, email, password, role)
      );

      res.status(201).send({message: "Usuário criado!", token: token})
    } catch (error: any) {
        res.send(error.message)
    }
  };
}
