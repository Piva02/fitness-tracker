import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ActivityForm = ({ onAddActivity }) => {
    const [activity, setActivity] = useState('');
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activity && duration) {
            onAddActivity({ activity, duration, distance });
            setActivity('');
            setDuration('');
            setDistance('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Actividad</Form.Label>
                <Form.Control
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="Correr, Nadar, etc."
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Duración (minutos)</Form.Label>
                <Form.Control
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Distancia (km)</Form.Label>
                <Form.Control
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
            </Form.Group>
            <Button className="mt-3" type="submit">
                Registrar Actividad
            </Button>
        </Form>
    );
};

export default ActivityForm;
