import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export const getSelfProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      res.statusCode = 403;
      throw new Error("Send a token via 'authorization' headers.");
    }

    const userData = new Authenticator().getTokenData(token);

    const userDetails = await new UserDatabase().getUserDetails(userData.id);

    res.status(200).send(userDetails);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
