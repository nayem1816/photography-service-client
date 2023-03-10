import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute';
import Main from './app/main';
import Dashboard from './app/dashboard';
import NotFound from './pages/NotFound';
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
const Order = React.lazy(() => import('./components/Dashboard/Order/Order'));
const MyOrder = React.lazy(() => import('./pages/MyOrder'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="details/:id" element={<Details />} />
                        <Route
                            path="checkout/:id"
                            element={
                                <PrivateRoute>
                                    <Checkout />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="my-order"
                            element={
                                <PrivateRoute>
                                    <MyOrder />
                                </PrivateRoute>
                            }
                        />
                        <Route path="signin" element={<Signin />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="*" element={<NotFound />} />
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
                        <Route
                            path="orders"
                            element={
                                <PrivateRoute>
                                    <Order />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer />
            </Suspense>
        </div>
    );
}

export default App;
