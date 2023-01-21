import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="details" element={<Details />} />
            </Routes>
        </div>
    );
}

export default App;
