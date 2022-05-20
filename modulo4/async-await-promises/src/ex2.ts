import axios from "axios";
import { baseURL } from "./baseURL";

//A) Na nomeada, o async é o primeiro elemento da declaração. Na arrow, é async vai antes dos parâmetros.


const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };