import axios from "axios";
import { baseURL } from "./baseURL";

//A) Não.
//B) Organização e "explicitação" da resposta da requisição

export type user = {
  id: string;
  name: string;
  email: string;
};

 export const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  console.log(response.data);
  return response.data.map((item: user) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
    };
  });
};
