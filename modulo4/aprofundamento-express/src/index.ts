import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running at http://localhost:3003");
});

app.get("/ping", (req, res) => {
  res.send("Pong");
});

type toDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const toDoList: toDo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 2,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 3,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 3,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
];

app.post("/createToDo", (req, res) => {
  const newToDo: toDo = {
    userId: Date.now(),
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed,
  };

  const updatedToDoList: toDo[] = [...toDoList, newToDo];
  res.send(updatedToDoList);
});

app.get("/toDoList/:id/toDos", (req, res) => {
  const userId: string = req.params.id;
  const userToDos = toDoList.filter((item): boolean => {
    return item.userId === Number(userId);
  });
  res.send(userToDos)
});

app.put("/toDoList/:id/editStatus", (req, res) => {
  const id: string = req.params.id;
  const updated: boolean[] = toDoList
    .filter((item): boolean => {
      return item.id === +id;
    })
    .map((item): boolean => {
      return (item.completed = !item.completed);
    });

  res.send(updated);
});

app.delete("/toDoList/:id/delete", (req, res) => {
  const id: string = req.params.id;
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].id === Number(id)) {
      toDoList.splice(i, 1);
    }
  }
  res.send(toDoList);
});

app.get("/toDoList/:status", (req, res) => {
  const statusFilter = toDoList.filter((item): boolean => {
    if (req.params.status.toLowerCase() === "true") {
      return item.completed;
    } else {
      return !item.completed;
    }
  });
  res.send(statusFilter);
});
