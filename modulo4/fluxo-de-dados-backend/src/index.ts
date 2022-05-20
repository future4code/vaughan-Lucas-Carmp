import express, { Request, Response } from "express";
import { productType, produtos } from "./data";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});

//requisição teste
app.get("/test", (req: Request, res: Response): void => {
  res.send("Requisição tá ok!");
});

//criar novo produto
app.post("/create-product", (req: Request, res: Response): void => {
  try {
    if (!req.body.name || !req.body.price) {
      throw new Error("Preencha o nome e/ou o valor.");
    } else if (
      typeof req.body.name != "string" ||
      typeof req.body.price != "number" ||
      req.body.price < 0
    ) {
      throw new Error(
        "Formatação de dados de entrada incorreta. Revise suas entradas."
      );
    }
    const newProduct: productType = {
      id: Date.now().toString(),
      name: req.body.name,
      price: req.body.price,
    };
    const newList = [...produtos, newProduct];

    res.status(200).send(newList);
  } catch (error: any) {
    switch (error.message) {
      case "Preencha o nome e/ou o valor.":
        res.status(400).send(error.message);
        break;
      case "Formatação de dados de entrada incorreta. Revise suas entradas.":
        res.status(422).send(error.message);
        break;
      default:
        res.status(500).send("Algo deu errado. Procure o suporte.");
    }
  }
});

//retornar todos os produtos
app.get("/products", (req: Request, res: Response): void => {
  res.status(200).send(produtos);
});

//edita o preço de um produto
app.put("/products/edit-price/:id", (req: Request, res: Response): void => {
  try {
    const id = req.params.id;
    if (!req.body.price) {
      throw new Error("Informe o novo valor.");
    } else if (typeof req.body.price != "number" || req.body.price < 0) {
      throw new Error(
        "Formatação de dados de entrada incorreta. Revise suas entradas."
      );
    }
    const idList = produtos.map((item: productType) => {
      return item.id;
    });
    if (!idList.includes(id)) {
      throw new Error("Produto não encontrado.");
    }
    produtos
      .filter((item: productType) => {
        return item.id === id;
      })
      .map((item: productType) => {
        return (item.price = req.body.price);
      });

    res.status(200).send(produtos);
  } catch (error: any) {
    switch (error.message) {
      case "Formatação de dados de entrada incorreta. Revise suas entradas.":
        res.status(422).send(error.message);
        break;
      case "Produto não encontrado.":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Algo deu errado. Procure o suporte.");
    }
  }
});

//deletar um produto
app.delete("/products/delete/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const idList = produtos.map((item: productType) => {
      return item.id;
    });
    if (!idList.includes(id)) {
      throw new Error("Produto não encontrado.");
    }
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].id === id) {
        produtos.splice(i, 1);
      }
    }
    res.status(200).send(produtos);
  } catch (error: any) {
    switch (error.message) {
      case "Produto não encontrado.":
        res.status(404).send(error.message);
        break;
      default:
        res.status(500).send("Algo deu errado. Procure o suporte.");
    }
  }
});
