import React from 'react';
import { Table } from 'react-bootstrap';

const ActivityList = ({ activities }) => {
    return (
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Actividad</th>
                    <th>Duración (min)</th>
                    <th>Distancia (km)</th>
                </tr>
            </thead>
            <tbody>
                {activities.length > 0 ? (
                    activities.map((activity, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{activity.activity}</td>
                            <td>{activity.duration}</td>
                            <td>{activity.distance || 'N/A'}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="text-center">
                            No hay actividades registradas.
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};

export default ActivityList;

