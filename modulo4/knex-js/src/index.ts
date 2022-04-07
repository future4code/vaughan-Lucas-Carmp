import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

// const getActorByName = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = '${name}'
//     `);

//   return result[0][0];
// };

// const getQuantityByGender = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//         SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"

//     `);
//   return result[0][0];
// };

//editando salario
// app.put("/users/:id", async (req: Request, res: Response): Promise<void> => {
//   try {
//     const id = req.params.id;
//     const newSalary = req.body.salary;
//     await connection("Actor")
//       .update({
//         salary: newSalary,
//       })
//       .where({ id: id });
//     res.end();
//   } catch (error) {
//     console.log("Nao rolou");
//   }
// });

// const deleteActorById = async (id: string): Promise<void> => {
//   await connection("Actor").delete().where({ id: id });
// };

// const avgSalaryByGender = async (gender: string): Promise<any> => {
//   const result = await connection("Actor")
//     .avg("salary as average")
//     .where({ gender: gender });

//   return result[0].average;
// };

// app.get("/users/:gender", async (req: Request, res: Response) => {
//   try {
//     const gender = req.params.gender;

//     console.log(await avgSalaryByGender(gender));

//     res.end();
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("Unexpected error");
//   }
// });

// app.get("/actor", async (req: Request, res: Response): Promise<any> => {
//   try {
//     const gender = req.query.gender;
//     const result = await connection("Actor")
//     .count()
//     .where({gender: gender})

//     res.status(200).send({quantity: result[0]})
//   } catch (error: any) {
//     res.status(500).send("Hoje não...");
//   }
// });

// app.put("/actor", async (req: Request, res: Response): Promise<void> => {
//   try {
//     const id = req.body.id;
//     const newSalary = req.body.newSalary;

//     await connection("Actor").update({ salary: newSalary }).where({ id: id });

//     res.status(200).send(`Salário atualizado. Novo salário: R$${newSalary}`);
//   } catch (error: any) {
//     res.status(500).send("Algo inesperado aconteceu.");
//   }
// });

// const deleteActorById = async (id: string) => {
//   await connection("Actor").delete().where({ id: id });
// };

// app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
//   try {
//     const id = req.params.id;
//     await deleteActorById(id);
//     res.status(200).send("Ator deletado com sucesso.");
//   } catch (error) {
//     res.status(500).send("Algo inesperado aconteceu.")
//   }
// });

// const postNewMovie = async (
//   id: number,
//   name: string,
//   synopsis: string,
//   date: Date,
//   score: number
// ): Promise<void> => {
//   await connection("Movies")
//     .insert({
//       id: id,
//       name: name,
//       synopsis: synopsis,
//       date: date,
//       score: score,
//     })
//     .into("Movies");
// };

// app.post("/movie",
//   async (req: Request, res: Response): Promise<void> => {
//     try {
//       await postNewMovie(
//         Date.now(),
//         req.body.name,
//         req.body.synopsis,
//         req.body.date,
//         req.body.score
//       );

//       res.status(200).send(`${req.body.name} adicionado com sucesso!`)
//     } catch (error) {
//         res.status(500).send("Algo inespetrado aconteceu.")
//     }
//   });

// const get15Movies = async () => {
//   const movies = await connection("Movies").select().limit(15);
//   return movies;
// };

// app.get("/movie/all", async (req: Request, res: Response): Promise<void> => {
//   try {
//     const movies = await get15Movies();

//     res.status(200).send(movies);
//   } catch (error) {
//     res.status(500).send("Algo inesperado aconteceu.");
//   }
// });

const findMovie = async (query: string): Promise<any> => {
  const result = await connection("Movies")
    .select()
    .whereILike('name', `%${query}%`)
    .orWhereILike('synopsis', `%${query}%`)
    .orderBy("date");

    console.log(result)
  return result;
};

app.get("/movie/search", async (req: Request, res: Response): Promise<any> => {
  try {
    const movies = await findMovie(req.query.query as string);
    console.log(movies)
    res.status(200).send({ Resultados: movies });
  } catch (error) {
      res.status(500).send("Algo inesperado aconteceu.")
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
