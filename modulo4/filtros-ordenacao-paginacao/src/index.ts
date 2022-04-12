import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import selectAllUsers from "./functions";

const app: Express = express();
app.use(express.json());
app.use(cors());

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
      const nameQuery = req.query.params;
     const users = await selectAllUsers()

     if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
     }

     res.status(200).send(users)
     
  } catch (error: any) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});