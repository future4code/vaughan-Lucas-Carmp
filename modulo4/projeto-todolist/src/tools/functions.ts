import connection from "../connection";

//Creates a new user
export const createUser = async (
  name: string,
  nick: string,
  email: string
): Promise<void> => {
  await connection("Users")
    .insert({
      user_id: Date.now(),
      user_name: name,
      user_nick: nick,
      user_email: email,
    })
    .into("Users");
};

//Creates a new task
export const createTask = async (
  title: string,
  description: string,
  deadline: string,
  creator: string
): Promise<void> => {
  await connection("Tasks")
    .insert({
      task_id: Date.now(),
      task_title: title,
      task_description: description,
      task_deadline: deadline.split("/").reverse().join("-"),
      task_creator: creator,
    })
    .into("Tasks");
};

//Gets all users
export const getUsers = async (): Promise<any> => {
  const users: any = [];
  const result = await connection("Users").select("user_id", "user_nick");
  users.push(result);
  return { users: users.flat(1) };
};

//Gets user by id
export const getUserById = async (id: string): Promise<any> => {
  const response = await connection("Users")
    .select("user_id", "user_nick")
    .where("user_id", id);

  return response[0];
};

//Gets task by id
export const getTaskById = async (id: string): Promise<any> => {
  const response = await connection("Tasks").select(
    "task_id", 
    "task_title",
    "task_description",
    "task_status",
    "task_deadline",
    "task_creator"
  )
  .where("task_id", id);

  return response[0];
};

//Edit user
export const editUser = async (
  id: string,
  name: string,
  nick: string
): Promise<void> => {
  await connection("Users")
    .update({
      user_name: name,
      user_nick: nick,
    })
    .where("user_id", id);
};
