import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';
import './index.css';
import { useHistory } from 'react-router';
import { BsListTask, BsPencilSquare, BsArchive, BsFileText, BsTrash } from "react-icons/bs";

interface ITarefa{
    cod: number;
    nomeTarefa: string;
    descricao: string;
    finalizado: boolean;
    criado_em: Date;
    atualizado_em: Date;
}

const Tarefas: React.FC = () => {

    const [Tarefas, setTarefas] = useState<ITarefa[]>([])
    const memoria = useHistory()

    useEffect(() => {
        carregaTarefas()
    }, [])

    async function carregaTarefas() {
        const response = await api.get('/tarefas')
        console.log(response);
        setTarefas(response.data)
    }

    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    function novaTarefa() {
        memoria.push('/inserirTarefa')
    }

    function editaTarefa(cod: number) {
        memoria.push(`/atualizaTarefa/${cod}`)
    }

    function vizualizarTarefa(cod: number){
        memoria.push(`/tarefaDetalhe/${cod}`)
    }

    async function finalizaTarefa(cod: number) {
        await api.patch(`/finalizaTarefa/${cod}`)
        carregaTarefas()
    }

    async function deletaTarefa(cod: number) {
        await api.delete(`/deletaTarefa/${cod}`)
        carregaTarefas()
    }

    return (

        <div className = "container">
            <br />
            <div className = "task-header">
                <h1>Tarefas</h1>
                <Button variant = "dark" size = "sm" onClick = {novaTarefa}><BsListTask /> Nova Tarefa</Button>
            </div>
            <hr />
            <br />
            <Table striped bordered hover className = "text-center">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Tarefa</th>
                        <th>Descrição</th>
                        <th>Data de Atualização</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Tarefas.map(Tarefa => (
                            <tr key = {Tarefa.cod}>
                                <td>{Tarefa.cod}</td>
                                <td>{Tarefa.nomeTarefa}</td>
                                <td>{Tarefa.descricao}</td>
                                <td>{formatDate(Tarefa.atualizado_em)}</td>
                                <td>{Tarefa.finalizado ? "Finalizado" : "Pendente"}</td>
                                <td>
                                    <div className = "mb-2">
                                        <Button size="sm" variant="primary" onClick = {() => editaTarefa(Tarefa.cod)} disabled = {Tarefa.finalizado}><BsPencilSquare/> Editar</Button>{' '}
                                        <Button size="sm" variant="success" onClick = {() => finalizaTarefa(Tarefa.cod)} disabled = {Tarefa.finalizado}><BsArchive/> Finalizar</Button>{' '}
                                        <Button size="sm" variant="warning" onClick = {() => vizualizarTarefa(Tarefa.cod)}><BsFileText/> Visualizar</Button>{' '}
                                        <Button size="sm" variant="danger" onClick = {() => deletaTarefa(Tarefa.cod)}><BsTrash/> Remover</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Tarefas;