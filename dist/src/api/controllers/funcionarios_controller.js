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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFuncionarios = exports.updateFuncionarios = exports.createFuncionarios = exports.getAllFuncionarios = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const funcionarios_Services_1 = require("../../model/services/funcionarios_Services");
const funcionariosService = new funcionarios_Services_1.FuncionariosService();
const getAllFuncionarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultado = yield funcionariosService.getAllFuncionarios();
        return res.json(resultado.rows);
    }
    catch (error) {
        return res.status(500).send("Erro no Servidor");
    }
});
exports.getAllFuncionarios = getAllFuncionarios;
const createFuncionarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, senha } = req.body;
    try {
        if (!nome || !senha) {
            return res.status(400).send("Preencha todos os campos por favor.");
        }
        const hashedPassword = yield bcryptjs_1.default.hash(senha, 10);
        const novoFuncionario = yield funcionariosService.createFuncionarios(nome, hashedPassword);
        return res.status(201).json(novoFuncionario.rows[0]);
    }
    catch (error) {
        return res.status(500).send("Erro no Servidor");
    }
});
exports.createFuncionarios = createFuncionarios;
const updateFuncionarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, matricula } = req.body;
    try {
        if (!matricula || !nome) {
            return res.status(400).send("A matrícula e o nome do(a) funcionário(a) são obrigatórios.");
        }
        const funcionarioAtualizado = yield funcionariosService.updateFuncionarios(nome, matricula);
        return res.status(200).json(funcionarioAtualizado.rows[0]);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor");
    }
});
exports.updateFuncionarios = updateFuncionarios;
const deleteFuncionarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { matricula } = req.body;
    try {
        if (!matricula) {
            return res.status(400).send("A matricula do(a) funcionario(a) é obrigatório.");
        }
        yield funcionariosService.deleteFuncionarios(matricula);
        return res.status(200).send("Funcionario(a) deletado(a) com sucesso");
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.deleteFuncionarios = deleteFuncionarios;
