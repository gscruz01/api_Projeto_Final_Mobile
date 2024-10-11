import Autores from "./src/api/routes/autores_route";
import Editores from "./src/api/routes/editoras_route";
import Livros from "./src/api/routes/livros_route";
import Funcionarios from "./src/api/routes/funcionario_route";
import express, { Express } from "express";
import { connectToDatabase } from "./db";

const consulta: Express = express();
const porta: number = parseInt(process.env.PORT || "3000", 10);

consulta.use(express.json());

consulta.use("/", Funcionarios);
consulta.use("/", Autores);
consulta.use("/", Editores);
consulta.use("/", Livros);

consulta.listen(porta, () => {
	console.log("Funcionando");
	connectToDatabase();
});

export default consulta;
