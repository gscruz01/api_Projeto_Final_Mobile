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
exports.EditorasService = void 0;
const db_1 = require("../../../db");
class EditorasService {
    getAllEditoras() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("SELECT * FROM editoras");
        });
    }
    createEditora(nome, localizacao) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("INSERT INTO editoras (nome, localizacao) VALUES ($1, $2) RETURNING *", [nome, localizacao]);
        });
    }
    updateEditora(nome, localizacao, editoras_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("UPDATE editoras SET nome = $1, localizacao = $2 WHERE editoras_id = $3 RETURNING *", [nome, localizacao, editoras_id]);
        });
    }
    deleteEditora(editoras_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("DELETE FROM editoras WHERE editoras_id = $1", [
                editoras_id,
            ]);
        });
    }
}
exports.EditorasService = EditorasService;
