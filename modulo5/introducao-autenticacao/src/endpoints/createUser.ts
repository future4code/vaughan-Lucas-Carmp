import { Request, Response } from "express";
import connection from "../connection";
import { idGen } from "../services/idGenerator";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body;
        const id = idGen();
        await connection("aula_autenticacao_User")
        .insert({
            id: id,
            email: email,
            password: password
        })
    } catch (error) {
        
    }
}