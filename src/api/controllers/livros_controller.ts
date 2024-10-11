import { Request, Response } from "express";
import { LivrosService } from "../../model/services/livros_Services";

type Message = {
    text: string;
    type: "error";
    code?: number;
};

let erro: Message;

export const getLivros = async (req: Request, res: Response) => {
    try {
        const livros = await LivrosService.getLivros();
        return res.json(livros);
    } catch {
        return res.status(500).send("Erro no servidor");
    }
};

export const postLivros = async (req: Request, res: Response) => {
    const { titulo, ano_publicacao, autor_id, editoras_id } = req.body;
    console.log("Recebido:", req.body); 
    try {
        if (!titulo || !ano_publicacao || !autor_id || !editoras_id) {
            return res.status(400).send(
                (erro = {
                    text: "Todos dados não estão inseridos, insira-os para prosseguir",
                    type: "error",
                    code: 400,
                })
            );
        } else {
            const newLivro = await LivrosService.postLivro(titulo, ano_publicacao, autor_id, editoras_id);
            return res.status(201).send(newLivro);
        }
    } catch {
        return res.status(500).send(erro);
    }
};

export const putLivros = async (req: Request, res: Response) => {
    const { livro_id, titulo, autor_id, editoras_id, ano_publicacao } = req.body;

    try {
        if (!livro_id && !titulo && !autor_id && !editoras_id && !ano_publicacao) {
            return res.status(400).send(
                (erro = {
                    text: "Pelo menos um campo tem que estar preenchido para ser editado",
                    type: "error",
                    code: 400,
                })
            );
        } else if (!livro_id) {
            return res
                .status(400)
                .send("Não é possível editar qualquer valor sem o livro_id");
        } else if (editoras_id || autor_id) {
            return res
                .status(400)
                .send(
                    "Não é possível editar o autor_id ou editoras_id por serem os criadores padrões desse livro"
                );
        } else if (livro_id && titulo) {
            const editLivros = await LivrosService.updateLivroTitulo(livro_id, titulo);
            return res.status(200).send(editLivros);
        } else if (ano_publicacao && livro_id) {
            const editLivros = await LivrosService.updateLivroAnoPublicacao(livro_id, ano_publicacao);
            return res.status(200).send(editLivros);
        }
    } catch {
        return res.status(400).send(erro);
    }
};

export const deleteLivros = async (req: Request, res: Response) => {
    const { livro_id } = req.body;

    try {
        if (!livro_id) {
            return res.status(400).send(
                (erro = {
                    text: "O id do livro é necessário para exclusão",
                    type: "error",
                    code: 400,
                })
            );
        } else {
            await LivrosService.deleteLivro(livro_id);
            return res.status(200).send("Deletado com Sucesso");
        }
    } catch {
        return res.status(400).send(erro);
    }
};
