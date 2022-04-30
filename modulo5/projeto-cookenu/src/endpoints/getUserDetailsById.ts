import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";

export const getUserDetailsById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id;
    if (!token) {
      res.statusCode = 403;
      throw new Error("Send a token via 'authorization' headers.");
    }

    const userDetails = await new UserDatabase().getUserDetails(id);

    if (!userDetails) {
      res.statusCode = 404;
      throw new Error("User not found.");
    }

    res.status(200).send(userDetails);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
