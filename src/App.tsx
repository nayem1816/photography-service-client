import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './app/main';
import Dashboard from './app/dashboard';
const Home = React.lazy(() => import('./pages/Home'));
const Signin = React.lazy(() => import('./components/Login/Signin'));
const Signup = React.lazy(() => import('./components/Login/Signup'));
const Details = React.lazy(() => import('./pages/Details'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="details" element={<Details />} />
                        <Route path="signin" element={<Signin />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="*" element={<div>404</div>} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="*" element={<div>404</div>} />
                    </Route>
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
