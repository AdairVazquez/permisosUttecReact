import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import log from '../img/log.jpeg'

function Menu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className='custom-navbar'>
        <Navbar.Brand className='custom-brand' href="../home">
          <img alt="" src={log} width="50" height="50" style={{margin:'5px'}} className="d-inline-block align-top"/>Permisos UTTEC</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
            <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/permisos' className='custom-link'>Permisos</Nav.Link>
                <Nav.Link as={Link} to='/permiso/nuevo' className='custom-link'>Nuevo</Nav.Link>
                <Nav.Link as={Link} to='/login'><Button variant="outline-danger">Salir</Button></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu