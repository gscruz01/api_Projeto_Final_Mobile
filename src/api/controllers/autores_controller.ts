import { Request, Response } from "express";
import { AutoresService } from "../../model/services/autores_Service";

const autoresService = new AutoresService();

export const getAllAutores = async (req: Request, res: Response) => {
	try {
		const resultado = await autoresService.getAllAutores();
		return res.json(resultado.rows);
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};

export const createAutor = async (req: Request, res: Response) => {
	const { nome } = req.body;

	try {
		if (!nome) {
			return res.status(400).send("O nome do autor é obrigatório");
		}

		const novoAutor = await autoresService.createAutor(nome);
		return res.status(201).json(novoAutor.rows[0]);
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};

export const updateAutor = async (req: Request, res: Response) => {
	const { autor_id, nome } = req.body;

	try {
		if (!autor_id || !nome) {
			return res.status(400).send("O id do autor e o nome são obrigatórios");
		}

		const autorAtualizado = await autoresService.updateAutor(autor_id, nome);
		return res.status(200).json(autorAtualizado.rows[0]);
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};

export const deleteAutor = async (req: Request, res: Response) => {
	const { autor_id } = req.body;

	try {
		if (!autor_id) {
			return res.status(400).send("O id do autor é obrigatório");
		}

		await autoresService.deleteAutor(Number(autor_id));
		return res.status(200).send("Autor deletado com sucesso");
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};