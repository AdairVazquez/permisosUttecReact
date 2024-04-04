//rfce
import React, { useState, useEffect } from 'react'

import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "./../styles/principal.css"; 
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

function NuevoPermiso() {
  const [fecha,setFecha]= useState('')
  const [motivo,setMotivo]= useState('')
  const [token,setToken]= useState('')
  const [id_usuario,setIdUsuario]= useState(0)
  const {id}= useParams()//->Recoge los parametros a utilizar
  const navigate= useNavigate()//->Sirve para navegar en las rutas

  const handleSave = async () =>{ //Es una funcion asincrona, manda a un segundo proceso
    try {//el await indica que el programa no termina hasta que realiza la funcion
      const response = await axios.post('https://perrmisosuttec.site/api/permiso/guardar',{
        id: id | 0, id_usuario: id_usuario, fecha: fecha, motivo: motivo})
        console.log(response.data)
        if(response.data === "Ok"){
          navigate('/home')
        }
    } catch (error) {
      console.log()
    }
  }

  const fetchData = async () => {
    try {//el await indica que el programa no termina hasta que realiza la funcion
      const response = await axios.get('https://perrmisosuttec.site/api/permiso?id=' + id,{
        headers:{
          Authorization: 'Bearer' + token
        }   
    })
      setToken()
      console.log(response.data)
      setFecha(response.data.fecha)
      setMotivo(response.data.motivo)
    } catch (error) {
      console.log()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://permisosuttec.site/api/permiso?id=' + id, {
                headers: {
                    Authorization: 'Bearer ' + token 
                }
            });
            console.log(response.data);
            setToken('');
            setFecha(response.data.fecha);
            setMotivo(response.data.motivo);
        } catch (error) {
            console.log(error);
        }
    };

    setIdUsuario(localStorage.getItem('id_usuario'));
    if (id !== undefined) {
        fetchData();
    }
}, [id, token, fetchData]); 

  return (
    <div>
      <Menu/>
      <div className='ms-5 me-5 mt-5'>
        <h1 className='titulo'>Nuevo Permiso</h1>

            <Form style={{textAlign:'center'}}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label style={{color:'black'}} column sm="1">Fecha: </Form.Label>
                <Col >
                  <Form.Control type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </Col>
                <Form.Label style={{color:'black'}} column sm="2">Ingrese el motivo: </Form.Label>
                <Col >
                  <Form.Control as="textarea" rows={3} placeholder="Describa brevemente el motivo" 
                    value={motivo} onChange={(e) => setMotivo(e.target.value)}/>
                </Col>
            </Form.Group>

            <Button style={{margin:'25px'}} variant="success" onClick={handleSave} size="lg">Enviar</Button>
            </Form>
        </div>
    </div>
  )
}

export default NuevoPermiso