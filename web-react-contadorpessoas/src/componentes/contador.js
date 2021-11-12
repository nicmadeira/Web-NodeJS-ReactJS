import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

class Contador extends React.Component {
    constructor() {
        super();
        this.state = {
            contadorPessoas: 0,
        }
    }

    diminuir() {
        this.setState({
            contadorPessoas: this.state.contadorPessoas - 1,
        });
    }

    aumentar() {
        this.setState({
            contadorPessoas: this.state.contadorPessoas + 1,
        });
    }

    render() {
        return (
            <>
            <Row>
                <center>
                    <Col xs={6} md={2}>
                        <div>
                            <Card body className="cartao">
                                <h1>{this.state.contadorPessoas}</h1>
                            </Card>
                        </div>
                    </Col>
                </center>
            </Row>
            <br />
            <Row>
                <Col>
                    <Button variant="success" size="lg" onClick = {this.aumentar.bind(this)}>+</Button>{' '}
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Button variant="danger" size="lg" onClick = {this.diminuir.bind(this)}>-</Button>{' '}
                </Col>
            </Row></>
        );
    }
}

export default Contador;