import { pool } from "../../../db";

export class LivrosService {
	static async getLivros() {
		const resultado = await pool.query("SELECT * FROM livros");
		return resultado.rows;
	}

	static async postLivro(
		titulo: string,
		ano_publicacao: string,
		autor_id: number,
		editoras_id: number
	) {
		const query =
			"INSERT INTO livros (titulo, ano_publicacao, autor_id, editoras_id) VALUES ($1, $2, $3, $4) RETURNING *";
		const values = [titulo, ano_publicacao, autor_id, editoras_id];

		const result = await pool.query(query, values);
		return result.rows[0];
	}

	static async updateLivroTitulo(livro_id: number, titulo: string) {
		const query =
			"UPDATE livros SET titulo = $1 where livro_id = $2 RETURNING *";
		const values = [titulo, livro_id];

		const result = await pool.query(query, values);
		return result.rows[0];
	}

	static async updateLivroAnoPublicacao(
		livro_id: number,
		ano_publicacao: string
	) {
		const query =
			"UPDATE livros SET ano_publicacao = $1 where livro_id = $2 RETURNING *";
		const values = [ano_publicacao, livro_id];

		const result = await pool.query(query, values);
		return result.rows[0];
	}

	static async deleteLivro(livro_id: number) {
		const query = "DELETE FROM livros WHERE livro_id = $1";
		const value = [livro_id];

		await pool.query(query, value);
	}
}
