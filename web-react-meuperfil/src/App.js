import React from 'react';
import { Container, Row , Col, Accordion} from 'react-bootstrap';
import './App.css';
import Imagem from './componentes/imagem';

function App () {
  return (
      <Container>

        <Row className="justify-content-md-center">
          <Col>
            <center><h1>Meu Perfil</h1></center>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs = {6} md = {4}>
              <Imagem />
          </Col>
        </Row>

        <br/>
      
        <Row>
          <Col>
            <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Dados Pessoais</Accordion.Header>
                    <Accordion.Body>
                      <p>Nicolas Nóbrega Madeira;</p>
                      <p>19 Anos;</p>
                      <p>Santos,São Paulo;</p>
                      <p>Brasileiro</p>
                    </Accordion.Body>
                  </Accordion.Item>
              <Accordion.Item eventKey="1">
              <Accordion.Header>Formação</Accordion.Header>
                <Accordion.Body>
                  <p>Técnico de redes - Etec</p>
                  <p>Cursando Bacharel em Ciências da Computação - UNIP</p>
                  <p>Ensino Médio Completo</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
              <Accordion.Header>Experiência</Accordion.Header>
                <Accordion.Body>
                  <p>Estagiario na SkyOne Solutions</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
              <Accordion.Header>Projetos</Accordion.Header>
                <Accordion.Body>
                  <p>Segurança de Rede</p>
                  <p>Cisco Cybersecurity</p>
                  <p>Azure Az900</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
  );
}
export default App;