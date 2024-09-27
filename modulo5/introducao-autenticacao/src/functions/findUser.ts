import connection from "../connection"

export const findUser = async (email: string): Promise<any> => {
    const result = await connection("aula_autenticacao_User")
    .where({email})

    return result[0]
}