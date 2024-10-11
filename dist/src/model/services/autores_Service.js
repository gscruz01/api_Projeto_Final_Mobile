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
exports.AutoresService = void 0;
const db_1 = require("../../../db");
class AutoresService {
    getAllAutores() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("SELECT * FROM autores");
        });
    }
    createAutor(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("INSERT INTO autores (nome) VALUES ($1) RETURNING *", [nome]);
        });
    }
    updateAutor(autor_id, nome) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("UPDATE autores SET nome = $1 WHERE autor_id = $2 RETURNING *", [nome, autor_id]);
        });
    }
    deleteAutor(autor_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("DELETE FROM autores WHERE autor_id = $1", [
                autor_id,
            ]);
        });
    }
}
exports.AutoresService = AutoresService;
