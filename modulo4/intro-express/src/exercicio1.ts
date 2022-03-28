import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003.");
});

app.get("/", (req, res) => {
  res.send("Está funcionando.");
});

type postType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type userType = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
  posts: postType[];
};

// posts dentro do array de usuários para melhor organização, afinal cada usuário tem seus próprios posts
const users: userType[] = [
  {
    id: 1,
    name: "Lucas Pasche",
    phone: "1234-5678",
    email: "lucaspasche@live.com",
    website: "lucas.pasche.com",
    posts: [
      {
        id: 1,
        title: "Cogito ergo sum",
        body: "lorem ipsum",
        userId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Nathália de Almeida",
    phone: "1234-5679",
    email: "nathaliachristt@live.com",
    website: "nathalia.almeida.com",
    posts: [
      {
        id: 2,
        title: "Cogito ergo sum",
        body: "lorem ipsum",
        userId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Benny Pasche",
    phone: "1234-5633",
    email: "bennypasche@live.com",
    website: "benny.pasche.com",
    posts: [
      {
        id: 3,
        title: "Cogito ergo sum",
        body: "lorem ipsum",
        userId: 3,
      },
    ],
  },
  {
    id: 4,
    name: "Rebecca Malmann",
    phone: "1234-3278",
    email: "reb_malmann@live.com",
    website: "rebecca.artista.com",
    posts: [
      {
        id: 4,
        title: "Cogito ergo sum",
        body: "lorem ipsum",
        userId: 4,
      },
    ],
  },
  {
    id: 5,
    name: "Déli Malmann",
    phone: "1234-2355",
    email: "delinho@live.com",
    website: "deli.lavajato.com",
    posts: [
      {
        id: 5,
        title: "Cogito ergo sum",
        body: "lorem ipsum",
        userId: 5,
      },
      {
        id: 6,
        title: "salve salve",
        body: "como vao voces",
        userId: 5,
      },
    ],
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/posts", (req, res) => {
  const mutableUsers = users;
  const posts = mutableUsers
    .map((user) => {
      return user.posts;
    })
    .flat(1);
  res.send(posts);
});

app.get("/posts/:userId", (req, res) => {
  const id = req.params.userId;
  const postsByUser = users
    .filter((user) => {
      return user.id === Number(id);
    })
    .map((user) => {
      return user.posts;
    })
    .flat(1);
  res.send(postsByUser);
});

app.delete("/posts/:postId", (req, res) => {
  const postId = req.params.postId;
  const mutableUsers = users;
  const posts = mutableUsers
    .map((user) => {
      return user.posts;
    })
    .flat(1)
    .filter((post) => {
      return post.id != Number(postId);
    });
  res.send(posts);
});

app.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const mutableUsers = users;
  const newUsers = mutableUsers
    .filter((user) => {
      return user.id != Number(userId);
    })
    .flat(1);

  res.send(newUsers);
});
