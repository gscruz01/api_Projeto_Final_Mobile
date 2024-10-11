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
exports.deleteEditora = exports.updateEditora = exports.createEditora = exports.getAllEditoras = void 0;
const editoras_Services_1 = require("../../model/services/editoras_Services");
const editorasService = new editoras_Services_1.EditorasService();
const getAllEditoras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultado = yield editorasService.getAllEditoras();
        return res.json(resultado.rows);
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.getAllEditoras = getAllEditoras;
const createEditora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, localizacao } = req.body;
    try {
        if (!nome || !localizacao) {
            return res
                .status(400)
                .send("O nome e localizacao da editora é obrigatório");
        }
        const novaEditora = yield editorasService.createEditora(nome, localizacao);
        return res.status(201).json(novaEditora.rows[0]);
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.createEditora = createEditora;
const updateEditora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, localizacao, editoras_id } = req.body;
    try {
        if (!editoras_id || !nome || !localizacao) {
            return res
                .status(400)
                .send("O id da editora e o nome e a localizacao são obrigatórios");
        }
        const editoraAtualizada = yield editorasService.updateEditora(nome, localizacao, editoras_id);
        return res.status(200).json(editoraAtualizada.rows[0]);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor");
    }
});
exports.updateEditora = updateEditora;
const deleteEditora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { editoras_id } = req.body;
    try {
        if (!editoras_id) {
            return res.status(400).send("O id da editora é obrigatório");
        }
        yield editorasService.deleteEditora(editoras_id);
        return res.status(200).send("Editora deletada com sucesso");
    }
    catch (error) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.deleteEditora = deleteEditora;
