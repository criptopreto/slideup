import React from 'react';
import {Container} from 'react-bootstrap';
import img from '../images/bg-01-min.jpg'
import '../styles/login.css';

class Login extends React.Component {
    render() {
        return(
            <div>
                <img src={img} alt="ciudad"/>
                <Container>
                    <h1>Hola</h1>
                </Container>
            </div>
        )
    }
}

export default Login;