import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { BsArrowReturnLeft, BsFillPersonCheckFill } from "react-icons/bs";
import api from '../../../services/api';
import './index.css';

interface ITarefa{
    nomeTarefa: string;
    descricao: string;
}

const Tarefas: React.FC = () => {

    const memoria = useHistory()

    const { cod } = useParams<{ cod: string}>()

    const [model, setModel] = useState<ITarefa>({
        nomeTarefa: '',
        descricao: ''
    })

    useEffect(() => {
        console.log(cod)
        if (cod !== undefined) {
            encontraTarefa(cod);
        }
    }, [cod])

    function atualizaModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function enviaDados(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (cod !== undefined) {
            const response = await api.put(`/atualizaTarefa/${cod}`, model)
            console.log(response)
        }
        else
        {
            const response = await api.post('/inserirTarefa', model)
            console.log(response)
        }

        voltar()

    }

    async function encontraTarefa(cod: string) {
        const response = await api.get(`/tarefa/${cod}`)
        console.log(response)
        setModel({
            nomeTarefa: response.data.nomeTarefa,
            descricao: response.data.descricao
        })
    }

    function voltar() {
        memoria.goBack()
    }

    //funções para fazer botao de carregamento
    function solicitaSalvar() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const [carregando, setCarregado] = useState(false);

    useEffect(() => {
        if (carregando) {
            solicitaSalvar().then(() => {
                setCarregado(false);
                voltar()
                // eslint-disable-next-line react-hooks/exhaustive-deps
            });
        }
    }, [carregando]);

    const botaoPress = () => {
        setCarregado(true);
    }
    
    return (
        <div className = "container">
            <br />
            <div className = "task-header">
                <h1>Nova Tarefa</h1>
                <Button variant = "secondary" size = "sm" onClick = {voltar}><BsArrowReturnLeft /> Voltar</Button>
            </div>
            <hr />
            <div className = "container">
                <Form onSubmit = {enviaDados}>
                    <Form.Group>
                        <Form.Label>Nome da Tarefa</Form.Label>
                        <Form.Control 
                            type = "text"
                            name = "nomeTarefa"
                            value = {model.nomeTarefa}
                            onChange = { (e: ChangeEvent<HTMLInputElement>) => atualizaModel(e) }
                        />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control 
                            as = "textarea"
                            name = "descricao"
                            rows = {3}
                            value = {model.descricao}
                            onChange = { (e: ChangeEvent<HTMLInputElement>) => atualizaModel(e) }
                        />
                    </Form.Group>
                    <br />
                    <Button 
                        variant = "warning" 
                        type = "submit"
                        onClick = {!carregando ? botaoPress : null} > 
                            <BsFillPersonCheckFill /> Salvar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Tarefas;