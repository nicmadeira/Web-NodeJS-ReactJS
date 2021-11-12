import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <Navbar bg = "dark " expand = "lg" variant = "dark">
            <Container>
                <Navbar.Brand href = "#inicio">CadTarefas</Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav" />
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link as = {Link} className = "nav-item" to = "/">Inicio</Nav.Link>
                        <Nav.Link as = {Link} className = "nav-item" to = "/tarefas">Tarefas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;