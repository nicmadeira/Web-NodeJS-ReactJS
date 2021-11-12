import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../../services/api';
import './index.css';

interface IAluno {
    codAluno: number;
    nome: string;
    ra: string;
    idade: number;
    endereco: string;
    dataNasc: Date;
    matricula: boolean;
    criadoDia: Date;
    atualizaDia: Date;
}


const Detalhes: React.FC = () => {

    const historico = useHistory()
    const { codAluno } = useParams<{ codAluno: string }>()
    const [aluno, setAluno] = useState<IAluno>()

    function voltar(){
        historico.goBack()
    }

    async function encontrarAluno() {
        const response = await api.get(`/aluno/${codAluno}`)
        console.log(response)
        setAluno(response.data)
    }

    useEffect(() => {
        encontrarAluno()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [codAluno])

    return (
        <div className = "container">
            <br />
            <div className = "aluno-linha">
                <h1>Detalhes do Aluno</h1>
                <Button variant = "dark" size = "sm" onClick = {voltar}>Voltar</Button>
            </div>
            <hr />
            <br />

            <Card style = {{  width: '18rem'  }}>
                <Card.Body>
                    <Card.Title>Dados do Aluno</Card.Title>
                    <Card.Text>
                        <strong>Nome: </strong>
                            {aluno?.nome}
                        <br />
                        <strong>RA: </strong>
                            {aluno?.ra}
                        <br />
                        <strong>Idade: </strong>
                            {aluno?.idade}
                        <br />
                        <strong>Endereço: </strong>
                            {aluno?.endereco}
                        <br />
                        <strong>Data de Nascimento: </strong>
                            {moment(aluno?.dataNasc).format('DD/MM/YYYY')}
                        <br />
                        <strong>Matricula: </strong>
                            {aluno?.matricula ? "Ativo" : "Trancado"}
                        <br />
                        <hr />
                        <strong>Data de Cadastro: </strong>
                            {moment(aluno?.criadoDia).format('DD/MM/YYYY')}
                        <br />
                        <strong>Ultima Atualização: </strong>
                            {moment(aluno?.atualizaDia).format('DD/MM/YYYY')}
                        <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Detalhes;