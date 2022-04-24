import { forEachChild } from "typescript";
import connection from "./connection";
import { random_id } from "./tools/idGenerator";

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  purchases?: purchase;
};

export type item = {
  id: string;
  name: string;
  price: number;
  image_url: string;
};

export type purchase = {
  id: string;
  item_id: string;
  quantity: number;
  total_price: number;
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

//Register an item
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

//Register a purchase
export const postPurchase = async (
  userId: string,
  itemId: string,
  quantity: number
): Promise<void> => {
  const id = random_id();
  const source: any = await connection("labecommerce_products")
    .select("price")
    .where("id", itemId);
  const price = source[0].price;
  await connection("labecommerce_purchases").insert({
    id: id,
    user_id: userId,
    item_id: itemId,
    quantity: quantity,
    total_price: (quantity * price).toFixed(2),
  });
};

//Get all users
export const getUsers = async (): Promise<any> => {
  const source: user[] = await connection("labecommerce_users");

  return source;
};

//Get all products
export const getItems = async (
  sortTerm?: string,
  searchTerm?: string
): Promise<item[]> => {
  if (sortTerm && !searchTerm) {
    const items = await connection("labecommerce_products").orderBy(
      "name",
      sortTerm
    );
    return items;
  } else if (!sortTerm && searchTerm) {
    const items = await connection("labecommerce_products").whereILike(
      "name",
      `%${searchTerm}%`
    );
    return items;
  } else {
    const items = await connection("labecommerce_products");
    return items;
  }
};

//Get purchases
export const getPurchases = async (userId: string): Promise<purchase[]> => {
  const response = await connection("labecommerce_purchases").where(
    "user_id",
    userId
  );

  return response;
};
