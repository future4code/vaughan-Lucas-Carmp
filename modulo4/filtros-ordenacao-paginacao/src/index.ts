import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { searchByType, searchUser } from "./functions";

const app: Express = express();
app.use(express.json());
app.use(cors());


// 1 Letra A: SEARCH USER BY NAME
app.get("/users", async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    if (!name) {
      throw new Error("Enter a name.");
    }
    const result = await searchUser(name);
    res.status(200).send(result);
  } catch (error: any) {
    console.log(error)
    error.message === "Enter a name."
      ? res.status(412).send(error.message)
      : res.status(500).send("Something bad happened.");
  }
});

//1 Letra B: SEARCH BY TYPE
app.get("/users/type", async (req: Request, res: Response) => {
  try {
    const type = req.query.type as string;
    if (!type) {
      throw new Error("Enter a type.");
    }
    const result = await searchByType(type);
    res.status(200).send(result);
  } catch (error: any) {
    console.log(error)
    error.message === "Enter a name."
      ? res.status(412).send(error.message)
      : res.status(500).send("Something bad happened.");
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
