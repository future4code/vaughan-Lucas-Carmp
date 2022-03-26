type user = {
  name: string;
  email: string;
  role: string;
};

const users = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

const userFilter = (array: user[]): string[] => {
  const selectedUsers = array
    .filter((item) => {
      return item.role === "admin";
    })
    .map((item) => {
      return item.email;
    });

  return selectedUsers;
};

