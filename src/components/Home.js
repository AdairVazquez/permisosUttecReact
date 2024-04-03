import React from 'react'
import Menu from "./Menu";

import {Card} from 'react-bootstrap'
import "./../styles/principal.css"; 

/*Imagenes*/ 

import cal from '../img/cal.gif'

import res from '../img/res.gif'

function Home() {
  return (
    <div>
        <Menu />
        <h1 className='subtitulo'>Anuncios</h1>
        <div className='contenedor-tarjetas'>
        <Card style={{ width: '25%' }}>
                <Card.Img variant="top" src={cal} />
                <Card.Body>
                    <Card.Title>Calendario escolar</Card.Title>
                    <Card.Text>Conoce las fechas del calendario escolar</Card.Text>
                </Card.Body>
          </Card>
            <Card style={{ width: '25%' }}>
                <Card.Img variant="top" src={res} />
                <Card.Body>
                    <Card.Title>Evaluaciones</Card.Title>
                    <Card.Text>Recuerda subir evaluciones en tiempo y forma</Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    </div>
  )
}

export default Home