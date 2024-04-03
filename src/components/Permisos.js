import React, { useEffect, useState, useCallback } from "react";
import Menu from "./Menu";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./../styles/Permiso.css"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Permisos = () => {
  const [permisos, setPermisos] = useState([]);
  const [token, setToken] = useState('');
  const [id_usuario, setIdUsuario] = useState(0);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('http://permisosuttec.site/api/permisos?id_usuario=' + id_usuario,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      console.log(response.data)
      setPermisos(response.data)
    } catch (error) {
      console.log("Ocurrio un error: " + error)
    }
  }, [id_usuario, token]); 


  const deleteRecord = async (id) => {
    console.log(id);
    let id_user = localStorage.getItem('id_usuario');
    console.log(id_user);
    try {
      const response = await axios.post('https://permisosuttec.site/api/permiso/borrar',
      {
        'id' : id,
        'id_usuario' : id_user
      }
      ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      fetchData()
    } catch (error) {
      console.log("Ocurrio un error: " + error)
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    setIdUsuario(localStorage.getItem('id_usuario'))
    setToken(storedToken)
  }, [])

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token, fetchData]); 

  return (
    <div>
        <Menu />
        <Container className="mt-4">
            <Row>
            <Col>
                <h2>Registros</h2>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Profesor</th>
                    <th>Fecha</th>
                    <th>Motivo</th>
                    <th>Estado</th>
                    <th>Observaciones</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {permisos.map(permiso => (
                    <tr key={permiso.id}>
                        <td>{permiso.nombre}</td>
                        <td>{permiso.fecha}</td>
                        <td>{permiso.motivo}</td>
                        <td>{permiso.estado}</td>
                        <td>{permiso.observaciones}</td>
                        <td>
                        {permiso.estado === 'P' && (
                          <>
                            <Button variant="primary" onClick={() => navigate('/permiso/nuevo/' + permiso.id)}>Editar</Button>
                            <Button variant="danger" onClick={() => deleteRecord(permiso.id)}>Eliminar</Button>
                          </>                          
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </Col>
            </Row>
        </Container>
        <div className="floating-button">
            <Link to="/permiso/nuevo">
                <Button variant="primary">
                <FontAwesomeIcon icon={faPlus} />
                </Button>
            </Link>
        </div>
    </div>
  );
};

export default Permisos;
