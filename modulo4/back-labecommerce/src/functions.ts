import connection from "./connection";
import { random_id } from "./tools/idGenerator";

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type item = {
  id: string;
  name: string;
  price: number;
  image_url: string;
};

//Register an user
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  const id = random_id();
  await connection("labecommerce_users").insert({
    id: id,
    name: name,
    email: email,
    password: password,
  });
};

export const registerItem = async (
  name: string,
  price: number,
  image: string
): Promise<void> => {
  const id = random_id();
  await connection("labecommerce_products").insert({
    id: id,
    name: name,
    price: price,
    image_url: image,
  });
};

//Get all users
export const getUsers = async (): Promise<user[]> => {
  const users = await connection("labecommerce_users");
  return users;
};

//Get all products
export const getItems = async (): Promise<item[]> => {
  const items = await connection("labecommerce_products");
  return items;
};
