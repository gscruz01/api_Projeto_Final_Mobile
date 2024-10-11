
import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import { FuncionariosService } from "../../model/services/funcionarios_Services";

const funcionariosService = new FuncionariosService();

export const getAllFuncionarios = async (req: Request, res: Response) => {
    try{
        const resultado = await funcionariosService.getAllFuncionarios();
        return res.json(resultado.rows);
    } catch (error){
        return res.status(500).send("Erro no Servidor");
    }
}
export const createFuncionarios = async (req: Request, res: Response) => {
    const {nome, senha} = req.body;
    try{
        if(!nome || !senha){
            return res.status(400).send("Preencha todos os campos por favor.");
        }
        const hashedPassword = await bcrypt.hash(senha, 10);
        const novoFuncionario = await funcionariosService.createFuncionarios(nome, hashedPassword);
        return res.status(201).json(novoFuncionario.rows[0]);
    }catch(error){
        return res.status(500).send("Erro no Servidor");
    }
}
export const updateFuncionarios = async (req: Request, res: Response) => {
	const { nome, matricula } = req.body;

	try {
		if (!matricula || !nome) {
			return res.status(400).send("A matrícula e o nome do(a) funcionário(a) são obrigatórios.");

		}
		const funcionarioAtualizado = await funcionariosService.updateFuncionarios(
			nome,
			matricula
		);
		return res.status(200).json(funcionarioAtualizado.rows[0]);
	} catch (error) {
		console.log(error)
		return res.status(500).send("Erro no servidor");
	}
};
export const deleteFuncionarios = async (req: Request, res: Response) => {
	const { matricula } = req.body;

	try {
		if (!matricula) {
			return res.status(400).send("A matricula do(a) funcionario(a) é obrigatório.");
		}

		await funcionariosService.deleteFuncionarios(matricula);
		return res.status(200).send("Funcionario(a) deletado(a) com sucesso");
	} catch (error) {
		return res.status(500).send("Erro no servidor");
	}
};