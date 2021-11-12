import { Router, request, response, Request, Response} from 'express'

//chamando o get de tarefa
import { getTarefas, saveTarefa, getTarefa, updateTarefa, deleteTarefa, finishedTarefa } from './controller/tarefaController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Tarefas!' })
})

routes.get('/tarefas', getTarefas)//exibir todas tarefas
routes.post('/inserirTarefa', saveTarefa)// inserir uma tarefa
routes.get('/tarefa/:cod', getTarefa)// vendo apenas uma tarefa
routes.put('/atualizaTarefa/:cod', updateTarefa)// atualiza tarefa
routes.delete('/deletaTarefa/:cod', deleteTarefa)// deleta tarefa
routes.patch('/finalizaTarefa/:cod', finishedTarefa)// finaliza uma tarefa
 
export default routes