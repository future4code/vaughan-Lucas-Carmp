import express, { Express, Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getItems, getUsers, registerItem, registerUser, user } from "./functions";

const app: Express = express();
app.use(express.json());
app.use(cors());

//Register an user
app.post("/users", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please fill in all fields.");
    }
    await registerUser(name, email, password);
    res.status(201).send("User registered!");
  } catch (error: any) {
    switch (error.message) {
      case "Please fill in all fields.":
        res.status(412).send(error.message);
        break;
      default:
        res.status(500).send("Unexpected error. Contact support.");
    }
  }
});

//Register a product
app.post("/products", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
      throw new Error("Please fill in all fields.");
    }
    await registerItem(name, price, image);
    res.status(201).send("Item registered!");
  } catch (error: any) {
    switch (error.message) {
      case "Please fill in all fields.":
        res.status(412).send(error.message);
        break;
      default:
        res.status(500).send("Unexpected error. Contact support.");
    }
  }
});

//Get all users
app.get("/users", async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getUsers();

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Unexpected error. Contact support.");
  }
});

//Get all users
app.get("/products", async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getItems();

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Unexpected error. Contact support.");
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
