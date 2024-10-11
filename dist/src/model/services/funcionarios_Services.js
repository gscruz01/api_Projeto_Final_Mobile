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
exports.FuncionariosService = void 0;
const db_1 = require("../../../db");
class FuncionariosService {
    getAllFuncionarios() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("SELECT * FROM funcionarios");
        });
    }
    createFuncionarios(nome, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("INSERT INTO funcionarios (nome, senha) VALUES ($1, $2) RETURNING *", [nome, senha]);
        });
    }
    updateFuncionarios(nome, matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("UPDATE funcionarios SET nome = $1 WHERE matricula = $2 RETURNING *", [nome, matricula]);
        });
    }
    deleteFuncionarios(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.pool.query("DELETE FROM funcionarios WHERE matricula = $1", [matricula]);
        });
    }
}
exports.FuncionariosService = FuncionariosService;
