import { user } from './ex3';
import axios from "axios";
import { baseURL } from "./baseURL";

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };