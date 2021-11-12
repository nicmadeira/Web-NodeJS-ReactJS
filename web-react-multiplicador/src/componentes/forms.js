import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Numero extends React.Component {
    //declarando variaveis e mostrando de onde ele precisa pegar pelas funções
    constructor() {
        super();

        this.state = {
            numero1: 0,
            numero2: 0,
            resultado: 0,
        };

        this.pegaNum1 = this.pegaNum1.bind(this);
        this.pegaNum2 = this.pegaNum2.bind(this);
    }

    //pegando numero1
    pegaNum1(event) {
        this.setState({
            numero1: Number(event.target.value),
        });
    }

    //pegando numero2
    pegaNum2(event) {
        this.setState({
            numero2: Number(event.target.value),
        });
    }

    //fazendo o calculo
    multNum = () => {
        this.setState({
            resultado: this.state.numero1 * this.state.numero2,
        });
    }

    render() {
        return(
            <>
            <Form>
                <Row>
                    <hr />
                    <Col>
                        <input className = "entrada" value = {this.state.numero1} onChange = {this.pegaNum1} />
                    </Col>
                    <br />
                    <Col>
                        <input className = "entrada" value = {this.state.numero2} onChange = {this.pegaNum2} />
                    </Col>
                    <br />
                    <Button variant="success" onClick = {this.multNum}>Calcular</Button>{' '}
                    <hr />
                    <h4>Resultado: <label>{this.state.resultado}</label></h4>
                </Row>
            </Form>
            </>
        );
    }
}

export default Numero;