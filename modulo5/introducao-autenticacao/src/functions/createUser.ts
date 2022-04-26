import connection from "../connection";

export const createUser = async (
  id: string,
  email: string,
  password: string
): Promise<void> => {
  await connection("aula_autenticacao_User").insert({
    id: id,
    email: email,
    password: password,
  });
};
