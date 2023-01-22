import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<h2>Dashboard</h2>} />
        </Routes>
    );
};

export default Dashboard;
