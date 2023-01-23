import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute';
import Main from './app/main';
import Dashboard from './app/dashboard';
const Home = React.lazy(() => import('./pages/Home'));
const Signin = React.lazy(() => import('./components/Login/Signin'));
const Signup = React.lazy(() => import('./components/Login/Signup'));
const Details = React.lazy(() => import('./pages/Details'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const DashboardHome = React.lazy(
    () => import('./components/Dashboard/DashboardHome/DashboardHome')
);
const AddProducts = React.lazy(
    () => import('./components/Dashboard/Products/AddProducts')
);
const Products = React.lazy(
    () => import('./components/Dashboard/Products/Products')
);
const Admin = React.lazy(() => import('./components/Dashboard/Admin/Admin'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="details" element={<Details />} />
                        <Route
                            path="checkout"
                            element={
                                <PrivateRoute>
                                    <Checkout />
                                </PrivateRoute>
                            }
                        />
                        <Route path="signin" element={<Signin />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="*" element={<div>404</div>} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route
                            path=""
                            element={
                                <PrivateRoute>
                                    <DashboardHome />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="admin"
                            element={
                                <PrivateRoute>
                                    <Admin />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="manage-product"
                            element={
                                <PrivateRoute>
                                    <Products />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="add-product"
                            element={
                                <PrivateRoute>
                                    <AddProducts />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<div>404</div>} />
                    </Route>
                    <Route path="*" element={<div>404</div>} />
                </Routes>
                <ToastContainer />
            </Suspense>
        </div>
    );
}

export default App;
