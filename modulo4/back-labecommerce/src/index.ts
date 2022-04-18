import express, { Express, Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {
  getItems,
  getPurchases,
  getUsers,
  postPurchase,
  purchase,
  registerItem,
  registerUser,
  user,
} from "./functions";

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

//Register a purchase
app.post("/purchases", async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id, item_id, quantity } = req.body;
    await postPurchase(user_id, item_id, quantity);
    res.status(201).send("Purchase registered.");
  } catch (error) {
    res.status(500).send("Unexpected error. Contact support.");
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

//Get all products
app.get("/products", async (req: Request, res: Response): Promise<void> => {
  try {
    const sortTerm = req.query.order as string;
    const searchTerm = req.query.search as string;
    if (sortTerm && !searchTerm) {
      const response = await getItems(sortTerm);

      res.status(200).send(response);
    } else if (!sortTerm && searchTerm) {
      const response = await getItems(undefined, searchTerm);

      res.status(200).send(response);
    } else {
      const response = await getItems();

      res.status(200).send(response);
    }
  } catch (error) {
    res.status(500).send("Unexpected error. Contact support.");
  }
});

//Get purchases
app.get(
  "/users/:userId/purchases",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const userId = req.params.userId;
      const response = await getPurchases(userId);
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send("Unexpected error. Contact support.");
    }
  }
);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
