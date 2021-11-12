import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../../services/api';
import './index.css';

interface ITarefa{
    cod: number;
    nomeTarefa: string;
    descricao: string;
    finalizado: boolean;
    criado_em: Date;
    atualizado_em: Date;
}

const Detalhe: React.FC = () => {

    const memoria = useHistory()
    const { cod } = useParams<{ cod: string }>()
    const [tarefa, setTarefa] = useState<ITarefa>()

    function volta(){
        memoria.goBack()
    }

    async function encontraTarefa() {
        const response = await api.get<ITarefa>(`/tarefa/${cod}`)
        console.log(response)
        setTarefa(response.data)
    }

    useEffect(() => {
        encontraTarefa()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cod])

    return(
        <div className = "container">
            <br />
            <div className = "task-header">
                <h1>Detalhes da Tarefa</h1>
                <hr />
                <Button variant = "dark" size = "sm" onClick = {volta}>Voltar</Button>
            </div>
            <br />
            <Card style = {{  width: '18rem'  }}>
                <Card.Body>
                    <Card.Title>{tarefa?.nomeTarefa}</Card.Title>
                    <hr />
                    <Card.Text>
                        <strong>Descrição: </strong>
                        {tarefa?.descricao}
                        <br/>
                        <strong>Situação: </strong>
                        {tarefa?.finalizado ? "Finzalido" : "Pendente"}
                        <br />
                        <strong>Data de Cadastro: </strong>
                        {moment(tarefa?.criado_em).format('DD/MM/YYYY')}
                        <br />
                        <strong>Data de Atualização: </strong>
                        {moment(tarefa?.atualizado_em).format('DD/MM/YYYY')}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Detalhe;