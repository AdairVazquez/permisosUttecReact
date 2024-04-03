import React, { useState } from 'react'
import axios from 'axios';
import "./../styles/login.css"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Login({setIsLoggedIn}) {
    const [error, setError] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://permisosuttec.site/api/login',{
            email: username,password:password
        });

        if(response.data.acceso === 'Ok'){
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('id_usuario',response.data.id_usuario)
            setIsLoggedIn(true);
            //secureLocalStorage-> Componente para encriptar
            navigate('/home');
        } else {
            setError(response.data.error);
        }
        console.log(response.data);

        
    }

    return(
      <div className='container'>
        <div className='frame'>
            <div className='nav links'> 
                    <h1 className='signin-active'>Inicio de sesión</h1>
                    { error && <Alert variant="danger">{error}</Alert> }
            </div>
                    <Form className="form-signin" onSubmit={handleLogin}>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo electronico: </Form.Label>
                        <Col>
                            <Form.Control className='form-styling' type="email" placeholder="name@example.com" value={username} onChange={(e) =>{setUserName(e.target.value)}} />
                        </Col>
                        <Form.Label>Contraseña: </Form.Label>
                        <Col>
                            <Form.Control className='form-styling' type="password" placeholder="Password" value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
                        </Col>
                    </Form.Group>
                    <div className='btn-animate' >
                        <Button className='btn-signin' type="submit">Acceder</Button>
                    </div>
                    </Form>
        </div>
    </div>
    );
}

export default Login