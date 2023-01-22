import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className="">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
