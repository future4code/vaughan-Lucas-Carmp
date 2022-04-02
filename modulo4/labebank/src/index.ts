import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { user, users } from "./resources/database";
const app: Express = express();

app.use(express.json());
app.use(cors());

//Get all users
app.get("/users", (req: Request, res: Response) => {
  try {
    if (users.length === 0) {
      throw new Error("No users registered.");
    } else {
      res.status(200).send(users);
    }
  } catch (error: any) {
    error.message === "No users registered."
      ? res.status(404).send(error.message)
      : res
          .status(500)
          .send("Unexpected error. Contact support for further information.");
  }
});

//Register an user
app.post("/users", (req: Request, res: Response) => {
  try {
    const newUser: user = {
      name: req.body.name,
      CPF: req.body.CPF,
      birth: req.body.birth,
      balance: 0,
      extract: [],
    };

    for (let user of users) {
      if (user.CPF === newUser.CPF) {
        throw new Error("CPF already registered.");
      }
    }

    if (!req.body.name || !req.body.CPF || !req.body.birth) {
      throw new Error("Please fill in all all fields.");
    }

    users.push(newUser);
    res.status(201).send(users);
  } catch (error: any) {
    switch (error.message) {
      case "CPF already registered.":
        res.status(412).send(error.message);
        break;
      case "Please fill in all fields.":
        res.status(412).send(error.message);
        break;
      default:
        res
          .status(500)
          .send("Unexpected error. Contact support for further information.");
    }
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
