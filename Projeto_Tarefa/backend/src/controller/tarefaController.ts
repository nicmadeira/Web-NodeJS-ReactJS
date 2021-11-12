import { getRepository } from "typeorm";
import { Tarefa } from "../entity/tarefa";
import { Request, Response } from "express";

export const getTarefas = async(request: Request, response: Response) => {
    //buscando todas as tarefas
    const tarefas = await getRepository(Tarefa).find()
    return response.json(tarefas);
};

export const saveTarefa = async(request: Request, response: Response) => {
    //inserindo tarefas na tabela
    const incluirTarefa = await getRepository(Tarefa).save(request.body)
    return response.json(incluirTarefa);
};

export const getTarefa = async(request: Request, response: Response) => {
    //buscando somente uma tarefa
    const {cod} = request.params
    const tarefa = await getRepository(Tarefa).findOne(cod)
    return response.json(tarefa)
    
};

export const updateTarefa = async(request: Request, response: Response) => {
    //atualizando uma tarefa
    const {cod} = request.params
    const atuaTarefa = await getRepository(Tarefa).update(cod, request.body)

    //verifica se existe na tabela
    if(atuaTarefa.affected == 1){
        const tarefaAtualizada = await getRepository(Tarefa).findOne(cod)
        return response.json(tarefaAtualizada);
    }
    else
    {
        return response.status(404).json( {mensagem: 'Não foi possivel encontrar essa tarefa!!'} )
    }
};

export const deleteTarefa = async(request: Request, response: Response) => {
    //deletando uma tarefa da tabela
    const {cod} = request.params
    const excluiTarefa = await getRepository(Tarefa).delete(cod)

    //verifica se existe na tabela, caso tenha exclui
    if(excluiTarefa.affected == 1){
        return response.status(200).json( { mensagem: 'Tarefa excluida com sucesso!' } );
    }
    else
    {
        return response.status(404).json( { mensagem: 'A tarefa que pretende excluir, não existe!' } );
    }
};

export const finishedTarefa = async(request: Request, response: Response) => {
    //finalizando tarefa da tabela
    const {cod} = request.params
    const finalTarefa = await getRepository(Tarefa).update(cod, {finalizado: true,})

    //procura tarefa para finalizar
    if (finalTarefa.affected == 1){
        const tarefaFinalizada = await getRepository(Tarefa).findOne(cod)
        return response.json(tarefaFinalizada);
    }
    else
    {
        return response.status(404).json( {mensagem: 'Tarefa não localizada' } );
    }
};