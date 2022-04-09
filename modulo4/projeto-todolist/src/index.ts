import {
  createTask,
  createUser,
  editUser,
  getUserById,
  getUsers,
} from "./tools/functions";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

//Creates a new user
app.post("/users", async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await connection("Users").select();
    const name: string = req.body.name;
    const nick: string = req.body.nick;
    const email: string = req.body.email;

    if (!name || !nick || !email) {
      throw new Error("Please fill in all fields.");
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].user_nick === nick || users[i].user_email === email) {
        throw new Error("Nickname or email already registered.");
      }
    }

    await createUser(name, nick, email);
    res.status(201).send("User created!");
  } catch (error: any) {
    switch (error.message) {
      case "Please fill in all fields.":
        res.status(412).send(error.message);
        break;
      case "Nickname or email already registered.":
        res.status(412).send(error.message);
        break;
      default:
        res.status(500).send("Something bad happened. Please contact support.");
    }
  }
});

//Creates a new task
app.post("/tasks", async (req: Request, res: Response): Promise<void> => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const deadline = req.body.deadline;
    const creator = req.body.creator;

    if (!title || !description || !deadline || !creator) {
      throw new Error("Please fill in all fields.");
    }

    await createTask(title, description, deadline, creator);

    await connection("UserAndTask");

    res.status(201).send("Task successfully created!");
  } catch (error: any) {
    switch (error.message) {
      case "Please fill in all fields.":
        res.status(412).send(error.message);
        break;
      default:
        res.status(500).send("Something bad happened. Please contact support.");
    }
  }
});

//Gets all users
app.get("/users", async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await getUsers();
    res.status(200).send(response);
  } catch (error: any) {
    res.status(500).send("Something bad happened. Please contact support.");
  }
});

//Gets user by id
app.get("/users/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await connection("Users").select();
    const id: string = req.params.id;

    const idList = users.map((user) => {
      return user.user_id;
    });

    if (!idList.includes(id)) {
      throw new Error("User not found.");
    }

    const result = await getUserById(id);
    res.status(200).send(result);
  } catch (error: any) {
    switch (error.message) {
      case "User not found.":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Something bad happened. Please contact support.");
    }
  }
});

//Edit user
app.patch(
  "/users/edit/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const users = await connection("Users").select();
      const id: string = req.params.id;
      const name: string = req.body.name;
      const nick: string = req.body.nick;

      if (!id) {
        throw new Error("Please insert an Id.");
      }

      if (!name || !nick) {
        throw new Error("Please fill in all fields.");
      }

      for (let i = 0; i < users.length; i++) {
        if (users[i].user_nick === nick) {
          throw new Error("Nickname already registered.");
        }
      }

      const idList = users.map((user) => {
        return user.user_id;
      });

      if (!idList.includes(id)) {
        throw new Error("User not found.");
      }

      await editUser(id, name, nick);
      res.status(200).send("User successfully updated!");
    } catch (error: any) {
      switch (error.message) {
        case "Please insert an Id.":
          res.status(412).send(error.message);
          break;
        case "Please fill in all fields.":
          res.status(412).send(error.message);
          break;
        case "Nickname already registered.":
          res.status(412).send(error.message);
          break;
        case "User not found.":
          res.status(412).send(error.message);
          break;
        default:
          res
            .status(500)
            .send("Something bad happened. Please contact support.");
      }
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
