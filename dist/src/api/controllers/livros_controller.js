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
exports.deleteLivros = exports.putLivros = exports.postLivros = exports.getLivros = void 0;
const livros_Services_1 = require("../../model/services/livros_Services");
let erro;
const getLivros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livros = yield livros_Services_1.LivrosService.getLivros();
        return res.json(livros);
    }
    catch (_a) {
        return res.status(500).send("Erro no servidor");
    }
});
exports.getLivros = getLivros;
const postLivros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, ano_publicacao, autor_id, editoras_id } = req.body;
    console.log("Recebido:", req.body);
    try {
        if (!titulo || !ano_publicacao || !autor_id || !editoras_id) {
            return res.status(400).send((erro = {
                text: "Todos dados não estão inseridos, insira-os para prosseguir",
                type: "error",
                code: 400,
            }));
        }
        else {
            const newLivro = yield livros_Services_1.LivrosService.postLivro(titulo, ano_publicacao, autor_id, editoras_id);
            return res.status(201).send(newLivro);
        }
    }
    catch (_a) {
        return res.status(500).send(erro);
    }
});
exports.postLivros = postLivros;
const putLivros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { livro_id, titulo, autor_id, editoras_id, ano_publicacao } = req.body;
    try {
        if (!livro_id && !titulo && !autor_id && !editoras_id && !ano_publicacao) {
            return res.status(400).send((erro = {
                text: "Pelo menos um campo tem que estar preenchido para ser editado",
                type: "error",
                code: 400,
            }));
        }
        else if (!livro_id) {
            return res
                .status(400)
                .send("Não é possível editar qualquer valor sem o livro_id");
        }
        else if (editoras_id || autor_id) {
            return res
                .status(400)
                .send("Não é possível editar o autor_id ou editoras_id por serem os criadores padrões desse livro");
        }
        else if (livro_id && titulo) {
            const editLivros = yield livros_Services_1.LivrosService.updateLivroTitulo(livro_id, titulo);
            return res.status(200).send(editLivros);
        }
        else if (ano_publicacao && livro_id) {
            const editLivros = yield livros_Services_1.LivrosService.updateLivroAnoPublicacao(livro_id, ano_publicacao);
            return res.status(200).send(editLivros);
        }
    }
    catch (_a) {
        return res.status(400).send(erro);
    }
});
exports.putLivros = putLivros;
const deleteLivros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { livro_id } = req.body;
    try {
        if (!livro_id) {
            return res.status(400).send((erro = {
                text: "O id do livro é necessário para exclusão",
                type: "error",
                code: 400,
            }));
        }
        else {
            yield livros_Services_1.LivrosService.deleteLivro(livro_id);
            return res.status(200).send("Deletado com Sucesso");
        }
    }
    catch (_a) {
        return res.status(400).send(erro);
    }
});
exports.deleteLivros = deleteLivros;
