import { pool } from "../../../db";

export class EditorasService {
	async getAllEditoras() {
		return await pool.query("SELECT * FROM editoras");
	}

	async createEditora(nome: string, localizacao: string) {
		return await pool.query(
			"INSERT INTO editoras (nome, localizacao) VALUES ($1, $2) RETURNING *",
			[nome, localizacao]
		);
	}

	async updateEditora(nome: string, localizacao: string, editoras_id: number) {
		return await pool.query(
		  "UPDATE editoras SET nome = $1, localizacao = $2 WHERE editoras_id = $3 RETURNING *",
		  [nome, localizacao, editoras_id]
		);
	}

	async deleteEditora(editoras_id: number) {
		return await pool.query("DELETE FROM editoras WHERE editoras_id = $1", [
			editoras_id,
		]);
	}
}
