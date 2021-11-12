import React, {useState, ChangeEvent, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../../services/api';
import '../index.css'

interface IAluno {
    nome: string;
    ra: string;
    idade: number;
    endereco: string;
    dataNasc: Date;
}

const Alunos: React.FC = () => {

    const retorno = useHistory()
    const { codAluno } = useParams<{ codAluno: string }>()

    const [alunoModel, setModel] = useState<IAluno>({
        nome: '',
        ra: '',
        idade: 0,
        endereco: '',
        dataNasc: new Date()
    })

    useEffect(() => {
        console.log(codAluno)
        if (codAluno !== undefined) {
            encontraAluno(codAluno)
        }
    }, [codAluno])

    function atualizAluno(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...alunoModel,
            [e.target.name]: Number(e.target.value) ? Number(e.target.value) : e.target.value
        })
    }

    async function encontraAluno(codAluno: string) {
        const response = await api.get(`/aluno/${codAluno}`)
        console.log(response)
        setModel({
            nome: response.data.nome,
            ra: response.data.ra,
            idade: response.data.idade,
            endereco: response.data.endereco,
            dataNasc: response.data.dataNasc
        })
    }

    async function enviaDados(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (codAluno !== undefined) {
            const response = await api.put(`/aluno/${codAluno}`, alunoModel)
            console.log(response)
        }
        else 
        {
            const response = await api.post('/insereAluno', alunoModel)
            console.log(response)
        }
        voltar()
    }

    function voltar() {
        retorno.goBack()
    }


    return (
        <div className = "container">
            <br />
            <div className = "aluno-linha">
                <h1>Novo Aluno</h1>
                <Button variant = "dark" size = "sm" onClick = {voltar}>Voltar</Button>
            </div>
            <hr />
            <br />
            <div className="container">
                <Form onSubmit = {enviaDados}>
                    <Form.Group>
                        <Form.Label>Aluno</Form.Label>
                        <Form.Control
                            type = "text"
                            name = "nome"
                            value = {alunoModel.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizAluno(e)}/>
                    </Form.Group>

                    <br />
 
                    <Form.Group>
                        <Form.Label>RA</Form.Label>
                        <Form.Control
                            type = "text"
                            name = "ra"
                            value = {alunoModel.ra}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizAluno(e)}/>
                    </Form.Group>

                    <br />

                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            type = "number"
                            name = "idade"
                            value = {alunoModel.idade}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizAluno(e)}/>
                    </Form.Group>

                    <br />

                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            type = "text"
                            name = "endereco"
                            value = {alunoModel.endereco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizAluno(e)}/>
                    </Form.Group>

                    <br />

                    <Form.Group>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control 
                            type="date" 
                            name="dataNasc"
                            value = {alunoModel.dataNasc}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizAluno(e)} />
                    </Form.Group>

                    <br />

                    <Button variant = "dark" type = "submit">Salvar</Button>
                </Form>
            </div>
        </div>
    );
}

export default Alunos;