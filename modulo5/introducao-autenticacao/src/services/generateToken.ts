import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

export type authenticationData = {
  id: string;
};

export const generateToken = (id: authenticationData): string => {
  const token = jwt.sign({ id: id }, process.env.JWT_KEY as string, {
    expiresIn: "24h",
  });

  return token;
};
