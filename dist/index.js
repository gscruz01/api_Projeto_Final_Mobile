"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autores_route_1 = __importDefault(require("./src/api/routes/autores_route"));
const editoras_route_1 = __importDefault(require("./src/api/routes/editoras_route"));
const livros_route_1 = __importDefault(require("./src/api/routes/livros_route"));
const funcionario_route_1 = __importDefault(require("./src/api/routes/funcionario_route"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const consulta = (0, express_1.default)();
const porta = parseInt(process.env.PORT || "3000", 10);
consulta.use(express_1.default.json());
consulta.use("/", funcionario_route_1.default);
consulta.use("/", autores_route_1.default);
consulta.use("/", editoras_route_1.default);
consulta.use("/", livros_route_1.default);
consulta.listen(porta, () => {
    console.log("Funcionando");
    (0, db_1.connectToDatabase)();
});
exports.default = consulta;
