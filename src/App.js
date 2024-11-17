import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, UserContext } from './context/UserContext';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Statistics from './pages/Statistics';

const App = () => {
    const [activities, setActivities] = useState([]); // Estado global

    useEffect(() => {
        console.log("Estado global de actividades en App.js:", activities);
    }, [activities]);

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard activities={activities} setActivities={setActivities} />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/history"
                        element={
                            <ProtectedRoute>
                                <History activities={activities} />
                            </ProtectedRoute>
                        }
                    />
                    <Route
    path="/statistics"
    element={
        <ProtectedRoute>
            <Statistics activities={activities} />
        </ProtectedRoute>
    }
/>
                </Routes>
            </Router>
        </UserProvider>
    );
};

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    return user ? children : <Navigate to="/" />;
};

export default App;



