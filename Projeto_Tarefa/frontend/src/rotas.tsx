import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Tarefas from './pages/Tarefas';
import TarefasForm from './pages/Tarefas/Form';
import Detalhes from './pages/Tarefas/Detalhe';

const Rotas: React.FC = () => {
    return (
        <Switch>
            <Route path = "/" exact component = {Inicio} />
            <Route path = "/tarefas" exact component = {Tarefas} />
            <Route path = "/inserirTarefa" exact component = {TarefasForm} />
            <Route path = "/tarefa/:cod" exact component = {TarefasForm} />
            <Route path = "/atualizaTarefa/:cod" exact component = {TarefasForm} />
            <Route path = "/tarefaDetalhe/:cod" exact component = {Detalhes} />
        </Switch>
    );
}

export default Rotas;