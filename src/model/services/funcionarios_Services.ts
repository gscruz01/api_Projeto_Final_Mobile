import { pool } from "../../../db";

export class FuncionariosService {
    async getAllFuncionarios(){
        return await pool.query("SELECT * FROM funcionarios");
    }
    async createFuncionarios(nome: String, senha: String){
        return await pool.query("INSERT INTO funcionarios (nome, senha) VALUES ($1, $2) RETURNING *",
        [nome, senha]
    );
    }
    async updateFuncionarios(nome: String, matricula: String){
        return await pool.query("UPDATE funcionarios SET nome = $1 WHERE matricula = $2 RETURNING *",
            [nome, matricula]
        );
    }
    async deleteFuncionarios(matricula: String){
        return await pool.query("DELETE FROM funcionarios WHERE matricula = $1", [matricula]);
    }
}
