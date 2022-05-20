import axios from "axios";
import { baseURL } from "./baseURL";

// A) assíncrona, pois faz uma requisição.


const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  const body = {
    title: "Lucas consegue a vaga na Meta!",
    content:
      "Após muito suor e esforço, Lucas Pasche consegue uma vaga no time de Salesforce!",
    date: new Date("01/06/2022").getTime(),
  };
  await axios.put(`${baseURL}/news`, body);
};
