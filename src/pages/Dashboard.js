import React, { useState } from 'react';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css'; 

const Dashboard = () => {
    const [activities, setActivities] = useState([]);

    
    const handleAddActivity = (activity) => {
        setActivities((prevActivities) => [...prevActivities, activity]);
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
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;

