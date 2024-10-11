import { Request, Response } from "express";
import { EditorasService } from "../../model/services/editoras_Services";

const editorasService = new EditorasService();

export const getAllEditoras = async (req: Request, res: Response) => {
	try {
		const resultado = await editorasService.getAllEditoras();
		return res.json(resultado.rows);
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};

export const createEditora = async (req: Request, res: Response) => {
	const { nome, localizacao } = req.body;

	try {
		if (!nome || !localizacao) {
			return res
		 	.status(400)
				.send("O nome e localizacao da editora é obrigatório");
		}

		const novaEditora = await editorasService.createEditora(nome, localizacao);
		return res.status(201).json(novaEditora.rows[0]);
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};

export const updateEditora = async (req: Request, res: Response) => {
	const { nome, localizacao, editoras_id } = req.body;

	try {
		if (!editoras_id || !nome || !localizacao) {
			return res
				.status(400)
				.send("O id da editora e o nome e a localizacao são obrigatórios");
		}
		const editoraAtualizada = await editorasService.updateEditora(
			nome,
			localizacao,
			editoras_id
		);
		return res.status(200).json(editoraAtualizada.rows[0]);
	} catch (error) {
		console.log(error)
		return res.status(500).send("Erro no servidor");
	}
};

export const deleteEditora = async (req: Request, res: Response) => {
	const { editoras_id } = req.body;

	try {
		if (!editoras_id) {
			return res.status(400).send("O id da editora é obrigatório");
		}

		await editorasService.deleteEditora(editoras_id);
		return res.status(200).send("Editora deletada com sucesso");
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};
