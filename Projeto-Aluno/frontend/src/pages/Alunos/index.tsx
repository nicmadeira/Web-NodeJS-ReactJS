import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment'
import { useHistory } from 'react-router';

interface IAluno {
    codAluno: number;
    nome: string;
    ra: string;
    idade: number;
    endereco: string;
    dataNasc: Date;
    matricula: boolean;
    atualizaDia: Date;
}

const Alunos: React.FC = () => {

    const [alunos, setAlunos] = useState<IAluno[]>([])
    const memoria = useHistory()

    useEffect(() => {
        carregaAlunos()
    }, [])

    async function carregaAlunos() {
        const response = await api.get('/alunos')
        console.log(response);
        setAlunos(response.data)
    }

    function novoAluno() {
        memoria.push('/alunosCadastro')
    }

    function editaAluno(codAluno: number) {
        memoria.push(`/alunosCadastro/${codAluno}`)
    }

    function vizualizaAluno(codAluno: number) {
        memoria.push(`/alunoDetalhe/${codAluno}`)
    }

    async function trancaMatricula(codAluno: number) {
        await api.patch(`/aluno/${codAluno}`)
        carregaAlunos()
    }

    async function deletaAluno(codAluno: number) {
        await api.delete(`/aluno/${codAluno}`)
        carregaAlunos()
    }

    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }

    return(
        <div className = "container">
            <br />
            <div className = "aluno-linha">
                <h1>Alunos</h1>
                <Button variant = "dark" size = "sm" onClick = {novoAluno}>Novo Aluno</Button>
            </div>
            <hr />
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Aluno</th>
                        <th>RA</th>
                        <th>Idade</th>
                        <th>Endereço</th>
                        <th>Data de Nascimento</th>
                        <th>Matricula</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(Aluno => (
                            <tr key = {Aluno.codAluno}>
                                <td>{Aluno.codAluno}</td>
                                <td>{Aluno.nome}</td>
                                <td>{Aluno.ra}</td>
                                <td>{Aluno.idade}</td>
                                <td>{Aluno.endereco}</td>
                                <td>{formatDate(Aluno.dataNasc)}</td>
                                <td>{Aluno.matricula ? "Ativo" : "Trancado"}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick = {() => editaAluno(Aluno.codAluno)} disabled = {Aluno.matricula === false}>Editar</Button>{'  '}
                                    <Button size="sm" variant="success" onClick = {() => trancaMatricula(Aluno.codAluno)} disabled = {Aluno.matricula === false}>Trancar</Button>{'  '}
                                    <Button size="sm" variant="warning" onClick = {() => vizualizaAluno(Aluno.codAluno)}>Visualizar</Button>{'  '}
                                    <Button size="sm" variant="danger" onClick = {() => deletaAluno(Aluno.codAluno)}>Remover</Button>{'  '}

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Alunos;