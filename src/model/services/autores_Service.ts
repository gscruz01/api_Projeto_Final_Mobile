import { pool } from "../../../db";

export class AutoresService {
	async getAllAutores() {
		return await pool.query("SELECT * FROM autores");
	}

	async createAutor(nome: string) {
		return await pool.query(
			"INSERT INTO autores (nome) VALUES ($1) RETURNING *",
			[nome]
		);
	}

	async updateAutor(autor_id: number, nome: string) {
		return await pool.query(
			"UPDATE autores SET nome = $1 WHERE autor_id = $2 RETURNING *",
			[nome, autor_id]
		);
	}

	async deleteAutor(autor_id: number) {
		return await pool.query("DELETE FROM autores WHERE autor_id = $1", [
			autor_id,
		]);
	}
	

}