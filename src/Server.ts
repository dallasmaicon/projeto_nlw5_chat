import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

/* Aula 01
* GET = Buscas
* POST = Criação
* PUT = Alteração
* Delete = Deletar
* PATCH = Alterar uma informação especifica

app.get("/", (request, response) => {
    //return response.send('Olá NLW 05');
    return response.json({message: "Olá NLW 05"});
});

app.post("/users", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!"});
});*/

/* Aula 02 */
app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));