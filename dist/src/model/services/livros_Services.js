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
exports.LivrosService = void 0;
const db_1 = require("../../../db");
class LivrosService {
    static getLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield db_1.pool.query("SELECT * FROM livros");
            return resultado.rows;
        });
    }
    static postLivro(titulo, ano_publicacao, autor_id, editoras_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO livros (titulo, ano_publicacao, autor_id, editoras_id) VALUES ($1, $2, $3, $4) RETURNING *";
            const values = [titulo, ano_publicacao, autor_id, editoras_id];
            const result = yield db_1.pool.query(query, values);
            return result.rows[0];
        });
    }
    static updateLivroTitulo(livro_id, titulo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE livros SET titulo = $1 where livro_id = $2 RETURNING *";
            const values = [titulo, livro_id];
            const result = yield db_1.pool.query(query, values);
            return result.rows[0];
        });
    }
    static updateLivroAnoPublicacao(livro_id, ano_publicacao) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE livros SET ano_publicacao = $1 where livro_id = $2 RETURNING *";
            const values = [ano_publicacao, livro_id];
            const result = yield db_1.pool.query(query, values);
            return result.rows[0];
        });
    }
    static deleteLivro(livro_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM livros WHERE livro_id = $1";
            const value = [livro_id];
            yield db_1.pool.query(query, value);
        });
    }
}
exports.LivrosService = LivrosService;
