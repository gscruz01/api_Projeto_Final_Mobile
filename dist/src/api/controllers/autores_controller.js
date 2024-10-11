"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAutor = exports.updateAutor = exports.createAutor = exports.getAllAutores = void 0;
const autores_Service_1 = require("../../model/services/autores_Service");
const autoresService = new autores_Service_1.AutoresService();
const getAllAutores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultado = yield autoresService.getAllAutores();
        return res.json(resultado.rows);
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.getAllAutores = getAllAutores;
const createAutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome } = req.body;
    try {
        if (!nome) {
            return res.status(400).send("O nome do autor é obrigatório");
        }
        const novoAutor = yield autoresService.createAutor(nome);
        return res.status(201).json(novoAutor.rows[0]);
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.createAutor = createAutor;
const updateAutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { autor_id, nome } = req.body;
    try {
        if (!autor_id || !nome) {
            return res.status(400).send("O id do autor e o nome são obrigatórios");
        }
        const autorAtualizado = yield autoresService.updateAutor(autor_id, nome);
        return res.status(200).json(autorAtualizado.rows[0]);
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.updateAutor = updateAutor;
const deleteAutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { autor_id } = req.body;
    try {
        if (!autor_id) {
            return res.status(400).send("O id do autor é obrigatório");
        }
        yield autoresService.deleteAutor(Number(autor_id));
        return res.status(200).send("Autor deletado com sucesso");
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.deleteAutor = deleteAutor;
