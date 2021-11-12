import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Imagem extends Component {
    render(){
        let imagem = "https://i.pinimg.com/222x/ae/fc/a5/aefca55684256c0a467ad82663342a0b.jpg"

        return(
            <Image src={imagem} fluid></Image>
        );
    }
}

export default Imagem;