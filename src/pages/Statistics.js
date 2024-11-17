import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Statistics = ({ activities }) => {
    const navigate = useNavigate();
    
    const activityCounts = activities.reduce((acc, activity) => {
        acc[activity.activity] = (acc[activity.activity] || 0) + 1;
        return acc;
    }, {});

    const averageDistances = activities.reduce((acc, activity) => {
        if (activity.distance) {
            if (!acc[activity.activity]) {
                acc[activity.activity] = { total: 0, count: 0 };
            }
            acc[activity.activity].total += parseFloat(activity.distance);
            acc[activity.activity].count += 1;
        }
        return acc;
    }, {});

    
    const activityLabels = Object.keys(activityCounts);
    const activityData = Object.values(activityCounts);

    const averageLabels = Object.keys(averageDistances);
    const averageData = averageLabels.map(
        (key) =>
            averageDistances[key].total / averageDistances[key].count || 0
    );

    
    const pieData = {
        labels: activityLabels,
        datasets: [
            {
                data: activityData,
                backgroundColor: ['#4dd0e1', '#f06292', '#ffab40', '#9575cd'],
                hoverBackgroundColor: ['#26c6da', '#e91e63', '#ff9100', '#7e57c2'],
            },
        ],
    };

    
    const barData = {
        labels: averageLabels,
        datasets: [
            {
                label: 'Promedio de Distancia (km)',
                data: averageData,
                backgroundColor: '#4caf50',
                hoverBackgroundColor: '#388e3c',
            },
        ],
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">Estadísticas</h2>
            <Row>
                <Col md={6}>
                    <h4>Distribución de Actividades</h4>
                    <Pie data={pieData} />
                </Col>
                <Col md={6}>
                    <h4>Promedio de Distancia Recorrida</h4>
                    <Bar data={barData} />
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

export default Statistics;
