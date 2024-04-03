import React, { useEffect,useState } from 'react'
//import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; 
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function NuevoPermiso() {
        const [fecha,setFecha]= useState('')
        const [motivo,setMotivo]= useState('')
        const [token,setToken]= useState('')
        const [id_usuario,setIdUsuario]= useState(0)
        const {id}= useParams()//->Recoge los parametros a utiliza   
        const navigate= useNavigate()//->Sirve para navegar en las rutas

    const handleSave = async () =>{ //Es una funcion asincrona, manda a un segundo proceso
        try {//el await indica que el programa no termina hasta que realiza la funcion
          const response = await axios.post('http://permisosuttec.site/api/permiso/guardar',{
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
          const response = await axios.get('http://permisosuttec.site/api/permiso?id=' + id,{
            headers:{
              Authorization: 'Bearer' + token
            }   
        })
          console.log(response.data)
          setToken()
          setFecha(response.data.fecha)
          setMotivo(response.data.motivo)
        } catch (error) {
          console.log()
        }
      }

      useEffect(() => {
        setIdUsuario(localStorage.getItem('id_usuario'));
        if(id !== undefined){
            fetchData();
        }
    }, [fetchData, id]);
      

    return (
    <div className='sticky-top'>
        <div>
        <Navbar style={{background: 'rgb(59,94,150)', color: 'white'}} expand='lg' className='custom-navbar sticky-top' >
        <Navbar.Brand style={{color:'white'}} className='custom-brand sticky-top'> 
              <img
              alt=""
              src="https://piuttec.uttecamac.edu.mx/Content/Images/Logo%20UTTEC_redime.png"
              width="100"
              height="30"
              className="d-inline-block align-top ms-3"
            />{' '}
            Uttecamac Permisos</Navbar.Brand>
        <Navbar.Toggle style={{color:'white'}} aria-controls='basic.navbar-nav' />
        <Navbar.Collapse style={{color:'white'}} id='light-navbar-nav'>
            <Nav style={{color:'white'}} className='mr-auto'>
                <Nav.Link style={{color:'white'}} as={Link} to="/home" className='custom-link'>Permisos</Nav.Link>
                <Nav.Link style={{color:'white'}} as={Link} to="/nuevo" className='custom-link'>Nuevo</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
        <div className='container mt-4'>
            <Form>
                <Form.Group className="mb-3" controlId="">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Motivo</Form.Label>
                <Form.Control as="textarea" value={motivo} onChange={(e) => setMotivo(e.target.value)} rows={3} />
                </Form.Group>
                <Button  variant="success" onClick={handleSave}>Enviar</Button>{' '}
            </Form>
        </div>
    </div>
      );
}

export default NuevoPermiso;