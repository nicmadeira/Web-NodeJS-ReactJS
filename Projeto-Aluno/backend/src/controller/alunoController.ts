import { getRepository } from "typeorm";
import { Aluno } from "../entity/aluno";
import { Request, Response } from "express";

//função para ver tabela alunos
export const verAlunos = async(request: Request, response: Response) => {
    const alunos = await getRepository(Aluno).find()
    return response.json(alunos);
};

//funçao para adicionar alunos
export const insereAluno = async(request: Request, response: Response) => {
    const aluno = await getRepository(Aluno).save(request.body)
    return response.json(aluno);
};

//função para consulta apenas um aluno
export const consultAluno = async(request: Request, response: Response) => {
    const {codAluno} = request.params
    const consulta = await getRepository(Aluno).findOne(codAluno)
    return response.json(consulta);
}; 

// função para atualizar aluno
export const atualizaAluno = async(request: Request, response: Response) => {
    const {codAluno} = request.params
    const atualiza = await getRepository(Aluno).update(codAluno, request.body)

    //verificar se existe aluno no sistema
    if (atualiza.affected == 1){
        const alunoAtualizado = await getRepository(Aluno).findOne(codAluno)
        return response.json(alunoAtualizado);
    }
    else
    {
        return response.status(404).json( { mensagem: 'Aluno não encontrado!' });
    }
};

//função para deletar alunos
export const apagaAluno = async(request: Request, response: Response) => {
    const {codAluno} = request.params
    const deleta = await getRepository(Aluno).delete(codAluno)

    if (deleta.affected == 1){
        return response.status(200).json( { mensagem: 'Aluno apagado com sucesso' } );
    }
    else
    {
        return response.status(404).json( { mensagem: 'Aluno não encontrado' } );
    }
};

//função para trancar matricula
export const trancaMatricula = async(request: Request, response: Response) => {
    const {codAluno} = request.params
    const trancado = await getRepository(Aluno).update(codAluno, {matricula: false,})

    if (trancado.affected == 1){
        const matriculaTrancada = await getRepository(Aluno).findOne(codAluno)
        return response.json(matriculaTrancada);
    }
    else
    {
        return response.status(404).json( { mensagem: 'Aluno não encontrado' } )
    }
};