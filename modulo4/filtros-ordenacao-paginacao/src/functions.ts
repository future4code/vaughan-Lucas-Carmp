import connection from "./connection";

export type user = {
  id: number;
  name: string;
  email: string;
  type: string;
};

//1 Letra A: search user by name
export const searchUser = async (name: string): Promise<user[]> => {
  const result = await connection("aula48_exercicio")
    .whereILike("name", `%${name}%`)
    .select();

  return result;
};

//1 Letra B: search user by type
export const searchByType = async (type: string): Promise<user[]> => {
   const result = await connection("aula48_exercicio")
   .whereILike("type", `%${type}%`)
   .select()

   return result
}
