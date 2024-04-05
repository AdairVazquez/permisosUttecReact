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

        const response = await axios.post('https://permisosuttec.site/api/login',{
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
      <div >
            <div className='ms-5 me-5 mt-5'>
                <center>
                <img
                 alt=""
                 src="https://piuttec.uttecamac.edu.mx/Content/Images/Logo%20UTTEC_redime.png"
                 width="300"
                 height="100"
                 className="d-inline-block align-top ms-3"
                />
                <h1 className='mt-5 color-letras'>SISTEMA DE GESTIÓN DE DÍAS ECONÓMICOS</h1>
                </center>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form style={{marginTop: '40px', marginLeft: '300px', marginRight: '300px' }} onSubmit={handleLogin}>
                <Form.Group className="mb-3 ml-5" controlId="exampleForm.ControlInput1">
                    <Form.Label className="color-letras">Correo electronico</Form.Label>
                    <Form.Control type="email" value={username} onChange={(e) => {setUserName(e.target.value)}} placeholder="name@example.com" />
                    <Form.Label className='mt-1 color-letras'>Contraseña</Form.Label>
                    <Form.Control type="password" value={password}  onChange={(e) => {setPassword(e.target.value)}} placeholder="Ingresa tu contraseña" />
                    <br /><center><a className=' mt-2' href="./pdf" target="_blank" rel="noopener noreferrer">Aviso de privacidad</a><br />
                    <Button className=' mt-2' type="submit" variant="outline-success">Ingresar</Button>{' '}</center>
                </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default Login
