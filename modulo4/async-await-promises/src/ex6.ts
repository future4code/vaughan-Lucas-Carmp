import { user } from "./ex3";
import axios from "axios";
import { baseURL } from "./baseURL";

//A) o promise.all faz diferentes reuqisições de uma só vez.
//B) o promise.all é bom para enviar multiplas requisições, como no caso do array de usuários.

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    const promises = users.map((user) => {
      return axios.post(`${baseURL}/notifications`, {
        subscriberId: user.id,
        message: message,
      });
    });

    await Promise.all(promises);

    console.log("All notifications sent");
  } catch {
    console.log("Error");
  }
};
