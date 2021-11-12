import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Alunos from './pages/Alunos';
import AlunosForm from './pages/Alunos/Form';
import AlunosDetalhe from './pages/Alunos/Detalhes';

const Rotas: React.FC = () => {
    return(
        <Switch>
            <Route path = "/" exact component = {Inicio} />
            <Route path = "/Alunos" exact component = {Alunos} />
            <Route path = "/alunosCadastro" exact component = {AlunosForm} />
            <Route path = "/alunosCadastro/:codAluno" exact component = {AlunosForm} />
            <Route path = "/alunoDetalhe/:codAluno" exact component = {AlunosDetalhe} />
        </Switch>
    );
}

export default Rotas;