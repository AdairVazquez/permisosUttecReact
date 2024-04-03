import React from 'react'
import {Button, Card} from 'react-bootstrap'
import Carrusel from './Carrusel'
import { Link } from 'react-router-dom'
import "./../styles/principal.css"; 

/*Imagenes*/ 
import est from '../img/est.svg'
import as from '../img/as.gif'
import cal from '../img/cal.gif'
import hor from '../img/hor.gif'
import res from '../img/res.gif'

function Principal() {
  return (
    <div className='row ms-4 me-4 mt-4'>
        <div className="floating-button">
            <Link to='/login'>
            <Button variant="outline-dark">Acceder</Button></Link>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"><img src={est} alt='logo del estado'></img></div>
        <div class="bordetop col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7"><h1 className='tituloP'>Universidad Tecnologica de Tecamac</h1></div>
        <hr></hr>
        <div class="row">
            <div style={{textAlign: 'center'}}>
                <h4>Secretaría de Educación, Ciencia, Tecnología e Innovación</h4>  
            </div>
        </div>
        <Carrusel style={{margin: '20px'}}/>
        <br></br><br></br>
        <div className='contenedor-tarjetas'>
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={as} />
                <Card.Body>
                    <Card.Title>Registro Aspirantes</Card.Title>
                    <Card.Text>Realiza tu registro</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={res} />
                <Card.Body>
                    <Card.Title>Consulta tus resultados</Card.Title>
                    <Card.Text>Consulta tus resultados</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hor} />
                <Card.Body>
                    <Card.Title>Horarios Enero - Abril 2024</Card.Title>
                    <Card.Text>Consulta tu horario de clases</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cal} />
                <Card.Body>
                    <Card.Title>Calendario Escolar</Card.Title>
                    <Card.Text>Consulta el calendario escolar para el cuatrimestre en curso</Card.Text>
                </Card.Body>
            </Card> 
        </div>
        
    </div>
  )
}

export default Principal