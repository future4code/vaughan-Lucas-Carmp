import { Request, Response } from "express";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body;

        if (!email || !email.includes("@") || !password){
            res.statusCode = 412
            throw new Error("Insira todos os valores.");           
        }

        
    } catch (error) {
        
    }
}