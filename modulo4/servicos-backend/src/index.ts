import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import axios from "axios";
const baseURL = "https://viacep.com.br/ws";
const app: Express = express();
app.use(express.json());
app.use(cors());

//exercício 1
const getData = async (cep: string) => {
  try {
    const result = await axios.get(`${baseURL}/${cep}/json`);
    return result;
  } catch (error: any) {
    console.log(error);
  }
};

app.get("/lugar/:cep", async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;
    if (!cep) {
      throw new Error("No CEP no party");
    }
    const result = await getData(cep);
    const response = {
      logradouro: result?.data.logradouro,
      bairro: result?.data.bairro,
      cidade: result?.data.localidade,
      estado: result?.data.uf
    }
    res.status(200).send(response)
  } catch (error: any) {
    console.log(error.message)
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
