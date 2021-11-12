import { Router, request, response, Request, Response } from 'express'

import { verAlunos } from './controller/alunoController';
import { insereAluno } from './controller/alunoController';
import { consultAluno } from './controller/alunoController';
import { atualizaAluno } from './controller/alunoController';
import { apagaAluno } from './controller/alunoController';
import { trancaMatricula } from './controller/alunoController';

//chamando rotas
const rotas = Router()

//rota para ver alunos
rotas.get('/alunos', verAlunos)

//rota para adicionar alunos novos
rotas.post('/insereAluno', insereAluno)

//rota para consultar apenas um aluno
rotas.get('/aluno/:codAluno',consultAluno)

//rota para atualizar cadastro do aluno
rotas.put('/aluno/:codAluno', atualizaAluno)

//rota para deletar aluno da tabela
rotas.delete('/aluno/:codAluno', apagaAluno)

//rota para trancar matricula de aluno
rotas.patch('/aluno/:codAluno', trancaMatricula)

export default rotas