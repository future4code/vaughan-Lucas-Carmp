import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Type, users, userType } from "./list";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.send("Tá rodando");
});

//LISTAR TODOS OS USUÁRIOS OU TIPO ESPECÍFICO
app.get("/users", (req: Request, res: Response) => {
  try {
    const type: string = req.query.type as string;
    const filterType = type.toUpperCase();
    if (!type) {
      throw new Error("Defina um parâmetro para busca.");
    } else if (filterType != "ADMIN" && filterType != "NORMAL") {
      throw new Error("Tipo não encontrado.");
    } else {
      const result = users.filter((item) => {
        return item.type === filterType;
      });
      res.status(200).send(result);
    }
  } catch (error: any) {
    switch (error.message) {
      case "Defina um parâmetro para busca.":
        res.status(412).send(error.message);
        break;
      case "Tipo não encontrado.":
        res.status(404).send(error.message);
        break;
      default:
        res.status(200).send(users);
    }
  }
});

//letra A: método GET para puxar todos os usuários.
//letra B: a entidade deve ter um nome que faça sentido de acordo com o dado que está sendo retornado, no caso uma lista de usuários
app.get("/users/:name", (req: Request, res: Response) => {
  try {
    const name = req.params.name.toLowerCase();
    const nameList = users.map((item) => {
      return item.name.toLowerCase();
    });

    if (!nameList.includes(name)) {
      throw new Error("Usuário não encontrado.");
    }
    const selectedUser = users.find((item) => {
      return item.name.toLowerCase() === name;
    });

    res.status(200).send(selectedUser);
  } catch (error: any) {
    switch (error.message) {
      case "Usuário não encontrado.":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Erro inesperado. Procure o suporte.");
    }
  }
});

app.post("/users/add", (req: Request, res: Response) => {
  try {
    const body = req.body;
    if (!body) {
      throw new Error("Dados insuficientes para requisição.");
    }
    const newUser: userType = {
        id: Date.now(),
        name: body.name,
        email: body.email,
        type: body.type,
        age: body.age
    }
    const updatedUsersList = [...users, newUser]
    res.status(200).send(updatedUsersList)
  } catch (error) {}
});
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
