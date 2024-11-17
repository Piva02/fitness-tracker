import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ActivityList from '../components/ActivityList';
import { useNavigate } from 'react-router-dom';

const History = ({ activities }) => {
    const navigate = useNavigate();
    console.log("Actividades recibidas en History:", activities);
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2 className="text-center">Historial de Actividades</h2>
                    {activities.length > 0 ? (
                        <ActivityList activities={activities} />
                    ) : (
                        <p className="text-center" style={{ color: '#ffffff' }}>
                            No hay actividades registradas en el historial.
                        </p>
                    )}
                </Col>
                <Button
    className="mt-3"
    variant="outline-success"
    onClick={() => navigate('/dashboard')}
>
    Regresar a Dashboard
</Button>
            </Row>
        </Container>
    );
};

export default History;

