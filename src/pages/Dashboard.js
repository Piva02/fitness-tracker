import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Dashboard = ({ activities, setActivities }) => {
    const navigate = useNavigate();

    const handleAddActivity = (activity) => {
        setActivities((prevActivities) => {
            const updatedActivities = [...prevActivities, activity];
            console.log("Actividades actualizadas en Dashboard:", updatedActivities);
            return updatedActivities;
        });
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">Panel de Actividades</h2>
            <Row className="mt-4">
                <Col md={6} className="mb-4">
                    <h3 className="text-primary">Registrar Actividad</h3>
                    <ActivityForm onAddActivity={handleAddActivity} />
                </Col>
                <Col md={6}>
                    <h3 className="text-primary">Historial de Actividades</h3>
                    <ActivityList activities={activities} />
                    <Button
                        className="mt-3 me-5"
                        variant="outline-info"
                        onClick={() => navigate('/history')}
                    >
                        Ver Historial Completo
                    </Button>
                    <Button
    className="mt-3"
    variant="outline-success"
    onClick={() => navigate('/statistics')}
>
    Ver Estadísticas
</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;

